// localhost: 3001에 '이름: 홍길동' 출력


const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test1234',
  database: 'test'
});

connection.connect();

app.get('/mysql', function (req, res) {
    var map = req.query;
    console.log(map);

  connection.query(`SELECT * FROM TBL_USER WHERE USERID = '${map.id}'`, function (error, results, fields) {
    if (error) {
      console.error(error);
      res.status(500).send('서버 오류');
      return;
    }
    if (results.length === 0) {
      res.send('해당 사용자를 찾을 수 없습니다.');
      return;
    }
    const name = results[0].USERNAME;
    res.send(`이름: ${name}`);
  });
});

app.listen(3001, function () {
  console.log('서버가 3001번 포트에서 실행 중입니다.');
});
