import React, { Component } from 'react'



export default class Product extends Component {

    addToCart = () => {

        console.log(this)
        this.props.addToCart(this.props.product)

    }


    render() {
        return (
            <div>
                <div >

                    <h1>{this.props.product.name}</h1>
                    {/* <h1>{this.props.product.qty}</h1> */}
                    <button onClick={this.addToCart}>Add to cart</button>

                </div>
            </div>
        );
    }
}

