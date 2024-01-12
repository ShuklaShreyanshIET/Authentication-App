import React from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

// Components Rendered
import Error404 from '../section/Error404/Error404';
import TestSection from '../section/TestSection/TestSection';
import Explore from '../section/Explore/Explore';

import Logout from '../section/Logout/LogoutRedirectState';



const LoggedRoutes = () => {
    return (
                <Switch>
                    <Route exact path={"/"} component={withRouter(Explore)}/>
                    <Route path={"/profile"}  component={withRouter(TestSection)}/>
                    <Route path={"/messages"} component={withRouter(TestSection)}/>
                    <Route path={"/listing"} component={withRouter(TestSection)}/>
                    <Route path={"/settings"}  component={withRouter(TestSection)}/>
                    <Route path={"/logout"} component={Logout}/>
                    <Route path={"/login"} component={() => <Redirect to="/"/>}/>
                    <Route path={"/signup"} component={() => <Redirect to="/"/>}/>
                    <Route component={Error404} />
                </Switch>
    )
}

export default LoggedRoutes
