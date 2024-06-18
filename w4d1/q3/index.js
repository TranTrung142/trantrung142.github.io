const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false
}));

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
    if (!req.session.cart) req.session.cart = {};

    if (quantity <= 0) quantity = 1;
    if (req.session.cart[name]) {
        req.session.cart[name].quantity += quantity;
        req.session.cart[name].price = price;
    } else {
        req.session.cart[name] = { name, price, quantity: quantity};
    }

    res.redirect('/cart');
});

// shopping cart screen
app.get('/cart', (req, res) => {
    res.render('shoppingcart', {
        shoppingCart: req.session.cart,
        total: Object.values(req.session.cart).reduce((acc, item) => acc + item.price * item.quantity, 0),
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
