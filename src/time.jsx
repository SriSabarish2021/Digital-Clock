import { useEffect, useState } from 'react'
import './time.css'
const Time = () => {
    const[cursec,newsec]=useState('00')
    const[curmin,newmin]=useState('00')
    const[curhr,newhr]=useState('00')

    useEffect(()=>{
        const getsec=()=>{
            let time=new Date()
            const seconds=time.getSeconds()
            const proper=seconds.toString()
            let gotedsec=proper.padStart(2,0)
            newsec(gotedsec)
            const minutes=time.getMinutes()
            const minstr=minutes.toString()
            let gotmin=minstr.padStart(2,0)
            newmin(gotmin)
            const hour=time.getHours()
            const hrstr=hour.toString()
            let gothr=hrstr.padStart(2,0)
            newhr(gothr)
        }
        let timer=setInterval(() => {
            getsec()
            console.log({cursec})           
        },1000);
        return () => clearInterval(timer)
    },[cursec]) 
   

  return (
    <div className="time">
        <p> {curhr} :{curmin} :{cursec} {curhr>=12?'PM':'AM'}</p>
    </div>
  )
}

export default Time