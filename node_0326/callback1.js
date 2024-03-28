function sum(num1, num2, callback){
    var nam3 = num1 + num2;
    callback(num3); 
}

// sum함수를 호출하면 '두 수의 합은 00 입니다.'
function print(num){
    console.log("두 수의 합은 " + num + "입니다.");
}
sum(1, 10, print);    




