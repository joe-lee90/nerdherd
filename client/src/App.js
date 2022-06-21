import Home from './pages/Home'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import UserProfilePage from './pages/UserProfilePage';
import React, { createContext, useContext, useEffect, useState } from "react";
import AuthForm from "./pages/AuthForm";

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

  function signup(username, imageURL, password, passwordConfirmation) {
    fetch(
      "/signup?" +
        new URLSearchParams({
          username,
          image: imageURL,
          password,
          password_confirmation: passwordConfirmation,
        }),
      {
        method: "POST",
      }
    )
    .then((res) => res.json())
    .then((data) => {
      setUser(data)
    })
  }

  function login(username, password) {
    fetch("/login?" + new URLSearchParams({ username, password }), {
      method: "POST",
    })
    .then((res) => res.json())
    .then((data) => {
      setUser(data)
    })
  }

  function logout() {
    fetch("/logout?" + new URLSearchParams({ username: user.username }), {
      method: "DELETE",
    })
    .then(() => setUser(null))
  }

  const auth = { signup, login, logout }

  return (
    <UserContext.Provider value={user}>
      <div className="app">
        <NavBar auth={auth}/>
        {/* {user === null && <AuthForm auth={auth} />} */}
        <Routes>
          <Route path='/'        exact element={<Home auth={auth}/>}/>
          <Route path='/profile' exact element={<UserProfilePage/>}/>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}