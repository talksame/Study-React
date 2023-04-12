import "./ExpenseItem.css"


function ExpenseItem(props) {
    let expenseDate =  new Date(2023, 4, 12);
    let expenseTitle = 'Car';
    let expenseAmount = 123.32;

    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className=".expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>

    );
}
export default ExpenseItem;