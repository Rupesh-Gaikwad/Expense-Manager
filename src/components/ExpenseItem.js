const ExpenseItem = (props) => {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    return(
        <div>
            <div className="item_container">
                <div className="calender">
                <p id="item_date">{props.date.getDay()} {months[props.date.getMonth()]} {props.date.getFullYear()}</p>
                </div>
                <p id="item_title">{props.title}</p>
                <p id="item_price">Rs. {props.price}</p>
            </div>
        </div>
    )
}


export default ExpenseItem;