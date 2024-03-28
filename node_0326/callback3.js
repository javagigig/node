function login(id, pwd, onSuccess, onFail){
    // id : test, pwd : 1234
    // id/pwd 같을 경우 : onSuccess 실행시(test님 환영합니다! 출력)
    // id/pwd 다를 경우 : onFail 실행(로그인 실패! 출력)
    if(id == 'test' && pwd == '1234'){
        onSuccess(id);
    } else{
        onFail();
    }
   
}
// 익명함수
login(
    'test', 
    '1234', 
    function (id){console.log( id + '님 환영합니다!')},
    function (){console.log('로그인 실패!')}
);

// 화살표 함수
login(
    'test', 
    '1234', 
    // 파라미터(여기서는 id)가 하나일 때 () 와 {} 생략이 가능함!
    //  (id) => {console.log( id + '님 환영합니다!')}, <= 원래 이 모양
    id => console.log( id + '님 환영합니다!'), // () , {} 생략된 모양
    () => {console.log('로그인 실패!')}
);
