import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = new Date().toLocaleDateString();
  const expenseTitle = "Car Insurance";
  const expenseAmout = props.amount;
  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">£{expenseAmout}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
