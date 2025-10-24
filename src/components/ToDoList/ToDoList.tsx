import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'
import { ToDo } from "../../models/todo-item"
import { ToDoContainer, TodoListCompleted, TodoListFailed } from "./ToDoList.styled"


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
        <ToDoContainer>
            <TodoListFailed>
                {checkedList()}
            </TodoListFailed>
            <TodoListCompleted>
                {unCheckedList()}
            </TodoListCompleted>
        </ToDoContainer>
    )
}