import "./App.scss";
import { useState, useEffect } from "react";
import useSession from "./store";
import AppLoader from "./AppLoader";
import useStore from "microApp1/store";

function App() {
  const [count, setCount] = useStore();
  const [user, setUser] = useSession();
  const [localUser, setLocalUser] = useState("");
  const [currentApp, setCurrentApp] = useState("microApp1");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(user);
    }
  }, [setUser]);

  return (
    <div className="host-app">
      <div className="input-container">
        <input
          type="text"
          onChange={(e) => setLocalUser(e.target.value)}
          className="input-field"
        />
        <button
          onClick={() => {
            localStorage.setItem("user", localUser);
            setUser(localUser);
          }}
          className="input-button"
        >
          Sign in
        </button>

        <h3 className="logged-user">
          {user === "" && "No user logged in"}
          {user !== "" && "Logged user " + user}
        </h3>
      </div>

      <h1>Host App</h1>

      <div className="buttons-container">
        <button className="button" onClick={() => setCurrentApp("microApp1")}>
          Micro App 1
        </button>
        <button className="button" onClick={() => setCurrentApp("microApp2")}>
          Micro App 2
        </button>
      </div>

      <h4> # This counter state is shared from micro-app-1 to host # </h4>
      <div className="buttons-container">
        <button
          className="button"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </div>

      <div className="micro-app-container">
        <div className="micro-app">
          {currentApp === "microApp1" && (
            <AppLoader module="microApp1" />
          )}
        </div>
        <div className="micro-app">
          {currentApp === "microApp2" && (
            <AppLoader module="microApp2" />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
