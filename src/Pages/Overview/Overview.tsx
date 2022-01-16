import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import ICountry from '../../interfaces/Country';
import styles from './Overview.module.scss';
import DisplayTotalUsers from '../../Components/Overview/DisplayTotalUsers/DisplayTotalUsers';
import { Chart } from 'react-google-charts';
import { AppContext } from '../../contexts/AppContext';

  interface CountriesMapped {
      [key: string]: number;
  }

  type CountriesMappedACC =  CountriesMapped & Object;

const Overview = () => {
    const [sumTotalUsers, setSumTotalUsers] = useState<number>(0);
    const [chartData, setChartData] = useState<any>([['Country', 'Popularity']]);
    const {loading, setLoading } = useContext(AppContext);

    useEffect(() => {
        buildChartAndSumTotalUsers();
    }, []);

    const getCountries = async () => {
        setLoading(true);
        const result = await axios.get('http://52.3.78.233/users'); // Don't understand why is called "/users" if its returns countries :/
        setLoading(false);
        return result.data;
    } 

    const getSumUsers = (countries: ICountry[]): number =>  countries.reduce((sum, { users }) =>  sum + users, 0);

    const getChartData = (countries: ICountry[]): [string, number][] => {
		const countriesMapped: CountriesMapped = countries.reduce((countriesMappedAcc: CountriesMappedACC, { country, users }) => {
			countriesMappedAcc[country] = countriesMappedAcc.hasOwnProperty(country) ? countriesMappedAcc[country] + users : users;
			return countriesMappedAcc;
		}, {});
		return Object.entries(countriesMapped);
	};
	

    const buildChartAndSumTotalUsers = async () => {
        const countries = await getCountries();
        const sumTotalUsers = getSumUsers(countries);
        const countriesChardData = getChartData(countries);
        setSumTotalUsers(sumTotalUsers);
        setChartData([...chartData, ...countriesChardData])
    };

    return (
		<>
			{!loading && (
				<div className={styles.container}>
					<DisplayTotalUsers sumTotalUsers={sumTotalUsers} />
					<Chart chartType="GeoChart" data={chartData} width={500} />
				</div>
			)}
		</>
	); 
}

export default Overview