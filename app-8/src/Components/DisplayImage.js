import React, { Component } from 'react'

export default class DisplayImage extends Component {

    constructor(props) {
        super(props)        
    }

    render() {
        
        return(
            <div>
                <img src={this.props.imgUrl} alt={this.props.pkName}/>
            </div>
        )
    }
}