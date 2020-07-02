import React, { Component } from "react";
import "./display.css";
import IncomeDisplay from './IncomeDisplay/incomeDisplay'
import ExpenseDisplay from './ExpenseDisplay/expenseDisplay'

class Display extends Component {
    delete = (data)=>{
        this.props.deleteElement(data)
    }
  render() {
    //   console.log(this.props.data)
    return (
      <div className="data-display">
            <div className="display-flex-box">
                <IncomeDisplay delete = {this.delete} income = {this.props.data.income}/>
                <ExpenseDisplay delete = {this.delete}  expense = {this.props.data.expense}/>
            </div>
      </div>
    );
  }
}

export default Display;
