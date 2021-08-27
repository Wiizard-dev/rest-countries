import { Link } from "react-router-dom";

const CountryList = ({countries, fetchError }) => {
    return (
        <ul className='countries'>
            {countries && !fetchError ? (
                countries.map((country, i ) => {
                    if (i < 250) {
                        return (
                            <li className='countries__country' key={i + 1}>
                                <div className='countries__img'>
                                    <Link to={`/country/${country.name}`}>
                                        <img 
                                          className='countries__img__element'
                                          src={country.flag}
                                          alt={`Flag from ${country.name}`}
                                        />
                                    </Link>
                                </div>
                                <div className='countries__data'>
                                    <h3 className='countries__title'>{country.name}</h3>
                                    <ul className='countries__stats'>
                                        <li className='countries__stats__info'>
                                            <span>Population</span> {country.population}
                                        </li>
                                        <li className='countries__stats__info'>
                                            <span>Region</span> {country.region}
                                        </li>
                                        <li className='countries__stats__info'>
                                            <span>Capital</span> {country.capital}
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        )
                    }
                    return ''
                })
            ) : (
                <h2>There are no countries availables</h2>
            )}
        </ul>
    )
}

export default CountryList;