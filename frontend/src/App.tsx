import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

export default function App()
{
  return (
    <>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/register" element={ <Register / > } />
      <Route path="/login" element={ <Login /> } />
      <Route path='/*' element={ <NotFound /> } />
    </Routes>
    </>
  )
}