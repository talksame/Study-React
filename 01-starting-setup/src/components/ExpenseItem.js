import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"


function ExpenseItem(props) {
    //Event 호버, selection, click, 마우스가 어디 위치하는 것
    // CSS 보드판 만들고, 보드칸, 연결, 말이
    return (
        <div className="expense-item">
            <ExpenseDate date ={props.date}/>
            <div>{props.date.toISOString()}</div>
            <div className=".expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>

    );
}
export default ExpenseItem;