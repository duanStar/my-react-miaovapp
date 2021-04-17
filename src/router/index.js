import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {routeList} from './routes';

function Router(props){
    return (
        <Switch>
            {routeList.map((item,index)=>{
                return <Route exact={item.exact} key={index} path={item.path} render={item.render} />
            })}
        </Switch>
    )
}

export default Router;