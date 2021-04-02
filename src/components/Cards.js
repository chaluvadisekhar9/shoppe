import React, { Component } from 'react'
import w1 from '../images/w1.jpg';
import w2 from '../images/w2.jpg';
import w3 from '../images/w3.jpg';
import Card from './Card';
export class Cards extends Component {
    render() {
        return (
            <div className='d-flex'>
                <Card item={w1}/>
                <Card item={w2}/>
                <Card item={w3}/>
                
            </div>
        )
    }
}

export default Cards
