import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/header";
import IncomeContainer from "./Components/Income/income";
import ExpenseContainer from "./Components/Expense/expense";
import DataDisplay from "./Components/DataDisplay/display";
import InfoDisplay from "./Components/Info/info";

class App extends Component {
  state = {
    income: [],
    expense: [],
  };
  delete = (data) => {
    if (data.term == "income") {
      let stateIncome = [...this.state.income];
      debugger;
      stateIncome.map((el, ind) => {
        if (el.id == data.id) {
          stateIncome.splice(ind, 1);
        }
      });
      this.setState({
        income: stateIncome,
      });
    } else {
      let stateExpense = [...this.state.income];
      stateExpense.map((el, ind) => {
        if (el.id == data.id) {
          stateExpense.splice(ind, 1);
        }
      });
      this.setState({
        income: stateExpense,
      });
    }
  };
  ID = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  getIncome = (data) => {
    let newData = { ...data, id: this.ID() };
    this.setState({
      income: [...this.state.income, { ...newData }],
    });
  };
  getExpense = (data) => {
    let newData = { ...data, id: this.ID() };

    this.setState({
      expense: [...this.state.expense, { ...newData }],
    });
  };
  render() {
    let total_expense = 0;
    let total_income = 0;
    if (this.state.income.length > 0) {
      this.state.income.map((el) => {
        total_income = +total_income + Number(el.amount);
      });
    }
    if (this.state.expense.length > 0) {
      this.state.expense.map((el) => {
        total_expense = +total_expense + Number(el.amount);
      });
    }
    return (
      <div className="App">
        <div className="comp-cont">
          <div className="inner-comp">
            <Header />
            <InfoDisplay income={total_income} expense={total_expense} />
            <div className="flex-box">
              <IncomeContainer getIncome={this.getIncome} />
              <ExpenseContainer getExpense={this.getExpense} />
            </div>
            <DataDisplay deleteElement={this.delete} data={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
