import AddUserForm from '../../Components/AddUser/AddUserForm/AddUserForm';
import styles from './AddUser.module.scss';

const AddUser = () => {
    return (
		<div className={styles.container}>
			<AddUserForm />
		</div>
	);
}

export default AddUser