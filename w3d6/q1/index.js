const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "view"));

app.use('/css', express.static(path.join(__dirname, 'css')));
const getCssFileName = () => {
    const hour = (new Date()).getHours();
    return (6 <= hour && hour <= 18) ? 'day.css' : 'night.css';
}

app.get('/', (req, res) => {
    const date = new Date();
    res.render("index", {
        time: date.toTimeString(),
        cssFilePath: getCssFileName(),
    });
});
app.listen(3000);