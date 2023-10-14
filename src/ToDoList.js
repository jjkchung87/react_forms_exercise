import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import { v4 as uuid } from 'uuid';

const ToDoList = () => {
  const initialValue = [];
  const [toDos, setToDos] = useState(initialValue);

  const addToDo = (newValue) => {
    const newToDo = {
      id: uuid(),
      value: newValue,
      complete: false
    };
    setToDos([...toDos, newToDo]);
  };

  const deleteToDo = (toDo) => {
    setToDos(toDos.filter(t => toDo.id !== t.id));
  };

  const updateToDo = (id, name, value) => {
    setToDos(toDos =>
      toDos.map(todo =>
        todo.id === id ? { ...todo, [name]: value } : todo
      )
    );
  };


  return (
    <div className="ToDoList">
      <ToDoForm addToDo={addToDo} />
      <ul className="list">
        {toDos.map(toDo => (
          <ToDo
            id={toDo.id}
            key={toDo.id}
            value={toDo.value}
            complete={toDo.complete}
            deleteToDo={() => deleteToDo(toDo)}
            updateToDo={updateToDo}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

