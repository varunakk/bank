import {BrowserRouter as Router ,Link,Switch, Route} from "react-router-dom";

function Loan(){
    return (
        <>
        <div class = "loan">
        <Link to="/Loan/giveloan">Take Loan</Link><br/>
        <Link to="/Loan/loandetails">Loan details</Link>
        <div class="about">
            <h1>about</h1>
            <p>Leverage your investments in shares for loans to meet unforeseen expenses!! Avail of loans up to Rs.20.00 lacs against your shares to enable you to meet contingencies, personal needs or even for subscribing to rights or new issue of shares.

</p>

        </div>
        <div class="features">
            <h1>features</h1>
            <p><h3>Loan Amount</h3>

    Minimum Loan Amount : Rs 50,000/-<br/>
    Maximum Loan:Rs 20.00 lacs<br/>
    (Loans against shares not to exceed Rs 10 lacs if the purpose is for subscribing to IPOs.)</p>
    <h3>Repayment Schedule</h3>

    <p>Demand Loan :To be liquidated in maximum period of 30 months.<br/>
    Overdraft: Running Overdraft (Auto Renewal every year )</p>
    <h3>Interest rates</h3>
    <p>
    upto 1 lakh - 11.2%<br/>
    1lakh-10lakh - 12%<br/>
    10lakh-30lakh - 13%<br/>
</p>
</div>
        </div>
        </>
    )
}
export default Loan;