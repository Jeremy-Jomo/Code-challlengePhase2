import React, { useEffect, useState } from "react";
import GoalList from "./Components/Goallist/Goallist";
import DepositForm from "./Components/Deposit/DepositForm";
import AddGoalForm from "./Components/GoalForm/GoalForm";

function App() {

  const [goals, setGoals] = useState([]);

  const fetchGoals = () => {
    fetch("http://localhost:3000/goals")
      .then((response) => response.json())
      .then((data) => {
        setGoals(data);
        console.log("Data fetched from server:", data);
      });
  };

  useEffect(() => {
    fetchGoals(); // initial load
  }, []);

  return (
    <div className="App">
      <h1>Welcome to the Application</h1>
      <p>This is a placeholder for your main application content.</p>
      <GoalList goals={goals} />
      <DepositForm goals={goals} onDepositMade={fetchGoals}/>
      <AddGoalForm onGoalCreated={fetchGoals} />
    </div>
  );
}

export default App;