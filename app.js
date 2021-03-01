const express = require('express');
const app = express();
const router = express.Router();

const port = process.env.PORT || 3000;
const api = require('./api');


app.use(express.static('public'));
app.use(express.json());
 app.use('/api', api );


app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
})






