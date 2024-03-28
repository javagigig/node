
// onSuccess : callback 함수 앞에 on 붙임 -> '함수'인 것을 알 수 있음
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

function printSuccess(id){
    console.log(id +'님 환영합니다!');
}
function printFail(){
    console.log('로그인 실패!');
}
login('test', '1234', printSuccess, printFail);


 // 콜백지옥, 프로미스