const db = require('./src/DB/Conn');
const express = require('express');
const dotenv = require('dotenv');

const cors = require('cors');
const apis = require('./src/Routes/routes');
dotenv.config({path: '.env'})
const port = process.env.PORT;
console.log(port);
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/', apis);


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})


