import "./App.css";

import MicroApp from "microApp/App";
import useStore from "microApp/store";

function App() {
  const [count, setCount] = useStore();

  return (
    <div className="app">
      <h1>Host App</h1>
      <h2>The counter state is shared between host and micro-app</h2>
      <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
      </button>
      <h3>Below is the Micro App container</h3>
      <div className="micro-app-container">        
        <MicroApp />
      </div>
    </div>
  );
}

export default App;