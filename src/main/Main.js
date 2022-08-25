import React, { Component } from 'react'
import img1 from "./lap-images/hp-img.png"
import img3 from "./lap-images/dell-img.png"
import img2 from "./lap-images/mac-img.jpg"
import Product from './Product'
import Cart from './Cart'
import "../main/main.css"


export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            newCart: [],empty:[],
            list: [{ image: img1, name: "HP", type: "ssd", price: "40,000", value: 1, qty: 0 },
            { image: img2, name: "MAC", type: "Hard disk", price: "40,000", value: 2, qty: 0 },
            { image: img3, name: "DELL", type: "ssd", price: "40,000", value: 3, qty: 0 }
            ],
        };

    }
    addToCart = (data) => {
        // found=newCart.find(data)
        console.log("data", data);
        var a = this.state.newCart
        var found = a.includes(data)
        if (found === false) {
            data.qty = data.qty + 1
            this.setState({ newCart: [...this.state.newCart, data.qty] })
            this.setState({ newCart: [...this.state.newCart, data] });
        }
        else {
            // console.log("hi")
            console.log(data.qty)
            data.qty = data.qty + 1
            console.log(data.qty)
            this.setState({ newCart: [...this.state.newCart] })
        }
    };
    removeToCart = (data) => {
        console.log("data", data);
        var a = this.state.newCart
        var found = a.includes(data)
        console.log("end")
        if (found === true) {
            if ((data.qty) > 0) {
                var index=a.indexOf(data)
                a.splice(index,1);
                data.qty = 0;
                // this.setState({ data: undefined })
                this.setState({ newCart: [...this.state.newCart] })

                this.setState({ newCart: [...this,] });
            }
            // else{
            //  this.setState({ newCart: [] })   
            // }

        }
        // else {
        //     // console.log("hi")
        //     console.log(data.qty)
        //     data.qty = data.qty - 1l
        //     console.log(data.qty)
        //     this.setState({ newCart: [...this.state.newCart, data.qty] })
        // }

    }

    render() {

        return (
            <div className='main-container'>
                <div>
                    {this.state.list.map((product, value) =>
                        <Product key={value} product={product} addToCart={this.addToCart} />)

                    }
                </div>
                <div>
                    {this.state.newCart.map((product, value) =>
                        <Cart key={value} product={product} removeToCart={this.removeToCart} />)

                    }</div>
            </div>

        )
    }
}
