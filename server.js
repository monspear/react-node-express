const express = require('express')
const app = express()
const path = require('path')

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1', // localhost로 표시하면 IPv6 주소인 ::1로 해석될 수 있다. 즉 ::1:3306에서 연결거부가 일어날 수 있으니 주의하자
  user     : 'root',
  password : '132435',
  database : 'react_node_express'
});
 
connection.connect();
 
connection.query('SELECT * from react_node_express_user', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
 
connection.end();

app.listen(8080,function(){
    console.log('listening on 8080')
})
/*
app.get('/', (req, res) => {
    res.json({
        success: true,
        문자열: "성공하였습니다.",
        정수형숫자: 1,
        실수형숫자: 1.0,
        캐릭터형태: 's',
    });
});
*/
app.use(express.static(path.join(__dirname, 'reacttest/test/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/reacttest/test/build/index.html'));
});

app.get('/Chatroom', (req, res) => {
    //res.sendFile( __dirname + '/index.html');
    //res.sendFile(__dirname+'/reacttest/test/build/home.html');
    res.sendFile(path.join(__dirname, '/reacttest/test/build/index.html'));
});

app.get('/Login', (req, res) => {
    res.sendFile(path.join(__dirname, '/reacttest/test/build/index.html'));
});

app.get('/Register', (req, res) => {
    res.sendFile(path.join(__dirname, '/reacttest/test/build/index.html'));
});
// npm i mysql 로 mysql에 연결할 수 있게