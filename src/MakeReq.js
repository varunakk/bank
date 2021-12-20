import api from "./api/reqMoney";
import api1 from "./api/jsonServer";
import {useHistory} from "react-router-dom";
import { useState } from "react";
import users from "./assets/users.json";
import store from "./store";

function MakeReq(){
    const [acc1,setAcc]=useState("");
    const from= users.users.filter((nam) => nam.name === store.getState().user)[0]['acc'];
    const [amount1,setAmount]=useState("");
    const history= useHistory();
    const [time1,setTime]=useState("");
    //"id": "123",
    //"acc": "123",
    //"amount": "100",
    //"from": "123",
    //"to": "1234"
    const addTransacHandler=async ()=>{
        
        const request={
            "id":from+"_"+amount1,
            "acc" : acc1 ,
            "amount": amount1,
            "from":from,
            "to":acc1
           };
           console.log(request)
        const response=await(api.post("/reqMoney",request));
        console.log(response)
        history.push("/Main");
      }
 
    return (<>
        <h1>Make Request for money</h1>
        <div className="form">
        <input type='acc1' placeholder="enter accno of others" onChange={(e)=>setAcc(e.target.value)} /><br/>
            <input type='amount' placeholder="enter amount" onChange={(e)=>setAmount(e.target.value)} /><br/>
        
            </div>
            <button onClick={addTransacHandler} >Request</button>
        </>)
}

export default MakeReq;
    
