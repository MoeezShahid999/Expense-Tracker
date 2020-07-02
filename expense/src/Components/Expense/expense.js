import React, { Component } from "react";
import "./expense.css";
class Expense extends Component {
  state = {
    desc: "",
    amount: "",
  };
  handleDesc = (e) => {
    this.setState({
      desc: e.target.value,
    });
  };
  handleAmount = (e) => {
      if(!(isNaN(+e.target.value))){
          this.setState({
            amount: e.target.value,
          });
      }else{
          alert("This is not a number")
      }
  };
  handleAddition = () => {
    if(this.state.desc.trim() !== '' && this.state.amount.trim() !== ''){

    this.props.getExpense(this.state);
    this.setState({
      desc: "",
      amount: "",
    });
}else{
    alert("Complete the fields")
}
  };
  render() {
    return (
      <div className="Expense">
        <input
          placeholder="Enter Description"
          className="desc"
          value = {this.state.desc}
          onChange={this.handleDesc}
        />
        <input
          placeholder="Expense"
          value = {this.state.amount}
          className="amount"    
          onChange={this.handleAmount}
        />
        <button onClick={this.handleAddition} className="add-btn">
          Add
        </button>
      </div>
    );
  }
}

export default Expense;
