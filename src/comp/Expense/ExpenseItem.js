import ExpenseDate from "./ExpenseDate";
import Button from "@material-ui/core/Button";
import ReorderIcon from "@material-ui/icons/Reorder";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  let title = props.title;
  const ClickHandler = () => {
    title = "Updated";
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
      <Button onClick={ClickHandler} variant="contained" color="secondary">
        <ReorderIcon />
      </Button>
    </div>
  );
};
export default ExpenseItem;
