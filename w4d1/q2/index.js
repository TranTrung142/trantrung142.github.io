const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

app.use(express.urlencoded({ extended: false}));
app.set('view engine', 'ejs');

app.use('/css', express.static(path.join(__dirname, 'css')));

app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false
}));

const getCssFileName = () => {
    const hour = (new Date()).getHours();
    return (6 <= hour && hour <= 18) ? 'day.css' : 'night.css';
}

app.get('/', (req, res) => {
    res.render('form', { cssFileName: getCssFileName() });
});

app.post('/result', (req, res) => {
    req.session.name = req.body.name;
    req.session.age = req.body.age;
    res.redirect('/output');
});

app.get('/output', (req, res) => {
    let name = req.session.name || "person";
    let age = req.session.age ?? "unknown";
    res.send(`Welcome ${name}, age ${age}!`);
})

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});