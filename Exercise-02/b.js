const api = (result) => {
    return new Promise((resolve, reject) => {
        console.log('result: ', result);
        resolve();
    })
}
const api2 = (result2) => {
    return new Promise((resolve, reject) => {
        console.log('result2: ', result2);
        resolve();
    })
}
const api3 = (result3) => {
    return new Promise((resolve, reject) => {
        console.log('result3: ', result3);
        resolve();
    })
}

api(1)
    .then(() => api2(2)
                    .then(() => api3(3)));