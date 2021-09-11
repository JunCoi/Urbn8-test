const api = (result) => {
  return new Promise((resolve, reject) => {
    console.log('result: ', result);
    resolve();
  });
};
const api2 = (result2) => {
  return new Promise((resolve, reject) => {
    console.log('result2: ', result2);
    resolve();
  });
};
const api3 = (result3) => {
  return new Promise((resolve, reject) => {
    console.log('result3: ', result3);
    resolve();
  });
};

const final = async () => {
  await api(1);
  await api2(2);
  await api3(3);
};

final();