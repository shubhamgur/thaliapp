import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import route from './../../router/route.json';
import style from './ThaliBill.module.css'

const ThaliBill=({item})=>{


const navigate=useNavigate();

const filterItem=item.filter((ele)=>{if(ele.present){
    return ele
}})

const list=filterItem.map((ele,ind)=><Row className={style.item} key={ind}><Col>{ele.name}</Col><Col className="ms-5">{ele.amount}</Col></Row>)

const totalAmount=item.reduce((pre,ele)=>{return pre+ele.amount},0)


return(
    <>
<style>
    {
        `body{
            background-color:bisque
            
        }`
    }
</style>

    <div className={style.main}>
    <h1 className={style.heder}>Total Bill</h1>
    <p className={style.border}></p>
    <div className={style.list}>
        <Row className={style.heading}>
            <Col>Item</Col>
            <Col>Amount</Col>
        </Row>
{ list}
<Row className={style.heading}>
    <Col>Total Bill</Col>
    <Col>{totalAmount}</Col>
</Row>
</div>
<div>
    <Button variant="warning" onClick={()=>{navigate(route.COMPLITE)}}>Conform Your Order</Button>
    </div>
    </div>
    </>
)
}

export default ThaliBill;