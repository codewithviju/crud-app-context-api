import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  // manage Todos
  const [todos, setTodos] = useState([]);

  const getAllTodos = async () => {
    const res = await axios.get("http://localhost:8000/todos");
    setTodos(res.data);
  };

  return (
    <TodosContext.Provider value={{ todos, setTodos, getAllTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
