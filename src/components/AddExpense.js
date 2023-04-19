import "./AddExpense.css"

const AddExpense = () =>{

    return (
        <div className="card add_expense_card">
            <h3>Add Expense</h3>
            <form>
                <div className="input_field">
                    <label>Title:</label>
                    <input type="text"></input>
                </div>
                <div className="input_field">
                    <label>Price:</label>
                    <input type="number" min="0"></input>
                </div>
                <div className="input_field">
                    <label>Date:</label>
                    <input type="date"></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default AddExpense;