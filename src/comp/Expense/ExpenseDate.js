import "./ExpenseDate.css";
function ExpenseDate(props) {
  const day = props.date.toLocaleString("en-GB", { day: "numeric" });
  const month = props.date.toLocaleString("en-GB", { month: "short" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{day}</div>
      <div className="expense-date__year">{month}</div>
      <div className="expense-date__day">{year}</div>
    </div>
  );
}
export default ExpenseDate;
