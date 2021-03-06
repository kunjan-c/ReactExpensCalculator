import ExpenseItem from './ExpenseItem';
import './Expenses.css'

function Expenses(props){

  return <div>
  <ExpenseItem
    title={props.item[0].title}
    amt={props.item[0].amount}
    date={props.item[0].date}
  ></ExpenseItem>
  <ExpenseItem
    title={props.item[1].title}
    amt={props.item[1].amount}
    date={props.item[1].date}
  ></ExpenseItem>
  <ExpenseItem
    title={props.item[2].title}
    amt={props.item[2].amount}
    date={props.item[2].date}
  ></ExpenseItem>
  <ExpenseItem
    title={props.item[3].title}
    amt={props.item[3].amount}
    date={props.item[3].date}
  ></ExpenseItem>
</div>;

}



export default Expenses;
