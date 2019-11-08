import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import '../../assets/CSS/_globals.scss'


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={App} />
            {/* <Route exact path="/shop" component={Shop} /> */}
        </Switch>

    )
}

export default Router
