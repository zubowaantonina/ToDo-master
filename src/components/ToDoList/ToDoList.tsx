import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'
import { ToDo } from "../../models/todo-item"
import {  ToDoIListBlock, ToDoIListContainer } from "./ToDoList.styled"


export const ToDoList = (props: { todos: ToDo[], deleteTodo: Function, updateTodo: Function }) => {


    const checkedList = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item) => {
                return (
                    <ToDoListItem
                        toDoItem={item}
                        key={item.id}
                        updateTodo={props.updateTodo}
                        deleteTodo={props.deleteTodo} />
                )

            })
    }
    const unCheckedList = () => {
        return props.todos
            .filter((item) => item.isDone)
            .map((item) => {
                return (
                    <ToDoListItem
                        toDoItem={item}
                        key={item.id}
                        updateTodo={props.updateTodo}
                        deleteTodo={props.deleteTodo} />
                )

            })
    }
   return (
		<ToDoIListContainer>
			<ToDoIListBlock $status='failed'>
				{unCheckedList()}
			</ToDoIListBlock>
			<ToDoIListBlock $status='completed'>
				{checkedList()}
			</ToDoIListBlock>
		</ToDoIListContainer>
	);
}