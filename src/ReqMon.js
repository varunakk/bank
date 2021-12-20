import {BrowserRouter as Router ,Link,Switch, Route} from "react-router-dom";
import { useLocation } from "react-router-dom";
import transactions from "./assets/Transactions.json";
import store from "./store";
import users from "./assets/users.json";
import {connect} from "react-redux";
import { useState } from "react";
import "./Transactions.css"
//import trans_sub from "./trans_sub";
//import ReactPaginate from "react-paginate";
import api2 from "./api/reqMoney";
import api1 from "./api/jsonServer";


function ReqMon(){
    const retrieve=async(user)=>{
        const response=await(api1.get("/Users"));
        // console.log(response.data);
        // const sol=response.data;
        const sol=response.data;
            for (let index = 0; index < sol.length; index++) {
                if(sol[index].name === user)
                {
                    return sol[index].acc;
                }
                
            }
            return false;
        
      }
      let rs;
      const [ln,setln]=useState([]);
      const r=async(acc)=>{
        const response=await(api2.get("/reqMoney"));
        const re=[]
        // console.log(response.data);
        // const sol=response.data;
        const sol=response.data;
            for (let index = 0; index < sol.length; index++) {
                console.log(sol[index].acc,acc)
                if(sol[index].from === acc)
                {
                    re.push(sol[index]);
                }
                
            }
            rs=re;
            console.log("re",re);
            setln(re);
            return false;
        
      }
      const r1=async(acc)=>{
        const response=await(api2.get("/reqMoney"));
        const re=[]
        // console.log(response.data);
        // const sol=response.data;
        const sol=response.data;
            for (let index = 0; index < sol.length; index++) {
                console.log(sol[index].acc,acc)
                if(sol[index].to === acc)
                {
                    re.push(sol[index]);
                }
                
            }
            rs=re;
            console.log("re",re);
            setln(re);
            return false;
        
      }
//      const temp;
    const [tmp,settmp]=useState("");
    const [tmp1,settmp1]=useState("");
      const gu=async()=>{
          // all -- has acc number
        let all;
          const getall=async()=>{
              console.log(store.getState().user);
              all= await retrieve(store.getState().user);
              console.log(all) 
              };
             await getall();
            
            fu(all);
        settmp( <tr><th>accno from</th><th>acc to</th><th>amount</th>{/*<th>pay</th>*/}</tr>); 
        settmp1(     <Link to="/Main/SendMoney"> pay </Link> ); 

        console.log(tmp)
      } 
      const [all,setAll]=useState({});
      const fu=async(acc)=>{
        let p; 
        const getall=async()=>{
              p= await r(acc);
              console.log(p) 
              };
             await getall();
             setAll(p);
             if(all === false)
             {
                // /alert("Invalid username");/
                 return;
             }
              console.log(all);
             
  
      }
      const gg=async()=>{
        // all -- has acc number
      let all;
        const getall=async()=>{
            console.log(store.getState().user);
            all= await retrieve(store.getState().user);
            console.log(all) 
            };
           await getall();
          
          ff(all);
      settmp( <tr><th>accno from</th><th>acc to</th><th>amount</th></tr>); 
      settmp1(""); 

      console.log(tmp)
    } 
    const [all1,setAll1]=useState({});
    const ff=async(acc)=>{
      let p; 
      const getall=async()=>{
            p= await r1(acc);
            console.log(p) 
            };
           await getall();
           setAll1(p);
           if(all1 === false)
           {
              // /alert("Invalid username");/
               return;
           }
            console.log(all1);
           

    }
 
   
    return (
        <div>
            <h1>req money</h1>
         <button class="button" onClick={gg}>Requested from others</button>
            <button class="button" onClick={gu}>Requested by You</button>
            <center>
            <table>
            {tmp}
            {ln && ln.map(ln =>
                         <tr><th>{ln.from}</th> <th>{ln.to}</th><th> {ln.amount}</th>{/*<th>{tmp1}</th>*/}</tr>
                            
                    )}
        </table>
            </center>
         {/*   {tmp1}*/}
            </div>
    )
}

export default ReqMon;