import transactions from "./assets/Transactions.json";
import store from "./store";
import users from "./assets/users.json";
import {connect} from "react-redux";
function Transactions({user}){

    // us state to store the login user 

    //const p= store.getState().user;
    
    //const x = users.filter( name => name.user== {user} )
    //const x = users.filer((nam) => nam.name === user) //? {...nam}:{acc: "-1"})  
// here i'm not able to get the user from store , oonce user  logins in it should be in store for further access
    //alert(x.acc)
    return (<>
    {users.users.filter((nam) => nam.name === user).map(x=><h1>{x.name},{" acc_NO : "} {x.acc} </h1>)}
    <h1>Transactions</h1>
    <h2> FROM  ,  TO   ,  AMOUNT :</h2>
    {users.users.filter((nam) => nam.name === user).map(x => transactions.transactions.filter( hom => hom.acc=== x.acc  ).map(y => <h1>{y.from}, {y.to} ,{y.amount}</h1>))}
    {/*{transactions.filter( hom => hom.acc==="123"  ).map(x => <h1>{x.acc}, {x.amount}</h1>)}*/}
    </>)
    }



const mapStateToProps = (state)=>{
    return {
        user: state.user
    };
}
    
export default connect(mapStateToProps)(Transactions);
    //export default Transactions;