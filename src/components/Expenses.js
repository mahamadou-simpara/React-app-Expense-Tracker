import "./Expenses.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const expenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  function derivePickedYear(pickedYear) {
    setFilteredYear(pickedYear);
    console.log(pickedYear);
  }

 

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          derivePickedYear={derivePickedYear}
        />
        <ExpenseList expenses={expenses} />
      </Card>
    </div>
  );
}

export default Expenses;
