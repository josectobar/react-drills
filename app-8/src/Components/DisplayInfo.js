import React, { Component } from 'react'


export default class DisplayInfo extends Component {

    constructor(props) {
        super(props)
    }
    render(){


        return(

            <div>
                <h3>Name: {this.props.pkName}</h3>
                <h4>Type: {this.props.type}</h4>
            </div>
        )
    }
}