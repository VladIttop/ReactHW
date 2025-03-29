import "./App.css";
import Profile from "./Task1/Profile";
import data from "./data/user.json";
import StatisticsList from "./Task2/StatisticsList";
import stats from "./data/statistics.json";
import FriendList from "./Task3/FriendList";
import friends from "./data/friends.json";
import TransactionsList from "./Task4/TransactionsList";
import transactions from "./data/transactions.json";
function App() {
  const title = "Upload stats";
  return (
    <>
      <h1>Task 1</h1>
      <Profile data={data} />
      <hr></hr>
      <h1>Task 2</h1>
      <StatisticsList stats={stats} title={title}/>
      <hr></hr>
      <h1>Task 3</h1>
      <FriendList data={friends}/>
      <hr></hr>
      <h1>Task 4</h1>
      <TransactionsList data={transactions}/>
    </>
  );
}

export default App;
