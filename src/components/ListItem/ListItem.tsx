import { Link } from "react-router-dom"
import { ToDo } from "../../models/todo-item"
import classes from './ListItem.module.scss'
import { ListItemLink } from "./ListItem.styled"

export const ListItem = ({ todo }: { todo: ToDo }) => {
    return (

        <ListItemLink 
            className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`}
            rel='noreferrer'
            to={`/list/${todo.id}`}
        >{todo.text}
        </ListItemLink>

    )
}