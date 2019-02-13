import React, { Component } from 'react'
import Todo from './Todo'

export default class List extends Component {

    constructor(props){
        super(props)
    }
    
    render() {
        const tempArray = this.props.array.map((task, i) => {
            return (
                <Todo key={i} task={task} />
                )
            })
        return(
            <div>
                {tempArray}
            </div>
        ) 
    }
}