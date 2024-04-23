import React, { useEffect, useState } from 'react'
import style from '../style/doctors.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Banner from './Banner'

const Doctors = () => {
    let [doctors,setDoctors]=useState([])

    useEffect(()=>{
        axios({
            method: 'get',
            url: 'doctors/',
            withCredentials: false,
        })
        .then(res=>{
            setDoctors(res.data)
        })
        .catch((err)=>console.log(err))
    },[])
    let listDoctor=()=>{
        return(
            doctors.map(x=>{
                return (
                    <div key={x.id}>
                        <h2>Name: <span>{x.name}</span></h2>
                        <h2>Specialty: <span>{x.specialty}</span></h2>
                        <Link to={`/availability/${x.id}/${x.name}`}>Check Availability</Link>
                    </div>
                    )
                })
            
        )

    }
  return (
    <div className={style.Doctors}>
        <Banner></Banner>
        <div className={style.list}>
            {listDoctor()}
        </div>
    </div>
  )
}

export default Doctors