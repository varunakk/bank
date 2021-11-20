import loans from "./assets/loan.json";
import './Loan.css';
import users from "./assets/users.json";
import {connect} from "react-redux";

function Loandetai({user}){

    console.log(user)
    return(<div class="loandet">
    <h1> {user} , Your Loan</h1>
    {users.users.filter((nam) => nam.name === user).map(x => loans.filter( hom => hom.acc=== x.acc  ).map(y => <h1>accno: {y.acc}<br/>loan_amount: {y.loan_amount}<br/>interest:{y.interest}<br/>timeperiod:{y.no_of_months}<br/>amount to be payed:{y.amount_to_be_payed}</h1>))}
    </div>
    
    )
}
const mapStateToProps = (state)=>{
    return {
        user: state.user   
    };
}
    
export default connect(mapStateToProps)(Loandetai);
