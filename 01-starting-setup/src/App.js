import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      id: 'e1',
      title: 'Car',
      amount: 123.32,
      date: new Date(2023, 4, 12)
    },
    {
      id: 'e2',
      title: 'Food',
      amount: 321.32,
      date: new Date(2023, 4, 11)
    },
  ];

  return (
    <div>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date} >
      </ExpenseItem>
    </div>
  );
}

export default App;
