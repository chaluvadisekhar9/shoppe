import React, { Component } from 'react'

export class Card extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='card'>
                <img src={this.props.item}/>
                <div>
                    <h4>get scraves</h4>
                    <a>Read MOre</a>
                </div>
            </div>
        )
    }
}

export default Card
