// const url = "https://jsonplaceholder.typicode.com/todos";
// const requestURl = "https://jsonplaceholder.typicode.com/users";

console.log("Preparing data...");
// setTimeout(() => {
//   console.log('Request...')
//   const responceData = {
//     server: 'aws',
//     port: 8081,
//     status: 'working',
//     modified: false
//   }
//   setTimeout(() => {
//     responceData.modified = true
//     console.log('Data received ...,', responceData);
//   },2000)
// }, 2000)

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Request...')
//     const responceData = {
//       server: 'aws',
//       port: 8081,
//       status: 'working',
//       modified: false
//     }
//     resolve(responceData)
//   }, 2000)
// })
// promise.then((data) => {
//   setTimeout(() => {
//       data.modified = true
//       console.log('Data received ...,', data);
//     },2000)
// }).catch((error) => console.log('Error'))

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
};

// delay(3000).then(() => console.log('3 секунды'));
// Promise.all([delay(3000), delay(5000)]).then()

const url = "https://jsonplaceholder.typicode.com/todos";

// const fetchData = () => {
//   return delay(2000)
//   .then(() => fetch(url))
//   .then((data) => data.json())
// }
// fetchData().then((data) => console.log(data))

async function response(url) {
  
  try {
    await delay(2000)
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    throw new Error(error.status);
  }
}

response(url).then(data => console.log(data));


const requestURl = "https://jsonplaceholder.typicode.com/users"

const obj = {
  name: 'Oleg'
}

const getUsers = (method, url) => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(obj)
  })
    .then(r=> r.json())
}

getUsers("POST", requestURl).then((data) => console.log(data))




