// 특정 시간만큼 기다렸다가 실행되는 함수
//setTimeout();

function printing(){
    console.log("test");
}
setTimeout(printing, 3000);

setTimeout(()=>{
    console.log("test2");
}, 3000);
// 화살표 함수: ()=>{}

function sample1(callback){
    // setTimeout(()=>{}, 3000);
    // 비동기 통신은 코드를 기다려주지 않음. 첫번째가 먼저 출력되는 이유
    setTimeout(()=>{console.log("3초 뒤!!");}, 3000);
    console.log("첫번째");
    callback(sample1);
}
function sample2(){
    console.log("두번째");
}
function sample3(){
    console.log("세번째");
}

sample1();



// ====================================

// PS C:\Users\tj-bu-706-06\Desktop\node> node .\sample3.js

// node .\sample3.js
// node .\sample4.js


// 익명 함수
// 화살표 함수
// 콜백함수
// 무한루프 빠져나오기 : ctrl + c