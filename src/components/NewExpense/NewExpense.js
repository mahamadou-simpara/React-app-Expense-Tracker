import ExpenseForm from './ExpenseForm';
import "./NewExpense.css"

function NewExpense(props) {

  function deriveUserInputdata(userInputData) {

    const userEnteredData = {
        ...userInputData,
        id: Math.random().toString()
    };

    props.onDeriveExpense(userEnteredData);
  }

  return <div className="new-expense">
    <ExpenseForm onDeriveData={deriveUserInputdata}></ExpenseForm>
  </div>;
}

export default NewExpense;
