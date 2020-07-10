import React, { useState } from "react";
function Income(props) {
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
      props.getIncome({desc,amount});
      setAmount(''
      );
      setDesc(''
      );
    } else {
      alert("Complete the fields");
    }
  };

  return (
    <div className="Income">
      <input
        placeholder="Enter Description"
        className="desc"
        onChange={handleDesc}
        value={desc}
      />
      <input
        placeholder="Income"
        className="amount"
        onChange={handleAmount}
        value={amount}
      />
      <button onClick={handleAddition} className="add-btn">
        Add
      </button>
    </div>
  );
}

export default Income;
