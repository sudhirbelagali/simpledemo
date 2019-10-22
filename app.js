const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})
console.log('Server is up at 3000');
console.log('open localhost:3000');


app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});

