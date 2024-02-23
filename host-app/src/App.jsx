import "./App.scss";
import React, { useState, useEffect } from "react";
import useSession from "./store";
//import AppLoader from "./AppLoader";
//import MicroApp1 from "microApp1/App";
import useStore from "microApp1/store";
//import MicroApp2 from "microApp2/App";

function App() {
  const [count, setCount] = useStore();
  const [user, setUser] = useSession();
  const [localUser, setLocalUser] = useState("");
  const [currentApp, setCurrentApp] = useState("microApp1");

  const MicroApp1 = React.lazy(() => import("microApp1/App"));
  const MicroApp2 = React.lazy(() => import("microApp2/App"));

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
            <React.Suspense fallback={<div>Loading...</div>}>
              <MicroApp1></MicroApp1>
            </React.Suspense>
          )}
          {/* <AppLoader endpoint="microApp1/App" /> */}
          {/* <MicroApp1></MicroApp1> */}
        </div>
        <div className="micro-app">
          {currentApp === "microApp2" && (
            <React.Suspense fallback={<div>Loading...</div>}>
              <MicroApp2></MicroApp2>
            </React.Suspense>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
