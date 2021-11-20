import {BrowserRouter as Router ,Link,Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import users from "./assets/users.json";
function Main({user}){
    //var p=true
    return (<>
    <h1>IIITS Bank</h1>
    <h2>Main page</h2>

    <h1>Welcome {user} </h1>
    <Link to="/Main/Transactions"> Transactions </Link><br/>
    <Link to="/Main/SendMoney"> Send Money </Link>
   
    
    </>)
    }


const mapStateToProps = (state)=>{
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(Main);
//export default Main;