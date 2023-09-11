import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import route from './../router/route.json'

const Complite=()=>{

const [time,setTime]=useState(10);

const navigate=useNavigate()

useEffect(()=>{
setTimeout(()=>{
setTime(time-1)
},1000)
if(time===1){
    navigate(route.HOME)
}
},[time])

    return(
<div style={{textAlign:'center'}}>
<style>
    {
        `body{
            background-color:bisque;
        }`
    }
    </style>
    <div style={{margin:'60px 0', color:'green', fontStyle: 'italic',fontSize:'50px'}}>
<p>Order Successful</p>
<p>Your Order Get Well Soon....</p>
</div>
<div style={{marginTop:'90px',color:'gray'}}>
<h2>You Will Redirect To Home Page In {time} Sec</h2>
<h2>Click Here To Go<NavLink to={route.HOME} style={{textDecoration:'none'}}> Home Page</NavLink></h2>
</div>
</div>
    )
}

export default Complite;