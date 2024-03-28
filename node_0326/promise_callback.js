// promise2.js +  callback4.js 

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

getStatus(id){
    return new Promise((resolve, reject)=>{
        if(id == 'admin'){
            resolve("관리자");
         } else {
             if(id == undefined){
                resolve(id);
             } else{
                reject("일반유저");
             }
         }
    })
}

}
var login = new Login();
login
    .checkUser("admin", "admin")
    .then(id => {
        console.log(id + '님 환영합니다.');
        return login.getStatus(id);
    })
    .then(status => {console.log(status + " 입니다.")})
    .catch(error => {console.log(error)});