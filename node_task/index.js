const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});

const hasNumber = (string) => {
    return /\d/.test(string);
}

app.get('/', (req, res) => {
    res.send('<p>Hellow world get request</p><form action="/" method="post"><input type="text" name="name" placeholder="Name"><button>submit</button></form>');
});

app.post('/', urlencodedParser, (req, res) => {
    const name = req.body.name;
    const numCheck = hasNumber(name);
    if(name.length <= 2 || numCheck){
        res.send('please enter valid input name must have more than 2 characters and should not contain any number <br> <a href="/">Go back<a>');
    }else{
        res.send('hello world post request');
    }
})


app.listen(5000, (err) => {
    if(err) console.log(err);
    console.log('app is connected to port 5000');
})