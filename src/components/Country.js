import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Country = ({data}) => {

    const [borderData, setBorderData] = useState(null);
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
            setBorderData(data);
        } catch (error) {
            setFetchError(error);
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url])

    return (
        <>
            <div className='home-button-container'>
                <Link to='/'>
                    <i className="fas fa-arrow-left"></i>
                    <span>Home</span>
                </Link>
            </div>
            <div className='country'>
                <div className='country__flag'>
                    <img src={data.flag} className='country__flag__pic' alt=''/>
                </div>
                <div className='country__info'>
                    <h3 className='country__title'>{data.name}</h3>
                    <div className='country__data'>
                        <ul className='country__stats'>
                            <li className='country__stat'>
                                <span>Native Name</span>{data.nativeName}
                            </li>
                            <li className='country__stat'>
                                <span>Population</span>{data.population}
                            </li>
                            <li className='country__stat'>
                                <span>Region</span>{data.region}
                            </li>
                            <li className='country__stat'>
                                <span>Sub Region</span>{data.subregion}
                            </li>
                            <li className='country__stat'>
                                <span>Capital</span>{data.capital}
                            </li>
                        </ul>
                        <ul className='country__stats'>
                            <li className='country__stat'>
                                <span>Top Level Domain</span>
                                {
                                    data.topLevelDomain
                                }
                            </li>
                            <li className='country__stat'>
                                <span>
                                    {
                                        data.currencies.length > 1 ? 'Currencies' : 'Currency'
                                    }
                                </span>
                                {
                                    data.currencies.map(currency => {
                                        return `${currency.name} `
                                    })
                                }
                            </li>
                            <li className='country__stat'>
                                <span>
                                    {
                                        data.languages.length > 1 ? 'Languages' : 'Language'
                                    }
                                </span>
                                {
                                    data.languages.map(language => {
                                        return `${language.name} `
                                    })
                                }
                            </li>
                        </ul>
                    </div>
                    <div className='country__border'>
                        <h3>Border Countries</h3>
                        <ul>
                            {
                                borderData && !fetchError ? (
                                    data.borders.map(border => {
                                        for (let index = 0; index < borderData.length; index++) {
                                            const element = borderData[index];
                                            if(element.alpha3Code === border) {
                                                console.log(element.name);
                                                return <li key={border}>{element.name}</li>
                                            }
                                        }
                                        return ''
                                    })
                                ) : (
                                    <li>Loading</li>
                                )
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Country;