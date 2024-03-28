const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/test', function (req, res) {
    var map = req.query;
    console.log(map);
    res.send(`<h1>이름 : ${map.name}<br> 나이 : ${map.age} <br> test : ${map.test}</h1>`)
   // res.send('Hello Test')
  })

  // '/test/:id' id 부분이 어떤 것이 와도 test 출력됨
  app.get('/test/:id', function (req, res) {
    var map = req.params;
  //  console.log(id);
    res.send(`<h1>${map.id}</h1>`)
   
  })

app.listen(3001)