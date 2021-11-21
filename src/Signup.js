import { useState } from "react"
import axios from "axios";
import store from "./store";
import {useHistory} from "react-router-dom";
//import jsonServer from './api/jsonServer';
import users from "./assets/users.json"
import api from './api/jsonServer';
import { uuid } from "uuidv4";

function Signup(props){
    const [usrname1,setUsername]=useState("");
    const [acc1,setAcc]=useState("");
    const [Password1,setPassword]=useState("");
    const history= useHistory();

    //const addUserHandler=async (u)=>{
    //     console.log(u);
    //     const request={
    //       "id":"6",
    //       ...u
    //     }
    //     const response=await(api.post("/Users",request));
    //     console.log(response);
    //     setUser([...u,response.data]);
    
    //   }



    const addUserHandler=async ()=>{
        let x=Math.ceil(Math.random() * 100)
        const   request={
            "id":uuid(),
            "balance":Math.floor(Math.random() * 100000) + 1,
            "name":usrname1,
            "password":Password1,
            "acc":''+x,
           };
           console.log(request)
        const response=await(api.post("/users",request));
        console.log(response) 
        history.push("/Login");
      }
  
      
//     const SignupUser=()=>{
//         let x=Math.random() * 100

//        request={
//           "username":usrname1,
//           "password":Password1,
//           "acc":x,
//          };
         
//         addUserHandler(request)

// /// here i dont need to check i just need to add to json file if already exists then dont add or change use name 
// //
//   //      axios.post("/Signup",{username:usrname1,password:Password1 }).then((res)=>{
//   //          console.log("Sigunp success");

//             history.push("/Login");


//    //     }).catch((err)=>{
//     //        console.log("Sigunp fail");
//     //    })
//     };
    



    return (<div>
        <h1>Sign up</h1> 
        <input type='username' placeholder="enter username" onChange={(e)=>setUsername(e.target.value)} /><br/>
        <input type='Password' placeholder="enter Password" onChange={(e)=>setPassword(e.target.value)} /><br/>
        <button onClick={addUserHandler} >Signup</button>
     
     {/*   <button onClick={SignupUser}>Signup</button>*/}
      



    </div>)

    
    }
    export default Signup;