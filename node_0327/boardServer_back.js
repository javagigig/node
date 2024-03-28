// 3. boardServer.js

const express = require('express');
var cors = require('cors')
const mysql = require('mysql');
const path = require('path');
const app = express();
var session = require('express-session');
app.use(cors());

// ejs 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '.')); // .은 경로

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test1234',
  database: 'test'
});

// db 연결
connection.connect(function(err) {
  if (err) {
    console.error('db 연결 실패!');
    return;
  }
  console.log('db 연결 성공!');
});

// localhost:3001 첫화면
app.get('/', function (req, res) {
  res.send('Hello World');
});

// boardList 주소부분
app.get('/boardList', function (req, res) {
    res.render('boardList', {});
});

// boardView 주소부분
app.get('/boardView/:boardNo', function (req, res) {
    var map = req.params;  
    res.render('boardView', {boardNo : map.boardNo});
});

// boardAdd 주소부분
app.get('/boardAdd', function (req, res) {
  res.render('boardAdd', {});
});

// login page 주소부분
app.get('/login', function (req, res) {
  //res.render('login', {});
  res.render('login', {});
});

// tbl_board 데이터(쿼리) 호출 부분
app.get('/boardList.dox', function (req, res) {
    connection.query(`SELECT boardNo, title, userId, DATE_FORMAT(CDATETIME, '%Y-%m-%d %p %h:%i') AS cdatetime FROM TBL_BOARD`, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});

// tbl_board -> boardNo 데이터(쿼리) 호출 부분
app.get('/boardView.dox', function (req, res) {
    var boardNo = req.query.boardNo;
    console.log(boardNo);
    connection.query(`SELECT boardNo, title, contents, userId, DATE_FORMAT(CDATETIME, '%Y-%m-%d %p %h:%i') AS cdatetime FROM TBL_BOARD WHERE BOARDNO = ${boardNo}`, function (error, results, fields) {
        if (error) throw error;
        res.send(results[0]);
    });
});

// tbl_board boardList -> delete : 데이터(쿼리) 호출 부분
app.get('/boardDelete.dox', function (req, res) {
  // pk로 검색한 거라 그대로 복사해옴
  var boardNo = req.query.boardNo; 
  connection.query(`DELETE FROM TBL_BOARD WHERE BOARDNO = ${boardNo}`, function (error, results, fields) {
      if (error) throw error;
     res.send({result : "success"});
     
  });
});

// boardAdd 데이터(쿼리) 호출 부분
app.get('/boardAdd.dox', function (req, res) {
  var map = req.query; // 이 안에는 데이터 3개 있음

  connection.query(`INSERT INTO TBL_BOARD VALUES(NULL, ?, ?, ?, NOW())`, [map.title, map.contents, map.userId],function (error, results, fields) {
      if (error) throw error;
      res.send({result : "success"})
      // res.send(results[0]);
  });
});

// login  호출 부분
app.get('/login.dox', function (req, res) {
  var { userId, pwd } = req.query;
  connection.query(`SELECT * FROM TBL_USER WHERE USERID = ? AND PWD= ?`, [userId, pwd], function (error, results, fields) {
      if (error || results.length === 0) {
            res.send({result : "fail"});
      } else{
        req.session.userId = results[0].userId;
        req.session.pwd = results[0].pwd;
        res.send({result : "success"});
      }
    });
});

app.listen(3001);