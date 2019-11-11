const express = require("express");
const app = express();

//delete from Cart

const deleteCartItem = (req,res) => {

        let index = req.session.user.cart.findIndex(item => item.product_id === +req.params.product_id)
    
        req.session.user.total -= (+req.session.user.cart[index].price * +req.query.quantity)
        let newCart = req.session.user.cart.filter((e, i) => {
            return e.product_id !== +req.params.product_id
            console.log(e.product_id)
        })

        req.session.user.cart = newCart
        console.log(req.session.user)
        res.status(200).json(req.session.user)
    }


  module.exports = {
    deleteCartItem
  };
