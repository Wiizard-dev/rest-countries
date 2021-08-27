import { useEffect, useState } from "react";

const Header = () => {

    const [darkMode, setDarkmode] = useState(true);
    const clickHandler = (e) => {
        setDarkmode(!darkMode);
    }

    useEffect(() => {
        const body = document.querySelector('body');
        darkMode ? body.className = 'dark-mode' : body.className = 'light-mode'
    }, [darkMode]);

    return (
        <header className='header'>
            <div className='header__container'>
                <h1 className='header__title'>Where in the world ? </h1>
                <div className='header__toggle'>
                    <i className="fas fa-moon header__moon"></i>
                    <button onClick={clickHandler}>
                        {darkMode ? 'Dark Mode' : 'Light Mode'}
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;