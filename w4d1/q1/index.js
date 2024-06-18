const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: false}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { cookies: req.cookies });
});

app.post('/add', (req, res) => {
    const { key, value } = req.body;
    res.cookie(key, value);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})
