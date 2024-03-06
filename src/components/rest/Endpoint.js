import axios from 'axios';
import {dev} from '../../Environment';


const autheticate=(username,password)=>{
    return instance.post('/login',{username,password},
    { headers:{'Content-type':'application/json'}
})
}
const register=(user)=>{
return axios.post('/signup',user).then(res=>{
    console.log(res.data);
})
}


/*function register(user) {
    return instance.post('/signup', user, {
      headers: { 'Content-type': 'application/json' }   
    }).then((res)=>{
        console.log(res);
    })
  }*/
  
  function numberOfUsers() {
    return instance.get('/public/numberOfUsers')
  }
  
  function getUsers(user, username) {
    const url = username ? `${username}` : '/api/users'
    return instance.get(url, {
      headers: { 'Authorization': basicAuth(user) }
    })
  }
  export const endpoint={
    autheticate,
    register,
    numberOfUsers,
    getUsers
    
}
  

//axios instance
const instance=axios.create({
    baseURL:dev.url
})
//helper function
const basicAuth=(user)=>{
    return `Basic ${user.authdata}`
}