import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styles from './AddUserForm.module.scss';
import countries from '../../../resources/countries.json';
import { useForm } from '../../../hooks/useForm';
import Button from '@mui/material/Button';
import NumberFormat from 'react-number-format';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../contexts/AppContext';
import { useContext } from 'react';


interface ICountryDisplayListRow {
	code: string;
	label: string;
	states: any[];
}

interface IAddUserForm {
	country: ICountryDisplayListRow | null;
	users: string | null;
}

const AddUserForm = () => {
	const { setLoading } = useContext(AppContext)
	const navigate = useNavigate();
	const { formData, handleInputChange, handleSubmit } = useForm<IAddUserForm>({ country: null, users: null }, async ({country, users}) => {
		setLoading(true);
		const requestedUsers = users?.replaceAll(',', '') as string;
		const requestedCountry = country?.label as string;
		await axios.post('http://52.3.78.233/users', { country: requestedCountry, users: parseInt(requestedUsers)});
		setLoading(false);
		navigate('/');
	});
    return (
		<>
			<form className={styles.form} onSubmit={handleSubmit}>
				<Autocomplete
					value={formData.country}
					onChange={(_event: any, country: ICountryDisplayListRow | null) => handleInputChange(null, 'country', country)}
					options={countries}
					renderInput={(params) => <TextField {...params} label="Controllable" />}
				/>
				<NumberFormat
					label="Users count"
					value={formData.users}
					name="users"
					thousandSeparator={true}
					onChange={handleInputChange}
					customInput={TextField}
					isNumericString={true}
				/>
				<Button variant="text" type="submit" disabled={!formData.country || !formData.users}>
					Submit
				</Button>
			</form>
		</>
	);
}

export default AddUserForm