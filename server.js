const express = require('express')
const app = express()
const path = require('path')
app.use(express.json()) // 이거 안쓰면 클라이언트에서 보낸 값들이 undefined object로 나타남. (기본값이 undefined라서 그럼)

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1', // localhost로 표시하면 IPv6 주소인 ::1로 해석될 수 있다. 즉 ::1:3306에서 연결거부가 일어날 수 있으니 주의하자
  user     : 'root',
  password : '132435',
  database : 'react_node_express'
});
 /*
connection.connect();
 
connection.query('SELECT * from react_node_express_user', function (error, results, fields) {
  //if (error) throw error;
  //console.log('The solution is: ', results);
});
 
connection.end();
*/
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

var flag = 0;
app.post('/Register', (req, res) => {
    
    connection.connect();
    var check_sql='select count(*) as cnt from react_node_express_user where nickname = ? and u_email = ?';
    var check_values = [req.body.nickname, req.body.u_eamil];

    connection.query(check_sql,check_values, function (error, result, fields) {
        console.log("에러:"+error);
        console.log("결과값입니다:"+JSON.stringify(result));
        console.log("결과행"+result[0].cnt);
        flag = result[0].cnt;
        console.log("1flag:"+flag)
        if (error){
            console.log("서버단에서 회원정보 중복확인 중 에러발생"+error);
        } else if(result[0].cnt != 0){ // 같은 유저정보가 존재한다면
            console.log("1결과값입니다:"+JSON.stringify(result));
            res.status(409).send(JSON.stringify('중복된 회원정보입니다'));
        } 
    });
    //connection.end();
    /*
    
    https://velog.io/@hseoy/%EC%9E%90%EC%A3%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-10%EA%B0%80%EC%A7%80-HTTP-Status-Code

    */
    var sql = 'INSERT INTO react_node_express_user VALUES(NULL,?,?,?,?,?)';
    var values = [req.body.nickname, req.body.u_eamil, req.body.u_id, req.body.u_password, req.body.u_checked_password];
    console.log("받은 값 = "+values);
    console.log("flag:"+flag)
    if(flag==0){
        connection.query(sql,values, function (error, result, fields) {
            if (error){
                console.log("서버단에서 에러발생"+error);
                //connection.end();
            }
            console.log("Number of records inserted: " + result.affectedRows);
        }); 
        res.status(200);
    }
    connection.end();
    //console.log("req = "+req.body);
    //console.log("res = "+res.body);
});
