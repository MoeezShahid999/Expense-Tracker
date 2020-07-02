import React, { Component } from "react";

class Display extends Component {
  render() {
    //   console.log(this.props.data)
    return (
      <div className="info-display">
        <div className="total-savings">
          <div className="total-heading">Total Saving</div>
          <div className="total-amount">
            {this.props.income - this.props.expense}
          </div>
        </div>
          <div className="total-income">
            <div className="total-heading">Total Income</div>
            <div className="total-amount">{this.props.income}</div>
          </div>
          <div className="total-expense">
            <div className="total-heading">Total Expense</div>
            <div className="total-amount">{this.props.expense}</div>
          </div>
      </div>
    );
  }
}

export default Display;
