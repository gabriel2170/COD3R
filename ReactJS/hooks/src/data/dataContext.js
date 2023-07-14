import React from 'react'

export const data ={
    number :1423,
    text: 'Context de teste'

}


const DataContext = React.crateContext(data)

export default DataContext