import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss';
import { ToDo } from "../../models/todo-item";

export const ToDoList = (props: { todos: ToDo[], updateTodo: Function, deleteTodo: Function }) => {


    const chekenList = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item) => {
                return (<ToDoListItem
                    toDoItem={item}
                    key={item.id}
                    updateTodo={props.updateTodo}
                    deleteTodo={props.deleteTodo}
                />)
            })
    }
    const unchekenList = () => {
        return props.todos

            .filter((item) => item.isDone)
            .map((item) => {
                return (<ToDoListItem
                    toDoItem={item}
                    key={item.id}
                    updateTodo={props.updateTodo}
                    deleteTodo={props.deleteTodo}
                />)
            })
    }
    return (


        <div className="todo-container">
            <ul className="todo-list failed">
                {
                    chekenList()
                }

            </ul>
            <ul className="todo-list completed">
                {
                    unchekenList()
                }

            </ul>
        </div>
    )
}