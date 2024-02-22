import "./Button.css";
import useCount from "./store";

export const Button = () => {
  const [count, setState] = useCount();
  return (
    <button className="shared-btn" onClick={() => setState((s) => s + 1)}>
      Count is {count}
    </button>
  );
};

export default Button;