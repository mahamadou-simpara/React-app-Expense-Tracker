import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const expenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  function derivePickedYear(pickedYear) {
    setFilteredYear(pickedYear);
    console.log(pickedYear);
  }

  let expensesData = <p className="no_expenses">No expenses found !</p>;

  if (expenses.length > 0) {
    expensesData = expenses.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
        id={expense.id}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          derivePickedYear={derivePickedYear}
        />
        {expensesData}
      </Card>
    </div>
  );
}

export default Expenses;
