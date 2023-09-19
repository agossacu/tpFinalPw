import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Characters } from "./components/characters";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <Characters />;
}

export default App;
