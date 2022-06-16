import Home from './pages/Home'
import './App.css'
import {Route, Routes} from 'react-router-dom'

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' exact element={<Home/>}/>
      </Routes>
    </div>
  );
}