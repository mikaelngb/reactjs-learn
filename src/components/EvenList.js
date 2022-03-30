import React from "react";

function EvenList({ lists, handleClick }) {
  return (
    <>
      {lists.map((list) => (
        <React.Fragment key={list.id}>
          <p>{list.title}</p>
          <button onClick={() => handleClick(list.id)}>Delete</button>
        </React.Fragment>
      ))}
    </>
  );
}

export default EvenList;
