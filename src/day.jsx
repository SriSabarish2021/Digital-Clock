import './day.css'
import { useEffect, useState } from 'react'

const Day = () => {
  const[curday,newday]=useState('')
    const[curmon,newmon]=useState('')
    const[curyr,newyr]=useState('')
    const[curdate,newdate]=useState('')

    useEffect(()=>{
      
      const getcalen=()=>{
          let calender=new Date()
          const day=calender.getDay()
          console.log(day);
          
          const DayNames = [
            "Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday",
            "Saturday"];
          
          const dayName = DayNames[day];
          newday(dayName)
          const month=calender.getMonth()
          const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
          
          const monthName = monthNames[month];
          newmon(monthName)
          const year=calender.getFullYear()
          const yrstr=year.toString()
          newyr(yrstr)
          const date=calender.getDate()
          const dtstr=date.toString()
          newdate(dtstr)
      }
      let timer=setInterval(() => {
          getcalen()
      },1000);
      return () => clearInterval(timer)
  },[curday])
 

  return (
    <div className="day">
        <p>{curday}&nbsp;&nbsp;,&nbsp;{curmon}&nbsp;&nbsp;{curdate}&nbsp;&nbsp;,&nbsp;{curyr}</p>
    </div>
  )
}

export default Day