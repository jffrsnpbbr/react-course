
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = props => {
  const expenses = props.expenses.map((expense) => (
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      key={expense.id}
    />
  ));
  return <Card className="expenses">{expenses}</Card>;
}

export default Expenses;
