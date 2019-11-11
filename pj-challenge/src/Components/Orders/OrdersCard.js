import React from 'react';
import '../Cart/Cart.css'

// import {add} from '../Images/add'

export default function OrdersCard(props) {

    return (
        <div className = 'cart-card-container'>

            <div className = 'cart-card-product'>
{/* TITLE */}
            {props.items_ordered}
            </div>


            <div className = 'cart-card-price'>
{/* PRICE               */}
            ${props.total}
            </div>
            <div className = 'cart-card-delete'>
            </div>
        </div>
    ) 
}    