import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import CustomModal from "./components/CustomModal";
import EvenList from "./components/EvenList";

function App() {
  const l = [
    {
      title: "Title 1",
      id: 1,
    },
    {
      title: "Title 2",
      id: 2,
    },
    {
      title: "Title 3",
      id: 3,
    },
  ];
  const [lists, setLists] = useState(l);
  const [toggleShow, setToggleShow] = useState(true);

  const handleClick = (id) => {
    setLists((prevLists) => {
      return prevLists.filter((prevList) => {
        return id !== prevList.id;
      });
    });
  };

  return (
    <div className="App">
      <Title title="Title 1" subtitle="SubTitle 1" />
      {toggleShow && (
        <div>
          <button onClick={() => setToggleShow(false)}>Hide</button>
        </div>
      )}
      {!toggleShow && (
        <div>
          <button onClick={() => setToggleShow(true)}>Show</button>
        </div>
      )}
      {toggleShow && <EvenList lists={lists} handleClick={handleClick} />}
      <CustomModal>
        <h1>Modal 1</h1>
        <p>Isi Modal 1</p>
      </CustomModal>
    </div>
  );
}

export default App;
