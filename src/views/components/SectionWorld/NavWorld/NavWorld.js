import React, {useState} from 'react'
import {Link} from "react-router-dom"
import stile from "./navWorld.module.css"

function NavWorld() {

  const[select, setSelect] = useState(1)
  

   const control =(num)=>{
   if(select===num){
     return {backgroundColor:"var(--blue--dark)", color:"var(--white--light)"}
   }
  }

  return (

    <nav className={stile.container}>

    <Link to="/dashboard/world/posts" style={control(1)} onClick={()=>setSelect(1)}> Posts </Link>
    <Link to="/dashboard/world/users" style={control(2)} onClick={()=>setSelect(2)}> Utenti </Link>
    <Link to="/dashboard/world/travels" style={control(3)} onClick={()=>setSelect(3)}> Viaggi </Link>

    </nav>


  )
}

export default NavWorld