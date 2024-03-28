function sum(x, y, callback){
    var num = x + y;
    callback(num);
}
function printing(num){
    console.log("두 수의 합: " + num);
}

sum(3, 5, printing);

// printing 함수가 없어도 익명함수로 돌아갈 수 있도록 하는 방법
function sum(x, y, callback){
    var num = x + y;
    callback(num);
}

// 익명 함수로 대체 : 말그대로 함수 이름이 없어서 익명함수
sum(3, 5, function(num){
    console.log("두 수의 합: " + num);
});

sum(3, 5, printing);

// 화살표 함수 funtion 부분 생략
sum(10, 20, (num) => {
    console.log("두 수의 합: " + num);
});


// 다른 방법
// function sum(x, y, callback){
//     var num = x + y;
//     callback(num);
// }
// function printing(num){
//     console.log("두 수의 합: " + num);
// }
// function printing2(num){
//     console.log("두 수를 더했더니 " + num + "가 됐다!");
// }

// sum(3, 5, printing);
// sum(8, 7, printing2);
