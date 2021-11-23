import api from './api/jsonServer';
import {useHistory} from "react-router-dom";
import { useState } from "react";
import loan from  "./assets/loan.json";
function Takeloan(){
    const [acc1,setAcc]=useState("");
    const [amount1,setAmount]=useState("");
    const history= useHistory();
    const [time1,setTime]=useState("");
    const addTransacHandler=async ()=>{
        
        const request={
            "id":acc1,
            "acc" : acc1 ,
            "loan_amount": amount1,
            "no_of_months":time1,
            "interest":time1,
            "amount_to_be_payed": amount1*time1
           };
           console.log(request)
        const response=await(api.post("/loan",request));
        console.log(response)
        history.push("/");
      }
    return (<>
    <h1>SendMoney</h1>
    <input type='acc1' placeholder="enter ur accno" onChange={(e)=>setAcc(e.target.value)} /><br/>
        <input type='amount' placeholder="enter amount" onChange={(e)=>setAmount(e.target.value)} /><br/>
        
        <input type='no_of_month' placeholder="enter no of months" onChange={(e)=>setTime(e.target.value)} /><br/>
        <button onClick={addTransacHandler} >Sanctionloan</button>
    </>)
}

export default Takeloan;