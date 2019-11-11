import React, {Component} from 'react';
import ProductsCard from './ProductsCard'
import AddCardButton from './AddCardButton'
import axios from 'axios'
import './Products.css';
import {connect} from 'react-redux';
import {getUser} from '../../redux/reducer';


class Shop extends Component{
    constructor(props){
        super(props)
        this.state = {
            products:[],
            user:[]
        }
    this.delete_product = this.delete_product.bind(this)
    this.getProducts = this.getProducts.bind(this)
    }



    componentDidMount() {
        this.getProducts()
    }

    delete_product(product_id) {
        axios
            .delete(`/api/products/${product_id}`)
            .then(() => this.componentDidMount())
            .catch(error => console.log(`Dashboard-axiosDelete: ${error}`))
    }
    
    getProducts() {
        axios
        .get('/api/products')
        .then(response => this.setState({ products: response.data }))
        .catch(error => console.log(`Dashboard-axiosGet: ${error}`))

    }

    addToCart(product){
        axios
        .post('/api/cart', {product:product})
        .then(response => console.log(response.data));
        // this.props.getUser()

    }


    // edit_product(id){
    //     axios
    //         .delete(`/api/shop/${id}`)
    //         .then(() => this.componentDidMount())
    //         .catch(error => console.log(`Dashboard-axiosDelete: ${error}`))
    // }

    render(){
        console.log(this.props);

     //slow_shop is a product that of products   
        let { products } = this.state
        console.log(products)
        let displayProducts = products.map(products => {
        return(
            <div>
        <ProductsCard 
        key={products.product_id}
        products={products}
        product_id={products.product_id}
        name={products.name}
        image_url= {products.image_url}
        description={products.description}
        price={products.price}
        delete_product={this.delete_product}
        edit_product={this.edit_product}
        getProducts={this.getProducts}
        addToCart={this.addToCart}
        />
        
        </div>
        )
        
        })
    
        return(
            <main>
            



            <div className='dashboard'>
                {products ? displayProducts : 'No products yet'}
                <AddCardButton getProducts={this.getProducts}/>
            </div>
                
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
) (Shop);