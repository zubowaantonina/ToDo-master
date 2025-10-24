import { ToDo } from '../../../models/todo-item'
import { ToDoItem, ToDoItemControl, ToDoItemControls, ToDoItemText } from './ToDpListInem.styled'
import checkIcon from '../../../assets/images/check.png'
import uncheckIcon from '../../../assets/images/uncheck.png'
import trashIcon from '../../../assets/images/trash.png'
export const ToDoListItem = (props: { toDoItem: ToDo, deleteTodo: Function, updateTodo: Function }) => {
    return (
        <ToDoItem>
            <ToDoItemText>{props.toDoItem.text}</ToDoItemText>
            <ToDoItemControls>
                <ToDoItemControl
                    icon={trashIcon}
                    onClick={() => props.deleteTodo(props.toDoItem)}
                ></ToDoItemControl>
                <ToDoItemControl
                    icon={props.toDoItem.isDone ? checkIcon : uncheckIcon}
                    onClick={() => props.updateTodo(props.toDoItem)}
                ></ToDoItemControl>
            </ToDoItemControls>
        </ToDoItem>
    )
}