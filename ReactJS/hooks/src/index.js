import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import DataContext from './data/dataContext'
import App from './views/App'

ReactDOM.render(
    <DataContext value={data}>
        <App />
    </DataContext>
    ,
    document.getElementById('root')
)