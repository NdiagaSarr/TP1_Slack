const express = require('express');
const app = express();
const port = process.env.port || 5000;
const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};
app.get('/api',(req,res)=>{
    res.send(mockResponse);
});
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
   });
   app.listen(port, function () {
    console.log('App listening on port: ' + port);
   });