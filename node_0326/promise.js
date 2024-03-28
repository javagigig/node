var obj = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('로그인 성공!');
        //reject(new Error('에러!'));
    }, 2000);
});

// then 부분은 resolve 성공시 실행되는 부분
// 2초 뒤에 '로그인 성공' 출력됨
obj
   .then(value => {console.log(value)})
   .catch(error => {console.log(error)})
   .finally(()=>{console.log("무조건 실행")});

   // 성공했을 때 resolve 실행
   // 실패했을 때 reject 실행