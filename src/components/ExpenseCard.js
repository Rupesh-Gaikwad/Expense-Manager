import "./ExpenseCard.css"
import ExpenseItem from "./ExpenseItem";
import AddExpense from "./AddExpense";
import {useState} from "react";

const DUMMY_DATA = [{key: 1, date: new Date(), title:"Red shirt", price: 450 }];
function ExpenseCard(){

    const [expenses, setExpenses] = useState(DUMMY_DATA);

    const setMyExpenses = (newexpense) =>{
        setExpenses([newexpense, ...expenses]);
    }
    return (
        <div className="card">
            <h2>Expense Manager</h2>
            <AddExpense AddExpenses={setMyExpenses}/>
            {console.log.expenses}
            {expenses.map((expense) => <ExpenseItem key={expense.key} date={expense.date} title={expense.title} price={expense.price}/>)}

        </div>
    )
}

export default ExpenseCard;