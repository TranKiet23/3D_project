import React from 'react'
import { Route, BrowserRouter  as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Project, Contact } from "./pages"
const App = () => {
  return (
   <main className='bg-state-300/20'>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/project' element={<Project></Project>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>

      </Routes>
    </Router>
   </main>
  )
}

export default App