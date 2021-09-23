import ExpenseItem from "./comp/ExpenseItem";
import TopBar from "./comp/TopBar";

function App() {
  return (
    <div>
      <h2>Lets Get Started</h2>
      <ExpenseItem amount={700} />
    </div>
  );
}

export default App;
