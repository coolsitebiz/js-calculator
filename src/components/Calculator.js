import React from 'react'
import Button from './Button'
import '../App.css'

class Calculator extends React.Component { 
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">               

                <Button id="seven" text="7" btnClass="digit"/>
                <Button id="eight" text="8" btnClass="digit"/>
                <Button id="nine" text="9" btnClass="digit"/>
                <Button id="divide" text="/" btnClass="operator"/>
                <Button id="four" text="4" btnClass="digit"/>
                <Button id="five" text="5" btnClass="digit"/>
                <Button id="six" text="6" btnClass="digit"/>
                <Button id="multiply" text="*" btnClass="operator"/>
                <Button id="one" text="1" btnClass="digit"/>
                <Button id="two" text="2" btnClass="digit"/>
                <Button id="three" text="3" btnClass="digit"/>
                <Button id="add" text="+" btnClass="operator"/>
                <Button id="decimal" text="." btnClass="operator"/> 
                <Button id="zero" text="0" btnClass="digit"/>
                <Button id="equals" text="=" btnClass="operator"/>
                <Button id="subtract" text="-" btnClass="operator"/>
                <Button id="clear" text="Clear" btnClass="clear"/>   
            </div>
        )
    }
}

export default Calculator