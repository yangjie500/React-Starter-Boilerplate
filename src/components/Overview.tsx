import React, { Component } from "react"

interface task {
  id: number;
  name: string;
}

interface IOverviewState {
  editId: number | null;
  isEditing: boolean;
  editValue: string;
  inputValue: string;
  tasks : task[];
}

class Overview extends Component<{}, IOverviewState> {
  state: IOverviewState = {
    editId: null,
    isEditing: false,
    editValue: "",
    inputValue: "",
    tasks: []
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target
    this.setState({
      [name]: value
    } as React.ComponentState) 
  }

  addTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const task = {
      id: this.state.tasks.length + 1,
      name: this.state.inputValue
    }
    this.setState({tasks: [...this.state.tasks, task]})
    this.state.inputValue = ""
  }

  removeTask = (id: number) => {
    this.setState(prevState => {
      let currState = prevState.tasks.filter(task => task.id !== id)
    
      currState = currState.map((task, id) => {
        return {
          ...task,
          id : id + 1};
      }) 
      

      return {
        ...prevState,
        tasks : currState
      }
    })
  }

  buttonType = (id: number) => {
    const marginRight: React.CSSProperties = {
      marginRight: "10px",
      marginLeft: "10px",
    } 
    if (this.state.isEditing && this.state.editId === id) {
      return <button style={marginRight} onClick={() => this.handleEdit(id)}>{"Update"}</button>
    } else if (this.state.isEditing && this.state.editId !== id) {
      return 
    }
    return <button style={marginRight} onClick={() => this.handleEdit(id)}>{"Edit"}</button>
    
  }

  editMenu(id: number) {
    if (!this.state.isEditing) return
  
    return (this.state.isEditing && this.state.editId === id) && <input name="editValue" onChange={this.handleChange} value={this.state.editValue}/>
  }

  handleEdit = (id: number) => {
    if (this.state.isEditing === true) {

      this.setState({
        isEditing: false,
        editId: null,
        tasks: this.state.tasks.map(task => {

          if (task.id === id) {
            task.name = this.state.editValue
            return task
          } 
          return task

        }),

        editValue: ""

      })
      return 
    }

    this.setState({
      isEditing: true,
      editId: id,
      editValue: this.state.tasks[id - 1].name
    })
  }

  render() {
    const display = this.state.tasks.map(task => {
      return (
        <li key={task.id}>
          <h2>Number {task.id}</h2>
          <div>
            <p>{task.name}</p>
            {this.editMenu(task.id)}
            <span>
                {this.buttonType(task.id)}
                {!this.state.isEditing && <i onClick={() =>this.removeTask(task.id)} className="fa fa-trash" aria-hidden="true"></i>}
            </span>
          </div>
        </li>
      )
    })

    return (
      <>
        <form className="p-2 bg-orange-300">
          <label htmlFor="addTask">Add Task: </label>
          <input id="addTask" className="border-2" onChange={this.handleChange} name="inputValue" value={this.state.inputValue}></input>
          <button onClick={this.addTask}>Submit</button>
        </form>
        
        {display}
      </>
    )
  }
}

export default Overview