import React from 'react'
import Registration from './pages/Registration.jsx'
import Login from './pages/Login.jsx'
import Chats from './pages/Chat.jsx'
import {BrowserRouter as Routers, Route, Routes} from 'react-router-dom'
import ProfilePic from './pages/ProfilePic.jsx'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from'./pages/ResetPassword';

export default function App() {
  var ws = new WebSocket('wss://smart-room-chat.herokuapp.com/');         

ws.onopen = function()    
{

   // Web Socket is connected, send data using send()
   var data={
     mid:"login",
     uid: myId

   };
        ws.send(JSON.stringify(data));      

     };  
  return (
    <div>
      <Routers>
        <Routes>
          <Route exact path='/register' element={<Registration />} />
          <Route exact path='/' element={<Login />}/>
          <Route exact path='/forgetPassword' element={<ForgetPassword />} />
          <Route exact path="/resetPassword/:id/:token" element={<ResetPassword />} />
          <Route exact path="/setProfile" element={<ProfilePic />} />
          <Route exact path='/chats' element={<Chats />} />
        </Routes>
      </Routers>
    </div>
  )
}
