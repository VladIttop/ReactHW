import "./App.css";
import Greeting from "./Greeting";
import Message from "./Message";
import Button from "./Button";

function App() {
  const messgae = "Приклад передачі даних в компонент";
  return (
    <div>
      <h1>Hello, World!</h1>
      <Greeting name={"Vlad"}/>
      <Message message={messgae}/>
      <Button text={"Click me"} onClick={() => alert("Привіт!")}/>
    </div>
  );
}

export default App;
