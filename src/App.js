import './App.css';
import {BrowserRouter as Router ,Link,Switch, Route} from "react-router-dom";
import Main from "./Main"; 
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";
import Transactions from "./Transactions";
import SendMoney from './SendMoney';
import Header from './Header';
import Loan from './Loan';
import Loandetai from './loandetails';


function App() {
  return (
<div className="App">


   
<Router>
    <Switch>
    <Route exact path="/"> <Header page="home" /> <hr/> <Home/>  </Route>
    <Route exact path="/Login"> <Header page="Login" /> <hr/><Login/>  </Route>
    <Route path="/Signup"> <Header page="Signup" /><hr/><Signup/>  </Route>
    
    
    <Route exact path="/Main"><Header page="Main" /><hr/> <Main/> </Route>
    <Route path="/Main/Transactions"><Header page="Trans" /><hr/><Transactions/> </Route>
    <Route path="/Main/SendMoney"><Header page="SendMoney" /><hr/><SendMoney/> </Route>
    
    
    <Route path="/Contact"> <Header page="Contact" /> <hr/><Contact/>  </Route>
    <Route path="/About"> <Header page="About" /><hr/><About/>  </Route>
    
    <Route exact path ="/Loan"><Header page="Loan" /><hr/><Loan/></Route>
    <Route path ="/Loan/giveloan">{"loading"}</Route>
    <Route path ="/Loan/loandetails"><Header page="Loandet" /><hr/><Loandetai/></Route>
    </Switch>
</Router>
{/*
<Router >
<Link to="/Signup">Signup</Link>
<Link to="/Login">login</Link>

</Router>*/}


</div>

  );
}

export default App;
