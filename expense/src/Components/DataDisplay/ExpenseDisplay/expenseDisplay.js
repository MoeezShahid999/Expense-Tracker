import React, { Component } from "react";

class ExpenseDisplay extends Component {
  deleteElement = (id) => {
    this.props.delete({ id: id, term: "expense" });
  };
  render() {
    let expense = this.props.expense.map((el) => {
      return (
        <div className="transaction-display">
          <div className="desc-display">{el.desc}</div>
          <div className="amount-display">{el.amount}</div>
          <div className="cross" onClick={() => this.deleteElement(el.id)}>
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
}

export default ExpenseDisplay;
