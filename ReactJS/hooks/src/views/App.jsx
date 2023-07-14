import './App.css'
import React, { useContext} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Store from '../data/store'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import DataContext, { data } from '../data/dataContext'

const App = props => {
    const [state, setState] = useContext(data)
    return (

        <Store>
            <DataContext.provider value={{ state, setState }}>

                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </DataContext.provider>
        </Store>

    )
}

export default App