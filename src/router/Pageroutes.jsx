import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Bill from "../pages/Bill";
import Complite from "../pages/Complite";
import Entry from "../pages/Entry";
import Manue from "../pages/Manue";
import route from './route.json'

const Pageroutes=()=>{

    const data= [{name:'Chapati',present:false,amount:0},
    {name:'Pickle',present:false,amount:0},
    {name:'Curd',present:false,amount:0},
    {name:'Sweet',present:false,amount:0},
    {name:'Daal',present:false,amount:0},
    {name:'Paneer Dish',present:false,amount:0},]

    const [item,setItem]=useState(data)



return(
    <Routes>
        <Route path={route.HOME} element={<Entry/>}/>
        <Route path={route.MANUE} element={<Manue item={item} setItem={setItem}/>}/>
        <Route path={route.BILL} element={<Bill item={item}/>}/>
        <Route path={route.COMPLITE} element={<Complite/>}/>
    </Routes>
)
}

export default Pageroutes;