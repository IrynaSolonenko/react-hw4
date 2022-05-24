import {Component} from "react";
import {TodoForm} from "./components/leftSidebar/TodoForm";
import {TodoDescription} from "./components/mainArea/TodoDescription";
import './components/Todo.css'

export class Todo extends Component{

    onTodoAddHandler = (newItem) => {
        console.log(newItem);
    }

    render() {
        return(
            <>
                <div className={'todo'}>
                    <TodoForm
                    onTodoAdd={this.onTodoAddHandler}
                    />
                    <TodoDescription />
                </div>

            </>
        )
    }
}