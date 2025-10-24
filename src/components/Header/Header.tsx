import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'
import { HeaderContainer,  ToDoHeader } from './Header.styled'

export const Header = () => {
    const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
        return isActive ? `${classes.active} ${classes.link}` : classes.link
    }
    return (
        <ToDoHeader>
            <HeaderContainer>
                <NavLink to="/" className={getActiveClass}>ToDo</NavLink>
                <NavLink to="/list" className={getActiveClass}>List</NavLink>
            </HeaderContainer>
        </ToDoHeader>
    )
}