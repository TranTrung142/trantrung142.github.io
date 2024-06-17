const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.urlencoded({ extended: true }));

const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 }
];

let shoppingCart = {};

// products screen
app.get('/', (req, res) => {
    res.render('shop', { products });
});

// product detail screen
app.get('/product/:name', (req, res) => {
    const product = products.find(p => p.name === req.params.name);
    res.render('product', { product });
});

// add to cart
app.post('/addToCart', (req, res) => {
    const { name, price, quantity } = req.body;

    if (quantity <= 0) quantity = 1;
    if (shoppingCart[name]) {
        shoppingCart[name].quantity += quantity;
        shoppingCart[name].price = price;
    } else {
        shoppingCart[name] = { name, price, quantity: quantity};
    }

    res.redirect('/cart');
});

// shopping cart screen
app.get('/cart', (req, res) => {
    res.render('shoppingcart', { 
        shoppingCart,
        total: Object.values(shoppingCart).reduce((acc, item) => acc + item.price * item.quantity, 0),
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
