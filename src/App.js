import React, { Component } from 'react';
import ToDoList from './todoList'
import { ToDoForm } from './todoForm';
import { Header } from './inc/header';
import { Footer } from './inc/footer';


class App extends Component {

  constructor() {
    super();
    this.AddTask = this.AddTask.bind(this);
    this.DoneTask = this.DoneTask.bind(this);
    this.RemoveTask = this.RemoveTask.bind(this);
    this.state = {
      myTasks: [{ text: "react çalış", status: "passive" },
      { text: "angular çalış", status: "passive" },
      { text: "film izle", status: "passive" },
      { text: "erken uyu", status: "passive" }]
    }
  }
  AddTask(value) {
    let updatedList = this.state.myTasks;
    updatedList.push({ text: value, status: "passive" });
    this.setState({ myTasks: updatedList });
  }

  DoneTask(task_id) {
    let id = task_id.replace("task_","");
    let updatedList = this.state.myTasks;
    let myStatus = updatedList[id].status;
    updatedList[id].status=myStatus=="active" ? "passive" :"active";
    this.setState({ myTasks: updatedList });
  }
  RemoveTask(task_id) {
    let id = task_id.replace("task_","");
    let updatedList = this.state.myTasks;
    updatedList.splice(id,1);
    this.setState({ myTasks: updatedList });
  }

  render() {

    return (
      <div>
        <Header />
        <ToDoForm AddTask={this.AddTask} />
        <ToDoList myTasks={this.state.myTasks} DoneTask={this.DoneTask} RemoveTask={this.RemoveTask}></ToDoList>
        <Footer />
      </div>

    );
  }
}

export default App;
