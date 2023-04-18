import "./ExpenseCard.css"
import ExpenseItem from "./ExpenseItem";
function ExpenseCard(){

    const expenses = [
        {title: "T-Shirt",
        Description: "Red color T-shirt for her birthday gift.",
        price: 500},
    {
        title: "Shoes",
        Description: "For jogging.",
        price: 850
    }];

    return (
        <div className="card">
            <h2>Expense Manager</h2>
            <ExpenseItem title={expenses[0].title} desc={expenses[0].Description} price={expenses[0].price}/>
            <ExpenseItem title={expenses[1].title} desc={expenses[1].Description} price={expenses[1].price}/>
        </div>
    )
}

export default ExpenseCard;