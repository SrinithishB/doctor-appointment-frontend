import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from '../style/Booking.module.css'
import Banner from './Banner'

const Booking = () => {
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
    let [name,setName]=useState('')
    let [date,setDate]=useState('')
    // let [status,setStatus]=useState('')
    let [doctor,setDoctor]=useState()
    let onSubmit=()=>{
        let context={
            patient_name:name,
            appointment_time:date,
            status:"Pending",
            doctor:doctor,
        }
        axios.post('appointments/',context)
        .then(res=>{
            console.log(res.status===201?"Success":"Give the correct input")
        })
        .catch((err)=>console.log(err))
    }
  return (
    <div className={style.Booking}>
        <Banner></Banner>
        <div className={style.form}>
            <h1>Book Appointment</h1>
            <input type="text" placeholder='Patient Name' onChange={x=>setName(x.target.value)}/>
            <input type="datetime-local" onChange={x=>setDate(x.target.value)}/>
            {/* <select name="status" id="status" onChange={x=>setStatus(x.target.value)}>
                <option value="">Status</option>
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Cancelled">Cancelled</option>
            </select> */}
            <select name="doctor" id="doctor" onChange={x=>setDoctor(x.target.value)}>
                <option value="">Doctor</option>
                {doctors.map(x=>{
                    return <option key={x.id} value={x.id}>{x.name}</option>
                })}
            </select>
            <button onClick={onSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Booking