// 1,2,3 순차적으로 1초후 실행
// setTimeout(()=>{console.log(1)}, 1000);
// setTimeout(()=>{console.log(2)}, 1000);
// setTimeout(()=>{console.log(3)}, 1000);

// setTimeout(() => {console.log(1); setTimeout(() => {console.log(2); setTimeout(() => {console.log(3);}, 1000);}, 1000);}, 1000);

// callback, promise, async-await
// function timer(){
//     // callback 함수 사용시
//     setTimeout(() => {
//         console.log(1);
//         setTimeout(() => {
//             console.log(2);
//             setTimeout(() => {
//                 console.log(3);
//             }, 1000)
//         }, 1000);
//     }, 1000);
// }

function timer(num){
    return new Promise((resolve) => {
        setTimeout(() => {resolve(num)}, 1000);
    })
}
// 순차적으로 각 1초 후 1,2,3 출력
timer(1)
    .then(num => {
        console.log(num);
        return timer(2);
    })
    .then(num => {
        console.log(num);
        return timer(3);
    })
    .then(num => {
        console.log(num);
    });