import { Routes, Route } from 'react-router-dom';
import { AppContext } from "../../contexts/AppContext"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Header from '../Layout/Header/Header';
import styles from './Main.module.scss';
import Overview from '../../Pages/Overview/Overview';
import AddUser from '../../Pages/AddUser/AddUser';
import { useContext } from 'react';

const Main = () => {
    const { loading } = useContext(AppContext);
    return (
		<>
			<Backdrop classes={{ root: styles.backdrop }} open={loading}>
				<CircularProgress color="secondary" thickness={6.5} size={50} />
			</Backdrop>
			<div>
				<Header />
				<main className={styles.main}>
					<Routes>
						<Route path="/" element={<Overview />} />
						<Route path="/add-user" element={<AddUser />} />
					</Routes>
				</main>
			</div>
		</>
	);
}

export default Main