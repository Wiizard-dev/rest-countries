import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CountryFetch from "./components/CountryFetch";
import Header from "./components/Header";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";

const App = () => {

    return (
        <Router>
            <div className='App'>
                <Header/>
                <div className='container'>
                    <Switch>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                        <Route path={'/country/:id'}>
                            <CountryFetch/>
                        </Route>
                        <Route>
                            <NoMatch/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App;