import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'

export default class Products extends Component {
    constructor(){
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        Axios.get('https://practiceapi.devmountain.com/products').then( res => {
            this.setState({
                products:res.data
            })
        })
    }
    
    render(){
        const productDisplay = this.state.products.map(product => {
            return (
                <div key={[product.id]} >
                    <Link to={`/details/${product.id}`}><img style={{width: "250px"}}src={product.image} alt={product.title}/></Link>
                    <p>{product.title}</p>
                </div>
            )
        })
        return(
            <div >
                <h1>Products</h1>
                <div style={{display: 'flex', width: '80vw', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                    {productDisplay}
                </div>
            </div>
        )
    }
}