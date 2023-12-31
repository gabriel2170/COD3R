import React, { Component } from 'react'
import './calculator.css'
import Button from '../components/button'
import Display from '../components/display'


const initialState = {
    displayValue: '0',
    clearDisplay:false,
    operation:null,
    value: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = {...initialState}
    constructor(props){
        super(props)
        this.addDigit = this.addDigit.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.clearMemory = this.clearMemory.bind(this)
    }
    clearMemory() {
        this.setState({...initialState})
    }

    setOperation(op) {
        console.log(op)
    }

    addDigit(n){
        console.log(n)
        if (n === '.' && this.state.displayValue.includes('.')){
            return
        }
        
        const clearDisplay = this.state.displayValue === '0'
        || this.state.clearDisplay

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n

        this.setState({displayValue, clearDisplay: false})
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label='AC' click={this.clearMemory} triple/>
                <Button label='9' click={this.addDigit}/>
                <Button label='8' click={this.addDigit}/>
                <Button label='7' click={this.addDigit}/>
                <Button label='6' click={this.addDigit}/>
                <Button label='5' click={this.addDigit}/>
                <Button label='4' click={this.addDigit}/>
                <Button label='3' click={this.addDigit}/>
                <Button label='2' click={this.addDigit}/>
                <Button label='1' click={this.addDigi}/>
                <Button label='0' click={this.addDigit} double/>
                <Button label='-' click={this.setOperation} operation/>
                <Button label='+' click={this.setOperation} operation/>
                <Button label='.' click={this.setOperation} operation/>
                <Button label='=' click={this.setOperation} operation/>
                <Button label='/' click={this.setOperation} operation/>

            </div>
        )
    }
}