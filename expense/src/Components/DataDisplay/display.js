import React from "react";
import IncomeDisplay from './IncomeDisplay/incomeDisplay'
import ExpenseDisplay from './ExpenseDisplay/expenseDisplay'

function Display (props) {
    const deleteData = (data)=>{
        props.deleteElement(data)
    }

    //   console.log(props.data)
    return (
      <div className="data-display">
            <div className="display-flex-box">
                <IncomeDisplay delete = {deleteData} income = {props.data.income}/>
                <ExpenseDisplay delete = {deleteData}  expense = {props.data.expense}/>
            </div>
      </div>
    );

}

export default Display;
