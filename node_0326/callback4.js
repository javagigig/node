// promise

class Login {
    checkUser(id, pwd, onSuccess, onFail){
        // id / pwd => test / 1234 로그인 성공
        // 아니면 실패
        if(
            (id == 'test' && pwd == '1234') ||
            (id == 'admin' && pwd == 'admin')
        ){
            onSuccess(id);
        } else{
            onFail(new Error('에러 발생!'));
        }
    }

    // 권한을 가져오는 함수 
    getStatus(id, onSuccess, onFail){
        // id 가 admin이 로그인할 경우 '관리자 입니다.' 출력
        // id 가 admin이 아닌 사람이 로그인할 경우
        // 'oo님은 일반유저입니다.'출력
        // 그 외에는 에러

        if(id == 'admin'){
           onSuccess("관리자");
        } else {
            if(id == undefined){
                onFail();
            } else{
                onSuccess("일반유저");
            }
        }
    }
}

// 객체 생성
var login = new Login();
login.checkUser(
    'test', 
    '1234',
    (id) => {
        console.log(id + '님 환영합니다!');
        login.getStatus(
            id,
            (status) => {console.log(status + ' 입니다.')},
            (error) => {console.log(error)}
        );
    },
    (error) => {console.log(error)}    
);


// 객체 생성
var login = new Login();
login.checkUser(
    'admin', 
    'admin',
    (id) => {console.log('관리자 입니다.')},
    () => {console.log(id + '님은 일반유저 입니다.')}    
);


