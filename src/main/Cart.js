import React, { Component } from 'react'
import "./cart.css"
export default class Cart extends Component {
    removeToCart = () => {
   
        this.props.removeToCart(this.props.product)
       
    }
    plusToCart = () => {
   
        this.props.plusToCart(this.props.product)
       
    }
    minusToCart = () => {
   
        this.props.minusToCart(this.props.product)
        
       
    }


    render() {
        return (
            
            <div className='cart-container' >
                <div className='cart-items'>
                <h1>{this.props.product.name}</h1>
                <h1>{this.props.product.qty}</h1>
                <button onClick={this.removeToCart}>remove to cart</button>
                <button onClick={this.plusToCart}>+</button>
                <button onClick={this.minusToCart}>-</button>

                
            </div></div>
        )
    }
}
