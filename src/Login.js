import { useState } from "react"
import axios from "axios";
import store from "./store";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";


//{Count}
function Login(){
    const [usrname1,setUsername]=useState("");
    const [Password1,setPassword]=useState("");
    const history= useHistory();
    const LoginUser=()=>{
        axios.post("/Login",{username:usrname1,password:Password1 }).then((res)=>{
            console.log("log success");
            store.dispatch({type:"loginSuccess" ,payload:{ user:usrname1} });
            history.push("/Main");


        }).catch((err)=>{
            console.log("log fail");
            store.dispatch({type:"loginFail"});
        })
    };
    return (
        <div>

        <h1> login page </h1>
        <input type='username' placeholder="enter username" onChange={(e)=>setUsername(e.target.value)} /><br/>
        <input type='Password' placeholder="enter Password" onChange={(e)=>setPassword(e.target.value)} /><br/>
        <button onClick={LoginUser}>login</button>
        </div>

    )


}





//const mapStateToProps = (state)=>{
//    return {
//        Count: state.Count
//    };
//}
  
  
//export default connect(mapStateToProps)(Login);
export default Login;