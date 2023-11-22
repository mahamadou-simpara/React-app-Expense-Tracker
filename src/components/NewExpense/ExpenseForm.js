import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  function titleChangeHandler(e) {
    // setTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });

    setEnteredTitle(e.target.value);
  }

  function amountChangeHandler(e) {
    setEnteredAmount(+e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });
  }

  function dateChangeHandler(e) {
    setEnteredDate(e.target.value);
    // setUserInput((prevData) => {
    //   return {
    //     ...prevData,
    //     enteredDate: e.target.value,
    //   };
    // });
  }

  //   function inputChangeHandler(identifier, value) {
  //     if(identifier === 'title'){
  //         setUserInput(prevData => {
  //             return {
  //                 ...prevData,
  //                 enteredTitle: value
  //             }
  //         })
  //     }else if(identifier === 'amount'){
  //         setUserInput(prevData => {
  //             return {
  //                 ...prevData,
  //                 enteredAmount: value
  //             }
  //         })
  //     }else {
  //         setUserInput(prevData => {
  //             return {
  //                 ...prevData,
  //                 enteredDate: value
  //             }
  //         })
  //     }
  //   }

  const handleDataSubmission = (e) => {
    e.preventDefault();
    const userInputData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onDeriveData(userInputData);

    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  };

  return (
    <form onSubmit={handleDataSubmission}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-1-1"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
