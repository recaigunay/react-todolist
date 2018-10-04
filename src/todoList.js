

import React from 'react'
import Panel from 'react-bootstrap/lib/Panel'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'

export default class ToDoList extends React.Component {
constructor () {
    super();
    this.state={todoFilter:'all'}
}
    DoneTask = (e) => {
        this.props.DoneTask(e.target.parentNode.id);
    }

    RemoveTask = (e) => {
        this.props.RemoveTask(e.target.parentNode.id);
    }

    FilterTask = (key) => {
        console.log(key);
        this.setState ({todoFilter:key});       
    }

    render() {
        let items_left = 0;
        const items = this.props.myTasks.map((elem, i) => {          
            if(this.state.todoFilter=="all" || this.state.todoFilter ==elem.status ) {
            if ( elem.status=="passive") items_left++;
            let task_id = "task_"+i;
            let done_id = "done_"+i;
            let del_id = "del_"+i;
            return (<div><ListGroupItem key={i+1} id={task_id}>
                <span className="id">{i + 1}.</span>
                <span className="title">{elem.text}</span>
                <span className="title">{elem.status}</span>
                <input type="button" value="done"  id={done_id} onClick={this.DoneTask}></input>
                <input type="button" value="remove"  id={del_id} onClick={this.RemoveTask}></input>
            </ListGroupItem>
            </div>
            )
        }})
        return (
            <div>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title><h4>Yapılacak işlerim</h4></Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <ListGroup>
                            {items}
                        </ListGroup>
                    </Panel.Body>
                </Panel>

                <div>
                  {items_left}
                </div>
                <div>
                    <input type="button" id="btnall" value="All" onClick={() =>this.FilterTask("all")}></input>
                    <input type="button" id="idactive" value="Active" onClick={() =>this.FilterTask("active")}></input>
                    <input type="button" id="idfinished" value="Finished" onClick={() =>this.FilterTask("passive")}></input>
                </div>

            </div>
        )
    }
}