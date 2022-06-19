import Home from './pages/Home'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import UserProfilePage from './pages/UserProfilePage';

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path='/'        exact element={<Home/>}/>
        <Route path='/profile' exact element={<UserProfilePage/>}/>
      </Routes>
    </div>
  );
}