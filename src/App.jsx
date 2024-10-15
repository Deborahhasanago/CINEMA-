import { useState } from "react";
import FetchMovie from "./FetchMovie";
import Header from "./header/Header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <FetchMovie />
      <Header />
    </div>
  );
}

export default App;
