import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/reducer';
import './Cart.css'
import CartCard from './CartCard'
import axios from 'axios'
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


// toast.configure();

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
            user: [],
            total: 0
        }
    }
const 


async placeOrder(bulkAddress){

}

//   handleToken = async(token, addresses) => {
//       console.log(token)
//       console.log(addresses)
//         const {total, products} = this.state

//         const response = await axios.post(
//           '/api/checkout',
//           { token, addresses, total, products}
//         );
//         const { status, address, cart } = response.data;
//         console.log("Response:", response.data);
//         if (status === "success") {
//           toast("Success! Check email for details", { type: "success" });
//           this.setState({products:cart})
//           // console.log(address.charge.shipping.address)

//           this.placeOrder(address.charge.source)

//         } else {
//           toast("Something went wrong", { type: "error" });
//         }
//       }


    componentDidMount() {
        axios.get('/auth/user').then(res => {
            console.log(res);
        this.setState({products: res.data.cart, total: res.data.total})    
        })
    }


     deleteCartItem = (id, quantity) => {
       console.log(id)
        axios
          .delete(`/api/cart/${id}?quantity=${quantity}`)
          .then(() => this.componentDidMount())
          .catch(error => console.log(`Cart.js Delete Error: ${error}`))
     }

  

    render() {
        console.log(this.props.user)
        console.log(this.state.products)
        
        let { products } = this.state
        console.log(products)

        var distinct = (value, index, self) => {
            return self.indexOf(value) === index;
        }

        const distinctItems = Array.from(new Set(products.map(s => s.shop_id)))
        .map(shop_id => {
            return {
              shop_id: shop_id,
                title: products.find(s => s.shop_id === shop_id).title,
                price: products.find(s => s.shop_id === shop_id).price
        }
        })

        
        let displayItems =distinctItems.map(cartItem => {
            let count = 0
            for(let i=0;i<products.length;i++){
              if(products[i].shop_id === cartItem.shop_id){
                count++
              }
            }
            // return e+' - quantity = '+count
        //   })

        console.log(cartItem)

        return(
            <div>
        <CartCard 
        key={cartItem.id}
        id={cartItem.id}
        title={cartItem.title}
        image_url= {cartItem.image_url}
        price={cartItem.price}
        products={cartItem.products}
        user={cartItem.user}   
        quantity={count}
        cartItem={cartItem}
        deleteCartItem={this.deleteCartItem}
    
        />
        
        </div>
        )
        
        })



        return (
            <main>
              <div className = 'cart-container'>


                <div className='cart-sub-header' id='cart-card-head'>

                {this.props.user ? `${this.props.user.first_name}'s Cart` : 'My Cart'}

                </div>

                <div className = 'cart-sub-products'>


{/* cart-card headings */}
                  <div className = 'cart-card-container'>
                      <div className = 'cart-card-product' id='cart-card-head'>
                          Product
                      </div>
                      <div className = 'cart-card-quantity' id='cart-card-head'>
                          Quantity
                      </div>
                      <div className = 'cart-card-price' id='cart-card-head'>
                          Price
                      </div>
                      <div className = 'cart-card-delete' id='cart-card-head'>
                      </div>
                  </div>


{/* cart-card itself */}


            <div className='cart-card-map'>
                {products ? displayItems : 'No products yet'}

            </div>
    
                </div>{/* cart-sub-products close */}


                <div className= 'cart-sub-footer'>

                     <div className= 'cart-total'>
                       <p>Total:    &nbsp;&nbsp;</p>
                       <p>${this.state.total}</p>
                    </div>  {/* cart-total close */}



                    <div className = 'cart-checkout'>
  

 {/* ---Stripe Checkout--- */}




                    </div>{/* cart-checkout close */}

                </div>  {/* cart-sub-footer close */}



                    
              </div> {/* cart-container close */}
            </main>
        )
    }
}

const mapStateToProps = state => state;

export default connect(
    mapStateToProps,
    {getUser
      // ,removeFromCart
    }
) (Cart);