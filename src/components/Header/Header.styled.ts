import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ToDoHeader = styled.header`
 position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: #4682b4;
    display: flex;
    align-items: center;
`

export const HeaderContainer = styled.div`
  max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`
export const HeaderNavLink = styled(NavLink)`
 text-decoration: none;
    padding: 10px;
    color: #fff;
    &.active {
		color: #390ac6b4;
		background: #fff;
		border-radius: 10px;
	}
`