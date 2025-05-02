import { Component } from "react";

class TaskList extends Component {
  static tasks = [];

  render() {
    this.addTask = () => {
      const taskInput = document.querySelector(".input");
      const taskValue = taskInput.value.trim();
      if (taskValue) {
        TaskList.tasks.push(taskValue);
        taskInput.value = ""; 
        this.forceUpdate(); 
      }
    };
    this.removeTask = (index) => {
      TaskList.tasks.splice(index, 1);
      this.forceUpdate(); 
    }
    return (
      <div className="task-list">
        <h1>Task List</h1>
        <input type="text" className="input"/>
        <button onClick={this.addTask}>Add Task</button>
        <ul className="task-list-ul">
          {TaskList.tasks.map((task, index) => (
            <li key={index} className="task-list-li">
              {task}
              <button onClick={() => this.removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default TaskList;
