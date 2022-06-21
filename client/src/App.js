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
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
      .then((res) => (res.ok ? res.json() : Promise.resolve(null)))
      .then(setUser)
  }, [])

  return (
    <UserContext.Provider value={user}>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path='/'        exact element={<Home/>}/>
          <Route path='/login'   exact element={<Login setUser={setUser}/>}/>
          <Route path='/signup'  exact element={<SignUp setUser={setUser}/>}/>
          <Route path='/profile' exact element={<UserProfilePage setUser={setUser}/>}/>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}