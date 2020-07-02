import React, { Component } from "react";

class IncomeDisplay extends Component {
    deleteElement=(id)=>{
        this.props.delete({id:id,term:'income'})
    }
  render() {
    let income = this.props.income.map((el) => {
      return (
        <div className = 'transaction-display'>
          <div className="desc-display">{el.desc}</div>
          <div className="amount-display">{el.amount}</div>
          <div className = 'cross' onClick = {()=>this.deleteElement(el.id)}>Del</div>
        </div>
      );
    });
    return (
      <div className="income-display">
        <div className="display-container">
            {income}
        </div>
      </div>
    );
  }
}

export default IncomeDisplay;
