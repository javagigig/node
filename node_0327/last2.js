// 해당 코드를 promise로 변경하기(카페 참조)

function async1(param, callback) {
    console.log("첫 번째");
    setTimeout(function() {
        callback(param + 1);
    }, 1000);
}

function async2(param, callback) {
    console.log("두 번째");
    setTimeout(function() {
        callback(param + 2);
    }, 1000);
}

function async3(param, callback) {
    console.log("세 번째");
    setTimeout(function() {
        callback(param + 3);
    }, 1000);
}

async1(1, function(result1) {
    async2(result1, function(result2) {
        async3(result2, function(result3) {
            console.log("최종 결과:", result3);
        });
    });
});


// 위 코드 promise로 변경한 것
function async1(param) {
    return new Promise((resolve, reject) => {
        console.log("첫 번째");
        setTimeout(() => {
            resolve(param + 1);
        }, 1000);
    });
}

function async2(param) {
    return new Promise((resolve, reject) => {
        console.log("두 번째");
        setTimeout(() => {
            resolve(param + 2);
        }, 1000);
    });
}

function async3(param) {
    return new Promise((resolve, reject) => {
        console.log("세 번째");
        setTimeout(() => {
            resolve(param + 3);
        }, 1000);
    });
}

async1(1)
    .then(async2)
    .then(async3)
    .then(result => {
        console.log("최종 결과:", result);
    })
    .catch(error => {
        console.error("에러 발생:", error);
    });
