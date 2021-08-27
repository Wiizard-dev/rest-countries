import { Link } from "react-router-dom";

const NoMatch = () => {
    return (
        <div className="no-match">
            <h2 className='no-match__title'>404 Error</h2>
            <p className='no-match__text'>The page you're looking for do not exist !</p>
            <Link className='no-match__link' to='/'>
                <i className='fas fa-arrow-left'></i>
                <span>Go back to known land</span>
            </Link>
        </div>
    )
}

export default NoMatch;