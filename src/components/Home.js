import QuerySection from './QuerySection';
import CountryList from './CountryList';
import { useEffect, useState } from 'react';

const Home = () => {

    const [countryData, setCountryData] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    
    const url = "https://restcountries.eu/rest/v2/all";

    const fetchData = async (url) => {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error during query');
            }
            const data = await res.json();
            setFetchError(null);
            setCountryData(data);
        } catch (error) {
            setFetchError(error);
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url])

    return (
        <main>
            <QuerySection fetchData={fetchData} />
            <CountryList
              countries={countryData}
              fetchError={fetchError}
            />
        </main>
    )
}

export default Home;