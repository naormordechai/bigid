import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Header.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const navigate = useNavigate();
    return (
		<header className={styles.header}>
			<IconButton size="large" classes={{ root: styles.header__menuBtn }} onClick={() => setIsDrawerOpen(true)}>
				<MenuIcon />
			</IconButton>
			<Button onClick={() => navigate('/')} variant="text" classes={{ root: styles.header__appName }}>
				BIGID
			</Button>
			<Sidebar isOpen={isDrawerOpen} onClose={setIsDrawerOpen} />
		</header>
	); 
}

export default Header;