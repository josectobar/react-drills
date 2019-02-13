import React, { Component } from 'react'
import Axios from 'axios';

export default class Details extends Component {
    constructor(){
        super()

        this.state = {
            productDetails: {}
        }
    }
    componentDidMount() {
                Axios.get(`https://practiceapi.devmountain.com/products/${this.props.match.params.id}`).then(res => {
            this.setState({
                productDetails:res.data
            })
        })
    
    }
    render(){
        let { image, title, desc, price, category } = this.state.productDetails
        return (
            <div>
                <h2>{title}</h2>
                <img src={image} alt={title} style={{width: "350px"}}/>
                <h3>{desc}  -   ${price}    - {category}</h3>
                <button onClick={this.props.history.goBack}>Back</button>
            </div>
        )
    }
} 


