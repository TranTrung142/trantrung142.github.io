const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "view"));

app.use(express.urlencoded({ extended: false}));

app.get('/', (req, res) => {
    res.render('getForm');
});

app.post('/result', (req, res) => {
    let name = req.body.name;
    if (!name) {
        name = "person";
    }
    let age = req.body.age;
    if (!age) {
        age = "unknown";
    }
    res.render('result', {name, age});
})

app.listen(3000);