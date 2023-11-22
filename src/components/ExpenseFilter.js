import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
    
  function handleYearSelect(e) {
    const value = e.target.value;
    props.derivePickedYear(value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={handleYearSelect}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

// import Card from './Card';
// import './ExpenseFilter.css';

// function ExpenseFilter() {
//   return <Card className='filter-container'>
//      <div>
//             <select>
//                 <option>2021</option>
//                 <option>2022</option>
//                 <option>2023</option>
//             </select>
//         </div>
//     <ul className='filter-list'>

//         <li className='filter'>
//             <div></div>
//             <span>Jan</span>
//         </li>
//         <li className='filter'>
//             <div></div>
//             <span>Feb</span>
//         </li>
//         <li className='filter'>
//             <div></div>
//             <span>Mac</span>
//         </li>
//         <li className='filter'>
//             <div></div>
//             <span>April</span>
//         </li>
//         <li className='filter'>
//             <div></div>
//             <span>May</span>
//         </li>
//         <li className='filter'>
//             <div></div>
//             <span>Jun</span>
//         </li>
//         <li className='filter'>
//             <div></div>
//             <span>Jul</span>
//         </li>
//         <li className='filter'>
//             <div></div>
//             <span>Aug</span>
//         </li>
//         <li className='filter'>
//             <div></div>
//             <span>Sep</span>
//         </li>
//         <li className='filter'>
//             <div></div>
//             <span>Oct</span>
//         </li>
//         <li className='filter'>
//             <div></div>
//             <span>Nov</span>
//         </li>
//         <li className='filter'>
//             <div></div>
//             <span>Dec</span>
//         </li>

//     </ul>
//   </Card>;
// }

// export default ExpenseFilter;
