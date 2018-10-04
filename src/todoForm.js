import React from 'react';
import { Form } from 'react-bootstrap/lib/Form';
import { FormGroup } from 'react-bootstrap/lib/FormGroup';
import { FormControl } from 'react-bootstrap/lib/FormControl';
import { Button } from 'react-bootstrap/lib/Button';
import { ControlLabel } from 'react-bootstrap/lib/ControlLabel';

export class ToDoForm extends React.Component {

    constructor() {
        super();
        this.AddTask= this.AddTask.bind(this);
    }
    AddTask(e) {
        e.preventDefault();
        console.log("add task");
        const input = document.getElementById("inputTask");
        const val = input.value;        
        input.value="";
        this.props.AddTask(val);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.AddTask}>
                    <input type="text" name="inputTask" id="inputTask" autoComplete="off"></input>
                    <button type="button" onClick={this.AddTask}> Add Task</button>
                </form>


            </div>
        )
    }

}