import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from './AllItem.module.css';
import route from './../../router/route.json'
import { useEffect } from "react";
import { useState } from "react";


const AllItem=({item,setItem})=>{

const [msg,setMsg]=useState('')

    const navigate=useNavigate();

       useEffect(()=>{
setItem([{name:'Chapati',present:false,amount:0},
{name:'Pickle',present:false,amount:0},
{name:'Curd',present:false,amount:0},
{name:'Sweet',present:false,amount:0},
{name:'Daal',present:false,amount:0},
{name:'Paneer Dish',present:false,amount:0},])
       },[])
       

const ChapatiBtn=()=>{
    const datas=[...item]
   datas[0].present=!datas[0].presen;
   datas[0].amount=30;
   setItem(datas)
}

const PickleBtn=()=>{
    const datas=[...item]
    datas[1].present=!datas[1].presen;
    datas[1].amount=20;
    setItem(datas)
}

const CurdBtn=()=>{
    const datas=[...item]
    datas[2].present=!datas[2].presen;
    datas[2].amount=25;
    setItem(datas)
}

const SweetBtn=()=>{
    const datas=[...item]
    datas[3].present=!datas[3].presen;
    datas[3].amount=40;
    setItem(datas)
}

const DaalBtn=()=>{
    const datas=[...item]
    datas[4].present=!datas[4].presen;
    datas[4].amount=40;
    setItem(datas)
}

const PaneerBtn=()=>{
    const datas=[...item]
    datas[5].present=!datas[5].presen;
    datas[5].amount=60;
    setItem(datas)
}

    const chackOutBtn=()=>{

        let count=0;
        for(let i=0;i<item.length;i++){
            if(item[i].present){
                count++;
            }
        }

        if(count<2){
            setMsg('Select Atlist Two Items');
            setTimeout(()=>{
                setMsg('')
            },3000)
            return;
        }
        navigate(route.BILL)
    }

return(
    <>
    <h1 className={style.heder}>Select Your Dishes</h1>
    <div className={style.main}>
    <div>
        <img style={{}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30j9kaQaLAbrVEA8LYe_ePtDNu0SG8K3SUA&usqp=CAU"
         className={style.image}/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWbg4YS5BystdZhT8W5mCgcJXQ3hv1pCsxQ&usqp=CAU"
         className={style.image}/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZrNom40-ADz9dp0X94aG4xE4CpujZIFZHg&usqp=CAU"
        alt="Curd" className={style.image}/>
    </div>
    <div>
        <Button variant={item[0].present ? "success":"danger"}   onClick={ChapatiBtn} style={{marginLeft:'200px',width:'130px'}}>Chapati</Button>
        <Button variant={item[1].present ? "success":"danger"} onClick={PickleBtn} style={{marginLeft:'300px',width:'130px'}}>Pickle </Button>
        <Button variant={item[2].present ? "success":"danger"} onClick={CurdBtn} style={{marginLeft:'300px',width:'130px'}}>Curd</Button>
    </div>
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZXhqF0mEgBXW6X3HQST16nnHYabj0MQBCA&usqp=CAU"
         className={style.image}/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkiS48yed-9DQvp312EXcwwJ0d0eMOHcenAg&usqp=CAU"
         className={style.image}/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-_J3dyXNgxz9wUiBIWs_oTRcMJpLWLsggQ&usqp=CAU"
         className={style.image}/>
    </div>
    <div>
        <Button variant={item[3].present ? "success":"danger"} onClick={SweetBtn} style={{marginLeft:'200px',width:'130px'}}>Sweet</Button>
        <Button variant={item[4].present ? "success":"danger"} onClick={DaalBtn} style={{marginLeft:'300px',width:'130px'}}>Daal </Button>
        <Button variant={item[5].present ? "success":"danger"} onClick={PaneerBtn} style={{marginLeft:'280px',width:'130px'}}>Paneer Dish</Button>
    </div>
    <div className={style.btn}>
       <p className={style.msg}>{msg}</p>
        <Button onClick={chackOutBtn} variant="warning" style={{width:'150px',height:'50px',fontSize:'25px'}}>ChackOut</Button>
    </div>
    </div>
    </>
)
}

export default AllItem;