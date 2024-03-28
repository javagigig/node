// .js

const express = require('express');
var cors = require('cors')
const mysql = require('mysql');
const path = require('path');
const app = express();
app.use(cors());

// ejs 파일 사용하기 위한 몇가지 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '.')); // .은 경로: 파일 분리해서 관리시 헷갈리지 않게하기 위해 (확장자)


// MySQL 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test1234',
  database: 'test'
});

connection.connect(function(err) {
  if (err) {
    console.error('db 연결 실패!');
    return;
  }
  console.log('db 연결 성공!');
});

app.get('/', function (req, res) {
  res.send('Hello World');
});

var userData = {
    "qwer" : {
        "USERID" : "qwer",
        "USERNAME" : "김철수",
        "ADDR" : "서울"
    }
};
app.get('/profile/:id', function (req, res) {
    var map = req.params;

    // connection.query(`SELECT * FROM TBL_USER WHERE USERID = ?`, [userId], function (error, results, fields) {
    //     if (error) throw error;
    //     res.send(results[0]);
    //   });
    // });
    res.render('profile',{jsonData : map}); // profile.js 에서 .js확장자 생략가능, 위에서 잡아놔서
  });


app.get('/search', function (req, res) {
    //localhost:3000/search?id=qwer 이런 식으로 넘어옴
  var map = req.query; // 쿼리 안에 위의 정보 들어옴, 이걸 map에 넣음 {id : qwer}
  console.log(map);

  // MySQL 쿼리 실행
  connection.query(`SELECT * FROM TBL_USER WHERE USERID = '${map.id}'`, function (error, results, fields) {
    if (error) throw error;
  // const name = results[0].USERNAME;
   // res.send(`<h1>이름 : ${name}</h1>`);
    console.log(results[0]);
    res.send(results[0]);

  });
});

app.get('/insert', function (req, res) {
  var map = req.query; 
  console.log(map);

  // 아이디 중복 체크를 위한 쿼리 실행
  connection.query("SELECT * FROM TBL_USER WHERE USERID = ?", [map.id], function (error, results, fields) {
    if (error) {
      console.error('에러!');
      res.send({msg : '에러 발생!'});
      return;
    }

    if (results.length === 0) {
      connection.query("INSERT INTO TBL_USER (USERID, USERNAME, ADDR) VALUES (?, ?, ?)", [map.id, map.name, map.addr], function (error, results, fields) {
        if (error) {
          console.error('Error inserting user into database: ' + error.stack);
          res.status(500).send('Error inserting user into database');
          return;
        }
        res.send({msg : "저장되었습니다!"});
      });
    } else {
      res.send({msg : "이미 있는 회원입니다."});
    }
  });
});


app.listen(3001);
