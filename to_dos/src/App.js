import React, { useReducer, useState } from "react";
import reducer, { initialState, ADD, DEL, COMPLETE } from "./reducer";


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });    
    setNewToDo("");
  };
  const onChange = e => {
    const {
      target: { value }
    } = e;
    setNewToDo(value);
  };
  return (
    <>
      <h1>Add to do </h1>
      <form onSubmit={onSubmit}>
        <input
          value={newToDo}
          type="text"
          placeholder="Write to do"
          onChange={onChange}
        />
      </form>
      <>
        <h2>To Dos</h2>
        <ul>        
          {state.toDos.map((toDo) => (
            <li key={toDo.id}>
              <span>{toDo.text}</span>
              <button onClick={() => dispatch({ type: DEL, payload: toDo.id })}>💋 DEL</button>
              <button onClick={() => dispatch({ type: COMPLETE, payload: toDo.id })}>✌✌ Complete</button>
            </li>
          ))}
        </ul>
      </>
      <>
        <h2>Completed</h2>
        <ul>
        {state.completed.length !== 0 && (
          <>
            {state.completed.map(toDo => (
              <li key={toDo.id}>
                <span>{toDo.text}</span>
                <button onClick={() => dispatch({ type: DEL, payload: toDo.id })}>💋 DEL</button>
              </li>
            ))}
          </>
        )}
      </ul>
      </>
    </>
  );
}

export default App;