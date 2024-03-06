import React from 'react';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Dashbord from './components/Dashbord';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Authprovider } from './components/context/Authcontext';
import { ToastContainer } from 'react-toastify';
import Modalcomponent from './components/Modalcomponent';
import UpdateModal from './components/UpdateModal';

const Navigation = () => {
  return (
    <div className='Navigation'>
    <ToastContainer/>
      <Authprovider>
        <Router>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path="*" element={<Navigate to="/Login" />} />
            <Route path="/dashboard" element={<Dashbord />} />
            <Route path="/popup" element={<Modalcomponent />} />
            <Route path="/updatedata" element={<UpdateModal />} />
            <Route path="/logout" element={<logout />} />
          </Routes>
        </Router>
      </Authprovider>
      </div>
  )
}

export default Navigation
