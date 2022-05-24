import {Component} from "react";
import {TodoList} from "./TodoList";
import {TodoSearchForm} from "./TodoSearchForm";
import './TodoForm.css'

export class TodoForm extends Component{
    state = {
        todoItem: {
            title: '',
        }
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        const newItem = {...this.state.todoItem, id:10, completed: false}
        console.log(newItem)
        // this.onTodoAddHandler(newItem)
    }

    onTitleChange  = ({target}) => {
        this.setState({todoItem: {...this.state.todoItem, title: target.value}});
    }

    render() {
        return(
            <div className='mainForm'>
            <form
                onSubmit={this.onFormSubmit}
                >
                <div className={'searchContainer'}>
                <h1 className={'mainName'}>Todos</h1>
                    <TodoSearchForm />
                </div>
                    <TodoList />
                <div className='messageForm'>
                    <input
                        className='inputArea'
                        type="text"
                        value={this.state.todoItem.title}
                        onChange={this.onTitleChange}
                        placeholder={'What you need to do'}
                    />
                    <button className='addButton'>+</button>
                </div>
            </form>
            </div>
        )
    }
}
