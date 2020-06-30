import React from 'react';
import Login from '../login/login';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import PrivateRoute from '../privateroutes/privateroute';

export default class AppRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <Router>
                <Switch>
                    <Route exact path={["/","/login"]} component={Login}></Route>
                    <PrivateRoute exact path="/home" component={Home}></PrivateRoute>
                    <Route path="*" component={Notfound}></Route>
                </Switch>
            </Router>
        );
    }
}
 
function Home() {
    return <h2>Home</h2>;
  }

function Notfound() {
    return <h2>404 Page Not Found</h2>;
  }