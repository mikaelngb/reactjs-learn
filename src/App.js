import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Mikael");

  const handleChangeName = () => {
    setName("Maikel");
  };
  return (
    <div className="App">
      <p>First Name : {name}</p>
      <button onClick={handleChangeName}>Change Name</button>
    </div>
  );
}

export default App;
