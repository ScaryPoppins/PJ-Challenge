
//see Products
const getProducts = async (req, res) => {
    const reply = await req.app
      .get("db")
      .get_products()
      .catch(error => {
        console.log(error);
        res.status(500).json("Server Error in getProducts on ProductController");
      });
    res.status(200).json(reply);
  };


//delete product
const deleteProduct = (req,res) => {
  const db = req.app.get('db'),
      { product_id } = req.params;
  db.delete_product( product_id )
      .then(() => res.sendStatus(200))
      .catch(error => res.status(500).send(`deleteOne product controller: ${error}`))
}


//create Product
const createProduct = (req,res) => {
  const db = req.app.get('db')
  ,
  // console.log(req.body)
      {name, image_url, description, price } = req.body;

  db.create_product(name, image_url ,description, price)
      .then(response => res.status(200).send(response))
      .catch(error => res.status(500).send(`CREATEproduct on  product controller: ${error}`))
}


//update Product
const updateProduct = (req,res) => {
  console.log(req.body)
  const db = req.app.get('db'),
      { product_id, name, image_url, description, price } = req.body;

  db.update_product( product_id, name, image_url, description, price )
      .then(response => res.status(200).json(response))
      .catch(error => res.status(500).send(`UPDATE product on product controller: ${error}`))
}

// add to cart
function addToCart(req, res){
  console.log(req.body)
  const {product, price} = req.body
  const db = req.app.get('db')

      req.session.user.cart.push(product)
      req.session.user.total += +product.price;
      // console.log(req.session.user)
      res.status(200).json(req.session.user)
}



  module.exports = {
    getProducts, deleteProduct, createProduct, updateProduct, addToCart
  };
