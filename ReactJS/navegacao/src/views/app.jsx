import React from 'react'
import './app.css'
import Menu from '../components/layout/menu'
import Content from '../components/layout/content'
import { BrowserRouter as Router } from 'react-router-dom'

const App = props => {
    <div className="App">
        <Router>
            <Menu />
            <Content/>
        </Router>
    </div>
}

export default App;