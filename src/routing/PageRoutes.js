import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import React from 'react';

import Menu from '../side_panel_component/sidebar'

const Root =()=>{
    return (
       
    <div>

<Menu/>

        <Switch>
            <Route  exact path='/' component={Overview} />
            <Route   path="/profilePage" component={ProfilePage}/> 
        </Switch>

    </div>

    );
};

export default Root;