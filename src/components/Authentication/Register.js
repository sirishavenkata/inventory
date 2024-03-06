import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/Authcontext';
import { Button, Form, Grid, Header, Segment, Message, Icon } from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import { endpoint } from '../rest/Endpoint';
import axios from 'axios';
import { handleLogError } from '../rest/Exception';
import '../../index.css';
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

  const authContext = useAuth();
  const date=new Date();
  const isLoggedIn = authContext.userIsAuthenticated;
  const [firstName, setFirstname] = useState();
  const [lastName, setLastname] = useState();
  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();
  const [Dob, setDob] = useState(null);
  const [createdBy,setCreatedBy]=useState();
  const[createdon,setCreatedOn]=useState();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrormessage] = useState('');

  const userdata = { firstName, lastName, userName, password, Dob };

  const handleInputChange = (e, { name, value }) => {
    if (name === 'firstName') {
      setFirstname(value);
    }
    else if (name === 'lastName') {
      setLastname(value);
    }
    else if (name === 'userName') {
      setUsername(value);
    }
    else if (name === 'password') {
      setPassword(value);
    }
    else if (name === 'Dob') {
      setDob(value)
    }

  }

  const handleDateChange = (e, { value }) => {
    value = e.toLocaleDateString();
    setDob(value);
  }

  if (isLoggedIn) {
    return <Navigate to='/dashboard' />
  }


  const handleSubmit = async (e) => {
   
    setUsername(e.target[2].value);
    setFirstname(e.target[0].value);
    setLastname(e.target[1].value);
    setPassword(e.target[3].value);
    setDob(e.target[4].value);
    setCreatedBy(e.target[2].value);
    setCreatedOn(date.toLocaleDateString());
    console.log("user", userName);
    console.log("user", password);
    console.log("user", firstName);
    if (!(userName && password && firstName && lastName && Dob)) {
      setIsError(true);
      setErrormessage('Please fill all feilds ');
      return;
    }else {
      setIsError(false);
      setErrormessage('');
    }
    const user = { userName, firstName, lastName, password, Dob,createdBy,createdon };
    try {
      
      const response=await axios.post('http://localhost:8080/signup', user);
      if(response){
        toast.success(`${userName}`+ "   registered Successfully !");
        window.location.href='/dashboard';
      }
      if (isLoggedIn) {
        return <Navigate to='/dashboard' />
      }
      const { id, name, role } = response.data;
      const authdata = window.btoa(userName + ':' + password);
      const authenticatedUser = { id, name, role, authdata };
      authContext.login(authenticatedUser);
      setUsername('');
      setFirstname('');
      setLastname('');
      setPassword('');
      setDob('');
      setCreatedBy('');
      setCreatedOn('');
      

    } catch (error) {
      toast.error("please Register again")
      handleLogError(error)
      if (error.response && error.response.data) {
        const errorData = error.response.data
        let errorMessage = 'Invalid fields'
        if (errorData.status === 409) {
          errorMessage = errorData.message
        } else if (errorData.status === 400) {
          errorMessage = errorData.errors[0].defaultMessage
        }
        setIsError(true);
        setErrormessage(errorMessage);
      }
    }



  }


  return (
    
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Register to your account
        </Header>
        <ToastContainer />
        <Form size='large' onSubmit={handleSubmit}>
          <Segment stacked>

            <Form.Input fluid icon='user' iconPosition='left' placeholder='FirstName' value={firstName}
              onChange={handleInputChange} />
            <Form.Input fluid icon='user' iconPosition='left' placeholder='LastName' value={lastName}
              onChange={handleInputChange} />
            <Form.Input fluid icon='user' iconPosition='left' placeholder='UserName' value={userName}
              onChange={handleInputChange} />
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' value={password}
              onChange={handleInputChange} />
            <Form.Input fluid iconPosition='left' placeholder='Date Of Birth' >
              <DatePicker name='Dob' selected={Dob} value={Dob} onChange={handleDateChange} dateFormat="YYYY/MM/dd" dateFormatCalendar="YYYY-MM" minDate={new Date("1900-01-01")}
                maxDate={new Date()}   ></DatePicker>
            </Form.Input>

            <div className="two fields">
              <div className="five wide field">
                <Button color='teal' fluid size='large'>
                  Register
                </Button>
              </div>
              <div className="five wide field">
                <Button color='teal' fluid size='large'>
                  Cancel
                </Button>
              </div>
            </div>
          </Segment>
        </Form>
        <Message>
          Already Registered? <a href='/login'>Login</a>
        </Message>
        {isError && <Message negative>{errorMessage}</Message>}
      </Grid.Column>

    </Grid >


  )
}

export default Register;
