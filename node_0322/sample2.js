function sample1(name, callback){
    console.log("이름은 " + name + "입니다.");   
    callback("인천"); 
}

//function sample2(address){
//   console.log("주소는 " + address + "입니다."); 
// }
// 위의 코드가 아래로 들어감
sample1("홍길동", function(address){
    console.log("주소는 " + address + "입니다.");
});
