import React, { useState } from "react";
import "../css/homePage.css";
import SearchForm from "./SearchForm";
import { format, addDays, startOfDay } from "date-fns";

const HomePage = () => {
  // Initialize tasks as an array
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    name: "",
    des: "",
    date: "",
  });

  // Handle changes to the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  // Set default date if not provided
  const handleAddTask = () => {
    let taskDate = newTask.date;

    if (!taskDate) {
      // Set a default date and time (e.g., today at 09:00 AM)
      const defaultDate = startOfDay(new Date());
      taskDate = format(defaultDate, "yyyy-MM-dd") + "T09:00"; // Default time set to 09:00 AM
    }

    if (newTask.name) {
      setTasks([...tasks, { ...newTask, date: taskDate }]);
      setNewTask({
        name: "",
        des: "",
        date: "",
      });
    }
  };

  return (
    <div className="homepage">
      <div className="homepage-sidebar">
        <div className="homepage-menu">
          <div className="homepage-menu-item active">My Day</div>
          <div className="homepage-menu-item">Important</div>
          <div className="homepage-menu-item">Planned</div>
          <div className="homepage-menu-item">Assigned to me</div>
          <div className="homepage-menu-item">Flagged email</div>
          <div className="homepage-menu-item">Tasks</div>
          <div className="homepage-menu-item">Project</div>
        </div>
      </div>
      <div className="homepage-main">
        <div className="homepage-header">
          <h1>My Day</h1>
          <div className="homepage-date">Wednesday, July 17</div>
        </div>
        <div className="search-btn">
          <SearchForm />
        </div>
        <div className="homepage-tasks-wrapper">
          <div className="homepage-tasks">
            {tasks.map((task, index) => (
              <div
                key={index}
                className={`homepage-task ${task.important ? "important" : ""}`}
              >
                <h3>{task.name}</h3>
                <p>{task.des}</p>
                <small>{task.date}</small>
              </div>
            ))}
          </div>
          <div className="add-task">
            <div className="wrapper-add">
              <h1 className="tl">Add task</h1>
              <input
                type="text"
                name="name"
                value={newTask.name}
                onChange={handleChange}
                placeholder="Title"
                required
              />
              <textarea
                name="des"
                value={newTask.des}
                onChange={handleChange}
                placeholder="Description"
                required
              />
              <input
                type="date"
                name="date"
                value={newTask.date}
                onChange={handleChange}
              />
              <button onClick={handleAddTask}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
