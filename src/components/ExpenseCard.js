import "./ExpenseCard.css"
import ExpenseItem from "./ExpenseItem";
import AddExpense from "./AddExpense";
import {useState} from "react";
function ExpenseCard(){

    const cur_date = new Date();
    const [expenses, setExpenses] = useState([{date:cur_date, title:"Red shirt", price: 450 }]);

    const setMyExpenses = (newexpense) =>{
        setExpenses({
            ...expenses,
            newexpense
        });
    }
    return (
        <div className="card">
            <h2>Expense Manager</h2>
            <AddExpense Expenses={setMyExpenses}/>
            <ExpenseItem date={expenses[0].date} title={expenses[0].Description} price={expenses[0].price}/>
            <ExpenseItem date={expenses[0].date} title={expenses[0].Description} price={expenses[0].price}/>
        </div>
    )
}

export default ExpenseCard;