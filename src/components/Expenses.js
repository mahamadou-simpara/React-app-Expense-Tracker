import "./Expenses.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const expenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  function derivePickedYear(pickedYear) {
    setFilteredYear(pickedYear);
  }


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          derivePickedYear={derivePickedYear}
        />
        <ExpensesChart expenses={expenses} />
        <ExpenseList expenses={expenses} />
      </Card>
    </div>
  );
}

export default Expenses;
