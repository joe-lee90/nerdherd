import Home from './pages/Home'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import UserProfilePage from './pages/UserProfilePage';
import React, { createContext, useContext, useEffect, useState } from "react";
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const UserContext = createContext(null)

export function useAuthenticatedUser(){
  return useContext(UserContext)
}

export default function App() {
  const [currentUser, setCurrentUser] = useState('')
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('/events')
    .then((res) => res.json())
    .then((data) => {
      setEvents(data)})
  }, [])

  useEffect(() => {
    fetch("/auth")
      .then(res => {
        if(res.ok){
          res.json().then(user => setCurrentUser(user))
        }
      })
  }, []) 

  // if(!currentUser) return <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />

  return (
    <UserContext.Provider value={currentUser}>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path='/'        exact element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
          <Route path='/home'    exact element={<Home events={events}/>}/>
          <Route path='/signup'  exact element={<SignUp setCurrentUser={setCurrentUser}/>}/>
          <Route path='/profile' exact element={<UserProfilePage currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}