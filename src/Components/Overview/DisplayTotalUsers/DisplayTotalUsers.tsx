import NumberFormat from 'react-number-format';
import styles from './DisplayTotalUsers.module.scss';

interface Props {
    sumTotalUsers: number;
}

const DisplayTotalUsers = (props: Props) => {
    return (
        <div className={styles.box}>
        <h2>Sum Total Users</h2>
        <NumberFormat value={props.sumTotalUsers} displayType="text" thousandSeparator={true} />
    </div>
    )
}

export default DisplayTotalUsers;