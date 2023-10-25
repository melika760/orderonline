import styles from "./Nav.module.css"
import {  NavLink } from "react-router-dom"
export default function Nav(){
return(<div className={styles.wrap}>
    <div className={styles.logo}><h2>Dominiques</h2></div>
    <div className={styles.wraper}>
    <NavLink to="/"exact activeClassName={styles.active}>Home</NavLink>
    <NavLink to="/Menu"activeClassName={styles.active}>Menu</NavLink>
    <NavLink to="/Gallery"activeClassName={styles.active}>Gallery</NavLink>
    <NavLink to="/Contact"activeClassName={styles.active}>Contact</NavLink></div>
</div>)
}