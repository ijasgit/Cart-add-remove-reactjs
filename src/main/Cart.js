import React, { Component } from 'react'

export default class Cart extends Component {
    removeToCart = () => {
   
        this.props.removeToCart(this.props.product)
       
    }
    render() {
        return (
            
            <div>
                <div >
                <h1>{this.props.product.name}</h1>
                <h1>{this.props.product.qty}</h1>
                <button onClick={this.removeToCart}>remove to cart</button>
            </div></div>
        )
    }
}
