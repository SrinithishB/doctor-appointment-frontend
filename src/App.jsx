import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './components/Nav'
import Booking from './components/Booking'
import Doctors from './components/Doctors'
import Availability from './components/Availability'

const App = () => {
  return (
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
        <Route path="/" element={<Booking />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/availability/:id/:name" element={<Availability/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App