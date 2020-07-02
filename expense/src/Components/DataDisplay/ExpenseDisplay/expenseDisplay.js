import React, { Component } from "react";

function ExpenseDisplay(props)  {
  const deleteElement = (id) => {
    props.delete({ id: id, term: "expense" });
  };

    let expense = props.expense.map((el) => {
      return (
        <div className="transaction-display"> 
          <div className="desc-display">{el.desc}</div>
          <div className="amount-display">{el.amount}</div>
          <div className="cross" onClick={() => deleteElement(el.id)}>
            Del
          </div>
        </div>
      );
    });
    return (
      <div className="expense-display">
        <div className="display-container">{expense}</div>
      </div>
    );

}

export default ExpenseDisplay;
