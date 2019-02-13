import React, { Component } from 'react'
class NewTask extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userInput:``
        }

    }

    handleUserInput = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }
    handleButton =(value) => {
        this.props.newTaskFn(value)
        this.setState({
            userInput:``
        })
    }

    render() {
        return(
            <div>
                <input onChange={this.handleUserInput} value={this.state.userInput} placeholder='Enter a task'/>
                <button onClick={() => this.handleButton(this.state.userInput)}>Add task</button>
            </div>
        )
    }

}

export default NewTask