import React from 'react'
import './content.css'
import { Switch, Route } from 'react-router-dom'
import About from '../../views/exemples/about'
import Home from '../../views/exemples/home'
import Param from '../../views/exemples/param'
import NotFound from '../../views/exemples/notFound'


const Content = props => {
    <div className="Content">
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/param'>
                <Param />
            </Route>
            <Route path='*'>
                <NotFound/>
            </Route>
        </Switch>
    </div>
}

export default Content;