import React from 'react'
import { Link } from 'react-router-dom'
import style from '../style/Nav.module.css'
const Nav = () => {
  return (
    <nav className={style.Nav}>
        <h1 className={style.branding}>Docppointment</h1>
        <div className={style.menu}>
            <Link to="/">Booking</Link>
            <Link to="/Doctors">Doctors</Link>
        </div>
    </nav>
  )
}

export default Nav