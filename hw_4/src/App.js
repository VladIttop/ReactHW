import "./App.css";
import data from "./data/recepies.json";
import Recepies from "./Recipes/Recepies";
function App() {
  return (
    <>
      <Recepies data={data} />
    </>
  );
}

export default App;
