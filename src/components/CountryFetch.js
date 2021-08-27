import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Country from "./Country";

const CountryFetch = () => {
    
    const countryName = useParams('id');
    const url = `https://restcountries.eu/rest/v2/name/${countryName.id}?fullText=true`;
    const [countryData, setCountryData ] = useState(null);
    const [ErrorOfData, setErrorOfData ] = useState(false);

    const fetchdata = async (url) => {
        fetch(url)
          .then(resp => {
            if(resp.status === 404) {
                setErrorOfData(true);
                return '';
            } else {
                return resp.json();
            }
          })
          .then(data => {
            setCountryData(data);
          })
          .catch(err => {
              setErrorOfData(true);
          })
    }

    useEffect(() => {
        fetchdata(url);
    }, [url])

    return (
        <section className='country__container'>
            {
                countryData ? (
                    <Country data={countryData[0]}/>
                ) : ErrorOfData === true ? (
                    <p>Error</p>
                ) : (
                    ''
                )
            }
        </section>
    )
}

export default CountryFetch;