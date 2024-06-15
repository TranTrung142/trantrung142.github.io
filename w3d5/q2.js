const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false}));

app.get('/', (req, res) => {
    const form = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Form</title>
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
    let name = req.body.name;
    if (!name) {
        name = "person";
    }
    let age = req.body.age;
    if (!age) {
        age = "unknown";
    }
    res.send(`Welcome ${name}, age ${age}!`);
})

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});