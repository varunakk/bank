import {BrowserRouter as Router ,Link,Switch, Route} from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Header.css"
function Header(props){
if (props.page==="home"){
    return(
        <div >

          <Link to="/"> Home </Link><br/>
          <Link to="/About"> About </Link><br/>

        <Link to="/Contact"> Contact </Link><br/>
        <Link to="/Login">Login</Link><br/>
        <Link to="/Signup">Signup</Link>
        
        <hr/>

  
        </div>
    )

}
if (props.page==="Login"){
    return ( <div> 
        <Link to="/"> Home </Link> {"> Login "} 

      
      </div>
      )
}
if (props.page==="Main"){
    return (     <div className="head"> 
        <div >
    <Link to="/Main/Transactions"> Transactions </Link> <br/>
    </div>
    <div>
    <Link to="/Main/SendMoney"> Send Money </Link><br/>
    </div>
    <div>
    <Link to="/Loan"> Loan </Link><br/>
    </div>
    <div>        
    <Link to="/Main/reqMon">requestForMoneyDetails</Link>    <br/>
    </div>
    <div>        
    <Link to="/Main/makereq">MakerequestForMoney</Link>    <br/>
    </div>

    <div>
    <Link to="/"> Sign out </Link>  
    </div>
    
        </div>
    
    )
}if (props.page==="About"){
    return ( <div> 
        <Link to="/"> Home </Link> {"> About "} 

      
      </div>
      )
}
if (props.page==="reqMon"){
    return ( <div> 
        <Link to="/Main"> Home </Link> {"> requestForMoney "} 

      
      </div>
      )
}
if (props.page==="makereq"){
    return ( <div> 
        <Link to="/Main"> Home </Link> {"> Make Request"} <br/>        


      
      </div>
      )
}

if (props.page==="Contact"){
    return ( <div> 
        <Link to="/"> Home </Link> {"> Contact "} 

      
      </div>
      )
}
if (props.page==="Trans"){
    return ( <div> 
          <Link to="/Main"> Home </Link> {"> Transactions "} 

        
        </div>
        )
}
if (props.page==="SendMoney"){
    return  ( <div> 
        <Link to="/Main"> Home </Link> {"> Send money  "} 

      
      </div> )
}
if (props.page==="Signup"){
    return (
        <div>
              <Link to="/"> Home </Link> {"> Signup "} 

            </div>
    )

}
if (props.page==="Loan"){
    return ( <div> 
          <Link to="/Main"> Home </Link> {"> Loan "} <br/>
        <Link to="/Loan/giveloan">Take Loan</Link><br/>
        <Link to="/Loan/loandetails">Loan details</Link>
        
      
      </div>
      )
}

if (props.page==="Loandet"){
    return ( <div> 
          <Link to="/Main"> Home </Link>{">"}<Link to="/Loan"> Loan </Link> {"> LoanDetails "} <br/>        
      
      </div>
      )
    }

if (props.page==="TakeLoan"){
        return (<div>
          <Link to="/Main"> Home </Link> {"> TakeLoan "} <br/>
            
            </div>
        
        )
}

else{
    return <h6></h6>
}

}
export default Header;