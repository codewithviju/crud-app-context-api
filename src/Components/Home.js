import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import TodosContext from "../context/MainContext";
import { Link } from "react-router-dom";
const Home = () => {
  const [input, setInput] = useState({
    name: "",
  });
  const { todos, setTodos, getAllTodos } = useContext(TodosContext);

  useEffect(() => {
    getAllTodos();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/todos", input);
    getAllTodos();
    setInput({ name: "" });
  };

  // Delete a Todo

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/todos/${id}`);

    const remainingItems = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(remainingItems);
  };
  return (
    <section class="vh-100" style={{ backgroundColor: "#eee" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-lg-9 col-xl-7">
            <div class="card rounded-3">
              <div class="card-body p-4">
                <h4 class="text-center my-3 pb-3">My Todo App</h4>

                <form
                  onSubmit={handleAdd}
                  class="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2"
                >
                  <div class="col-12">
                    <div class="form-outline">
                      <input
                        name="name"
                        value={input.name}
                        onChange={(e) =>
                          setInput({
                            ...input,
                            [e.target.name]: e.target.value,
                          })
                        }
                        type="text"
                        placeholder="Enter Task Here"
                        id="form1"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <button type="submit" class="btn btn-primary">
                      Save
                    </button>
                  </div>
                </form>

                <table class="table mb-4">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Todo item</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(todos).length > 0 ? (
                      todos.map((item) => {
                        return (
                          <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>

                            <td>
                              <Link to={`/edit/${item.id}`}>
                                <button type="submit" class="btn btn-primary">
                                  <i className="fa fa-pencil"></i> Edit
                                </button>
                              </Link>
                              <button
                                onClick={() => handleDelete(item.id)}
                                type="submit"
                                class="btn btn-danger ms-1"
                              >
                                <i className="fa fa-trash"></i> Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td>No Todos Found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
