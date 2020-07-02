import React, { Component } from "react";
import "./income.css";
class Income extends Component {
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
    if (!(isNaN(+e.target.value))) {
      this.setState({
        amount: e.target.value,
      });
    } else {
      alert("This is not a number");
    }
  };
  handleAddition = () => {
    if(this.state.desc.trim() !== '' && this.state.amount.trim() !== ''){

      this.props.getIncome(this.state);
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
      <div className="Income">
        <input
          placeholder="Enter Description"
          className="desc"
          onChange={this.handleDesc}
          value={this.state.desc}
        />
        <input
          placeholder="Income"
          className="amount"
          onChange={this.handleAmount}
          value={this.state.amount}
        />
        <button onClick={this.handleAddition} className="add-btn">
          Add
        </button>
      </div>
    );
  }
}

export default Income;
