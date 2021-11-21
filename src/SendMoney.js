import {useState} from "react";
import api from "./api/jsonServer"
import {useHistory} from "react-router-dom";
import trans from "./api/transactions"
// import axios from "axios";
// import "./Login.css";
 import store from "./store";
import { uuid } from "uuidv4";
// import {useHistory} from "react-router-dom";
function SendMoney(){
    const [username,setUsername]=useState();
    const [amount,setAmount]=useState();
    const [from,setFrom]=useState();
    const [to,setTo]=useState();
    
    
    const history=useHistory();
    const addUserHandler=async (f,t)=>{
        
        const request={
            "id":uuid(),
        "from":f,
        "to":t,
        "amount":amount        
        };

           console.log(request)
        const response=await(trans.post("/transactions",request));
        console.log(response) 
        history.push("/Main/Transactions");
      }
    const retrieve=async(acc)=>{
        const response=await(api.get("/Users"));
        // console.log(response.data);
        // const sol=response.data;
        const sol=response.data;
            for (let index = 0; index < sol.length; index++) {
                if(sol[index].acc === acc)
                {
                    return sol[index];
                }
                
            }
            return false;
        
      }
      const r=async(user)=>{
        const response=await(api.get("/Users"));
        // console.log(response.data);
        // const sol=response.data;
        const sol=response.data;
        console.log(user);
        console.log(sol);
        
            for (let index = 0; index < sol.length; index++) {
                if(sol[index].name === user)
                {
                    return sol[index];
                }
                
            }
            return false;
        
      }
        
     
      
      const gu=async()=>{
        let all;
          const getall=async()=>{
              console.log(store.getState().user);
              all= await r(store.getState().user);
              console.log(all) 
              };
             await getall();
             
              
              console.log(all);
              if(parseInt(all.balance)-parseInt(amount)<0)
              {
                  alert("Insufficient amount"); 
                  return;
              }
            
             all.balance=parseInt(all.balance)-parseInt(amount);
             
          const response = api.put(`./Users/${all.id}`,all);
          let acc=fun();
          const get=async()=>{
            await addUserHandler();
            };
            addUserHandler(all.acc,username)  
      } 
     
      
      const fun=async()=>{
      let all;
        const getall=async()=>{
            all= await retrieve(username);
            console.log(all) 
            };
           await getall();
           if(all === false)
           {
               alert("Invalid username");
               return;
           }
            console.log(all);
           all.balance=parseInt(all.balance) + parseInt(amount);
         
        const response = api.put(`./Users/${all.id}`,all);
       return all.acc;

    }

    return(
        <div class = "center">
            <h1>Send Money</h1>
            <div class ="form">
                <div class ="text-field">
                    <input type="username" placeholder="enter ACC" onChange={(e)=>setUsername(e.target.value)}/><br/>
                </div>
                <div class = "text-field">
                    <input type="Amount" placeholder="enter Amount" onChange={(e)=>setAmount(e.target.value)}/><br/>
                </div>
            
                
                <button class="button" onClick={gu}>Send</button>
            </div>
            
        </div>
    )
}


export default SendMoney;
