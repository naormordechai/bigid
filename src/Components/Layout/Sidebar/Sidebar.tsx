import { Dispatch, SetStateAction, useState } from 'react';
import {  NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import styles from './Sidebar.module.scss';

interface Props {
	isOpen: boolean;
	onClose: Dispatch<SetStateAction<boolean>>
}

const Sidebar = (props: Props) => {
    return (
		<Drawer anchor="left" open={props.isOpen} onClose={() => props.onClose(false)} classes={{ paper: styles.drawer }}>
			<div className={styles.drawer__header}>
				<h2>BIGID</h2>
			</div>
			<nav className={styles.drawer__nav}>
				<NavLink
					to="/"
					onClick={() => props.onClose(false)}
					end
					className={({ isActive }) => `${styles.drawer__nav__navLink} ${isActive && styles.drawer__nav__navLink__active}`}
				>
					<Button variant="text">Overview</Button>
				</NavLink>
				<NavLink
					to="/add-user"
					onClick={() => props.onClose(false)}
					end
					className={({ isActive }) => `${styles.drawer__nav__navLink} ${isActive && styles.drawer__nav__navLink__active}`}
				>
					<Button variant="text">Add user</Button>
				</NavLink>
			</nav>
		</Drawer>
	); 
}

export default Sidebar;