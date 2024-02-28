import "./App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import useSession from "./store";
import AppLoader from "./AppLoader";
import useStore from "microApp1/store";

function App() {
  const [count, setCount] = useStore();
  const [user, setUser] = useSession();
  const [localUser, setLocalUser] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(user);
    }
  }, [setUser]);

  return (
    <Router>
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
          <Link className="button" to="/microApp1">
            Micro App 1
          </Link>
          <Link className="button" to="/microApp2">
            Micro App 2
          </Link>
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
          <Routes>
            <Route path="/microApp1" element={<AppLoader module="microApp1" />} />
            <Route path="/microApp2" element={<AppLoader module="microApp2" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
