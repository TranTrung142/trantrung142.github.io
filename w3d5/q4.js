const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: false}));

app.use('/css', express.static(path.join(__dirname, 'css')));

const getCssFileName = () => {
    const hour = (new Date()).getHours();
    return (6 <= hour && hour <= 18) ? 'day.css' : 'night.css';
}

app.get('/', (req, res) => {
    const form = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Form</title>
            <link rel="stylesheet" href="/css/${getCssFileName()}">
        </head>
        <body>
            <form action="/result" method="POST">
                <label for="name">Name</label>
                <input type="text" id="name" name="name">
                <label for="age">Age</label>
                <input type="text" id="age" name="age">
                <button type="submit">Submit Query</button>
            </form>
        </body>
        </html>
    `;
    res.send(form);
});

app.post('/result', (req, res) => {
    res.redirect(`/output?name=${req.body.name}&age=${req.body.age}`);
});

app.get('/output', (req, res) => {
    let name = req.query.name;
    if (!name) {
        name = "person";
    }
    let age = req.query.age;
    if (!age) {
        age = "unknown";
    }
    res.send(`Welcome ${name}, age ${age}!`);
})

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});