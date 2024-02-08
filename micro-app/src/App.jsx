import './App.css'
import Button from "./Button";
import useCount from "./store";

function MicroApp() {
  const [count,] = useCount();

  return (
    <div className="App">
      <h1>Micro App</h1>
      <Button />
      <div className="card">
        Count is {count}
      </div>
    </div>
  );
}

export default MicroApp
