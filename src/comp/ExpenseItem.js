import "./ExpenseItem.css";

function ExpenseItem(props) {
  const day = props.date.toLocaleString("en-GB", { day: "numeric" });
  const month = props.date.toLocaleString("en-GB", { month: "short" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{day}</div>
        <div className="expense-date__year">{month}</div>
        <div className="expense-date__day">{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
    </div>
  );
}
//testiong
//uerogsdf vnspfg
export default ExpenseItem;
