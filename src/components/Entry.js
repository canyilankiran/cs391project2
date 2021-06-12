import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import HotelInfo from './pages/hotelInfo';
import Operation from './pages/operation';
import Logout from './pages/logout';
import Help from'./pages/help';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/entry' exact component={Home} />
                <Route path='/hotelinfo' component={HotelInfo} />
                <Route path='/operation' component={Operation} />
                <Route path='/help' component={Help} />
                <Route path='/logout' component={Logout} />
            </Switch>
        </Router>
    );
}

export default App;
