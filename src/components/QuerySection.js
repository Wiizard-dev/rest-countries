import { useState } from "react";

const QuerySection = ({fetchData}) => {
    const [searchValue, setSearchValue] = useState("");
    const handleSearchBar = (e) => {
        let url;
        setSearchValue(e.target.value);
        url = url = "https://restcountries.eu/rest/v2/name/" + e.target.value;
        if (e.target.value === "") url = "https://restcountries.eu/rest/v2/all/";
        fetchData(url);
    };

    const [, setRegionFilter] = useState('');
    const HandleRegionFilter = (e) => {
        setRegionFilter(e.target.value);
        let url = "https://restcountries.eu/rest/v2/region/" + e.target.value;
        if (e.target.value === 'All') url = "https://restcountries.eu/rest/v2/all/";
        fetchData(url);
    }

    return (
        <section className='query'>
            <div className='search-bar'>
                <i className='fas fa-search search-bar__icon'></i>
                <input
                  type='text'
                  className='search-bar__input'
                  name='search-bar'
                  id='search-bar'
                  placeholder='Search for a country'
                  value={searchValue}
                  onChange={handleSearchBar}
                />
            </div>
            <div className='dropdown'>
                <select
                  name='dropdown'
                  id='dropdown'
                  className='dropdown__input'
                  onChange={HandleRegionFilter}
                >
                    <option value='All' name='dropdown' defaultValue>
                        All
                    </option>
                    <option value='Africa' name='dropdown'>
                        Africa
                    </option>
                    <option value='Americas' name='dropdown'>
                        Americas
                    </option>
                    <option value='Asia' name='dropdown'>
                        Asia
                    </option>
                    <option value='Europe' name='dropdown'>
                        Europe
                    </option>
                    <option value='Oceania' name='dropdown'>
                        Oceania
                    </option>
                </select>
            </div>
        </section>
    )
}

export default QuerySection;