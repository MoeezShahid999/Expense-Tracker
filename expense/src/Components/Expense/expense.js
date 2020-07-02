import React, { useState } from "react";
import "./expense.css";
function Expense(props) {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const handleDesc = (e) => {
    setDesc(
      e.target.value,
    );
  };
  const handleAmount = (e) => {
    if (!isNaN(+e.target.value)) {
      setAmount(
         e.target.value,
      );
    } else {
      alert("This is not a number");
    }
  };
  const handleAddition = () => {
    if (desc.trim() !== "" && amount.trim() !== "") {
      props.getExpense({desc,amount});
      setAmount(''
      );
      setDesc(''
      );
    } else {
      alert("Complete the fields");
    }
  };

    return (
      <div className="Expense">
        <input
          placeholder="Enter Description"
          className="desc"
          value = {desc}
          onChange={handleDesc}
        />
        <input
          placeholder="Expense"
          value = {amount}
          className="amount"    
          onChange={handleAmount}
        />
        <button onClick={handleAddition} className="add-btn">
          Add
        </button>
      </div>
    );

}

export default Expense;
