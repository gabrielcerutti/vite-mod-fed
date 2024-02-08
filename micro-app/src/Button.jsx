import "./Button.css";
import useCount from "./store";

export const Button = () => {
  const [,setState] = useCount();
  return (
    <div className="container-btn">
      <button className="shared-btn" onClick={() => setState((s) => s + 1)}>
        Click me
      </button>
    </div>
  );
};

export default Button;