import React from "react";

function IncomeDisplay(props) {
   const  deleteElement=(id)=>{
        props.delete({id:id,term:'income'})
    }

    let income = props.income.map((el) => {
      return (
        <div className = 'transaction-display'>
          <div className="desc-display">{el.desc}</div>
          <div className="amount-display">{el.amount}</div>
          <div className = 'cross' onClick = {()=>deleteElement(el.id)}>Del</div>
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

export default IncomeDisplay;
