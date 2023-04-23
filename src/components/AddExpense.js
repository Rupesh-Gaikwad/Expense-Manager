import { useState } from "react";
import "./AddExpense.css"

const AddExpense = (props) =>{

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");

    const addExpenseHandler = (event) => {
        event.preventDefault();
        console.log("submitted...");
        console.log(title, price, date);
        const expense = {key: Math.random(), date: date, title: title, price: price};

        props.AddExpenses(expense);
    }





    return (
        <div className="card add_expense_card">
            <h3>Add Expense</h3>
            <form onSubmit={addExpenseHandler}>
                <div className="input_field">
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}></input>
                </div>
                <div className="input_field">
                    <label>Price:</label>
                    <input type="number" min="0" value={price} onChange={(event) => setPrice(event.target.value)}></input>
                </div>
                <div className="input_field">
                    <label>Date:</label>
                    <input type="date" value={date} onChange={(event) => setDate(event.target.value)}></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default AddExpense;