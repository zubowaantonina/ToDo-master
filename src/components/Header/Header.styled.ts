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
  position: relative;
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
export const ToggleButton=styled.div`
 position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-color: #477fe6ff;
`
export const ThemeButton=styled.button`
color: #200183b4;
		background: #9db8f3ff;
		 border: 0;
    box-shadow: none;
    outline: none;
      border-radius: 25px;
`