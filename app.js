const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
console.log('Server is up at 3000');
console.log('open localhost:3000');
 
app.listen(3000)	
