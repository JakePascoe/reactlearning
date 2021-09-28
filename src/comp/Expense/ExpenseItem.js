import ExpenseDate from "./ExpenseDate";
import Button from "@material-ui/core/Button";
import ReorderIcon from "@material-ui/icons/Reorder";
import "./ExpenseItem.css";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const ClickHandler = () => {
    setTitle("Updated");
    console.log(title);
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
