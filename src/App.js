import Expenses from "./components/Expenses";
import expenses from "./expenses";
import './App.css'

function App() {
  return (
    <div>
     <h1 className="page-header">Expense Tracker</h1>
     <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
