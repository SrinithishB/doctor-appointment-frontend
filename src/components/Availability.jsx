import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import style from '../style/Availability.module.css'

const Availability = () => {
  let parms=useParams()
  let id=parms.id
  let [availability,setAvailability]=useState([])
  useEffect(()=>{
    axios.get(`doctors/${id}/availability/`)
    .then((resp)=>{
      setAvailability(resp.data)
    }).catch(err=>{
      console.log(err);
    })
  },[])
  let listAvailabilities=()=>{
    return(
      availability.map((x)=>{
        return(
          <div key={x.id}>
            <h3>Week: <span>{x.day_of_week}</span></h3>
            <h3>Start: <span>{x.start_time}</span></h3>
            <h3>End: <span>{x.end_time}</span></h3>
            <h3>Max Patients: <span>{x.max_patients}</span></h3>
          </div>
        )
      })
  )
  }
  return (
    <div className={style.Availability}>
      <Banner></Banner>
      <div className={style.content}>
        <h1>{parms.name}</h1>
        <div className={style.list}>
          {listAvailabilities()}
        </div>
      </div>
    </div>
  )
}

export default Availability