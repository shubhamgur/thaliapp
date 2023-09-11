import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Model from "../components/Model/Model";
import route from './../router/route.json'

const Entry=()=>{

const naviget=useNavigate()

const btnClick=()=>{
naviget(route.MANUE)
}

    return(
        <div >
        <Button onClick={btnClick} variant="warning" style={{position:'relative',top:'350px',left:'600px',width:'150px'}}>Order food</Button>
        <style>
            {
                `body{
                    background-image:url('');
                    background-color:bisque;
                    background-repeat: no-repeat;
                    background-size: 1400px 650px;
                   ;
                }`
            }
        </style>
        <div style={{position:'relative',top:'0'}}>
            <Model/>
        </div>
        </div>
    )
}

export default Entry;