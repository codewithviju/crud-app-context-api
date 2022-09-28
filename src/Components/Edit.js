import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TodosContext from "../context/MainContext";
const Edit = () => {
  const { getAllTodos } = useContext(TodosContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [input, setInput] = useState({
    name: "",
  });

  useEffect(() => {
    const getSingleUser = async () => {
      const res = await axios.get(`http://localhost:8000/todos/${id}`);
      setInput(res.data);
    };
    getSingleUser();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/todos/${id}`, input);
    getAllTodos();
    navigate("/");
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
                  onSubmit={handleUpdate}
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
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Edit;
