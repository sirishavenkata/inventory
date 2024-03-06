import {React,useState} from 'react';
import {Grid,Header,Form,Segment,Message,Button} from 'semantic-ui-react';
import { useAuth } from '../context/Authcontext';
import { NavLink,Navigate } from 'react-router-dom'
import { endpoint } from '../rest/Endpoint';
import { handleLogError } from '../rest/Exception';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

    const auth=useAuth();
    const isloggedin=auth.isUserAutheticated();
    const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrormessage] = useState('');

  const handleInputChange=(e,{name,value})=>{
    if (name === 'username') {
        setUsername(value);
      } else if (name === 'password') {
        setPassword(value);
      }
      
  }
  const authlogin={username,password};

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!(username && password)) {
      setIsError(true);
      setErrormessage("Invalid Username or Password");
      return
    }

    try {
      const response = await axios.post('http://localhost:8080/login',authlogin);
      if(response){
        toast.success(`${username}` +"    Logged In Successfully !");
      }
      const { id, name} = response.data
      const authdata = window.btoa(username + ':' + password)
      const authenticatedUser = { id, name, authdata }

      auth.login(authenticatedUser);

      setUsername('');
      setPassword('');
      setIsError(false)
    } catch (error) {
      toast.error("Incorrect Username or password");
      handleLogError(error)
      setIsError(true)
    }
  }

  

if (isloggedin) {
  return <Navigate to={'/dashboard'} />
}
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'> Log-in to your account
      </Header>
      <Form size='large' onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='UserName' 
          name='username' value={username} onChange={handleInputChange} />
                      <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'
                        name='password' value={password} onChange={handleInputChange}/>

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        {`New to us? `}  
        <NavLink to="/Register" as={NavLink} color='teal'>Register</NavLink>
      </Message>
      {isError && <Message negative>{errorMessage}</Message>}
    </Grid.Column>
  </Grid>
  )
}

export default Login;
