import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'
import { ToDo } from "../../models/todo-item"


export const ToDoList = (props: { todos: ToDo[], deleteTodo: Function, updateTodo: Function }) => {


    const checkedList = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem
                        toDoItem={item}
                        key={idx}
                        updateTodo={props.updateTodo}
                        deleteTodo={props.deleteTodo} />
                )

            })
    }
    const unCheckedList = () => {
        return props.todos
            .filter((item) => item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem
                        toDoItem={item}
                        key={idx}
                        updateTodo={props.updateTodo}
                        deleteTodo={props.deleteTodo} />
                )

            })
    }
    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                {checkedList()}
            </ul>
            <ul className="todo-list completed">
                {unCheckedList()}
            </ul>
        </div>
    )
}