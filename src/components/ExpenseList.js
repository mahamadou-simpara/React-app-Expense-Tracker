import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

export default function ExpenseList(props) {

    if (props.expenses.length === 0) {
      return <p className="no_expenses">No expenses found !</p>;
    }

    return <ul className="expenses-list">
        <li>
  {      props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
          id={expense.id}
        />
      ))}
        </li>
    </ul>
}