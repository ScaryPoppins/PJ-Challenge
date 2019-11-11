import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Register from './Components/Authentication/Register'
import LogIn from './Components/Authentication/LogIn'
import Cart from './Components/Cart/Cart'
import Orders from './Components/Orders/Orders'
import Contact from './Components/Contact/Contact'


export default (
    <Switch>

        <Route exact path = '/' component={Home}/>
        <Route path = '/products' component={Products}/>
        <Route path= '/login' component={LogIn} />
        <Route path= '/register' component={Register} />
        <Route path = '/orders' component={Orders} />
        <Route path = '/cart' component={Cart} />
        <Route path = '/contact' component={Contact}/>

    </Switch>
)