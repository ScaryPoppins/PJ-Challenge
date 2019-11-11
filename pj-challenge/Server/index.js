require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require('express-session')
const {SESSION_SECRET} = process.env;

// please note that there is nothing privite on this DB... but if you steal it I'll still be MAD!!!!
const {CONNECTION_STRING} = 'postgres://eeaiumhnexripg:3dede9c2f1064a53c11d45bb7fb249e2a76dcc7868b98e8e3c0b4b04f05b2292@ec2-75-101-147-226.compute-1.amazonaws.com:5432/d1c8ho9i136mm4?ssl=true'
const {SERVER_PORT} = '4567';
const {getProducts, deleteProduct, createProduct, updateProduct, addToCart} = require('./Controllers/ProductController')
const {registerUser, loginUser, getUser, logOutUser} = require('./Controllers/AuthController');
const {getOrders} = require('./Controllers/OrdersController')
const {deleteCartItem} = require('./Controllers/CartController')

// const cors = require("cors");

app.use( express.static( `${__dirname}/../build` ))

app.use(express.json());


massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log(`Database is Connected :)`);
});



//yummy
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
  }
}))


//auth endpoints
app.post('/auth/register', registerUser);
app.post('/auth/login', loginUser);
app.post('/auth/user', logOutUser);
app.get('/auth/user', getUser);

// product endpoints
app.get('/api/products', getProducts);
app.delete('/api/products/:product_id', deleteProduct);
app.post('/api/products', createProduct);
app.put('/api/products', updateProduct)
app.post('/api/cart', addToCart)

//cart endpoint
app.delete('/api/cart/:product_id', deleteCartItem);

//orders endpoint
app.get('/api/orders', getOrders)




app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
