// class Login 을 promise 함수로 변경시.. callback4.js 참고
class Login {
    checkUser(id, pwd){
        return new Promise((resolve, reject) =>{
            if(
                (id == 'test' && pwd == '1234') ||
                (id == 'admin' && pwd == 'admin')
            ){
                resolve(id);
            } else{
                reject(new Error('에러 발생!'));
            }
        });
    }
}

var login = new Login();
login
    .checkUser("test", "1234")
    // login ~ .checkUser -> 위 두줄이 promise 의 객체가 되는 부분
    .then(id => {console.log(id + '님 환영합니다.')})
    .catch(error => {console.log(error)});