import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/header";
import IncomeContainer from "./Components/Income/income";
import ExpenseContainer from "./Components/Expense/expense";
import DataDisplay from "./Components/DataDisplay/display";
import InfoDisplay from "./Components/Info/info";

function App ()  {
  // state = {
  //   income: [],
  //   expense: [],
  // };
  const [incomeState,setIncome] = useState([])
  const [expenseState,setExpense] = useState([])

   const deleteRecord = (data)=>  {
    if (data.term == "income") {
      let stateIncome = [...incomeState];

      stateIncome.map((el, ind) => {
        if (el.id == data.id) {
          stateIncome.splice(ind, 1);
        }
      });
      setIncome(
        stateIncome,
      );
    } else {
      let stateExpense = [...expenseState];
      stateExpense.map((el, ind) => {
        if (el.id == data.id) {
          stateExpense.splice(ind, 1);
        }
      });
      setExpense(

        stateExpense,
      );
    }
  };

  const ID = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  const getIncome = (data) => {
    let newData = { ...data, id: ID() };
    setIncome(
      [...incomeState, { ...newData }],

    );
  };
  const getExpense = (data) => {
    let newData = { ...data, id: ID() };

    setExpense(

     [...expenseState, { ...newData }],
    );
  };

    let total_expense = 0;
    let total_income = 0;
    debugger
    if (incomeState.length > 0) {
      incomeState.map((el) => {
        total_income = +total_income + Number(el.amount);
      });
    }
    if (expenseState.length > 0) {
      expenseState.map((el) => {
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
              <IncomeContainer getIncome={getIncome} />
              <ExpenseContainer getExpense={getExpense} />
            </div>
            <DataDisplay deleteElement={deleteRecord} data={{income:incomeState,expense:expenseState}} />
          </div>
        </div>
      </div>
    );

}

export default App;
