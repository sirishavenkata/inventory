import { createContext,useContext, useEffect, useState } from "react";
import React from 'react';


export const authContext=createContext();



export const Authprovider = ({children}) => {
    const[user,setuser]=useState(null);


    useEffect(()=>{
      const storeduser=JSON.parse(localStorage.getItem('user'));
      setuser(storeduser);
    },[]);

    const getUser=()=>{
      return JSON.parse(localStorage.getItem('user'));
    }
    const login=(user)=>{
        localStorage.setItem('user',JSON.stringify(user));
        setuser(user);
    }

    const logout=(user)=>{
      localStorage.removeItem('user');
      setuser(null);
    }
    const register=(user)=>{
      localStorage.setItem('user');
      setuser(user);
    }

    const isUserAutheticated=(user)=>{
      return localStorage.getItem('user') != null
    }

    const contextvalue={
        user,
        login,
        register,
        logout,
        isUserAutheticated,
        getUser
    }

    

  return (
    <div>
      <authContext.Provider value={contextvalue} >
        {children}
      </authContext.Provider>
    </div>
  )
}

export const useAuth =()=>{
  return useContext(authContext);
}
  

