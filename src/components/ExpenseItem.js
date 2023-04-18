const ExpenseItem = (props) => {

    return(
        <div>
            <div className="item_container">
                <p id="item_title">{props.title}</p>
                <p id="item_desc">{props.desc}</p>
                <p id="item_price">Rs. {props.price}</p>
            </div>
        </div>
    )
}


export default ExpenseItem;