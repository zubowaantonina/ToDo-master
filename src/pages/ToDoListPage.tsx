
import { Form } from '../components/Form/Form'
import { ToDoList } from '../components/ToDoList/ToDoList'
import { ToDo } from '../models/todo-item'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { createAction, deleteAction, updateAction } from '../features/todoList'

export const ToDoListPage = () => {

    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const dispatch = useDispatch()

    const createNewToDo = (text: string) => {
        dispatch(createAction(text))
    }
    const updateTodo = (toDoItem: ToDo) => {
        dispatch(updateAction(toDoItem))

    }
    const deleteTodo = (toDoItem: ToDo) => {
        dispatch(deleteAction(toDoItem))
    }
    return (
        <>

            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </>

    )
}