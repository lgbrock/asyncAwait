/*
// L1
console.log('🥪 Synchronous 1');

// L2
setTimeout(_ => console.log(`🍅 Timeout 2`), 0);

// L3
Promise.resolve().then(_ => console.log('🍍 Promise 3'));

// L4
console.log('🥪 Synchronous 4');



// Consume Promise
import fetch from 'node-fetch';

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

promise
  .then(res => res.json())
  .then(todo => {
    throw new Error('uh oh');
    return todo;
  })
  .then(todo => console.log('😛', todo.title))
  .catch(err => console.error('😭', err));

console.log('🥪 Synchronous');



// Create promises
const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

const codeBlocker = () => {
    // Blocking
    // let i = 0;
    // while(i < 1000000000) { i++;}
    // return '🐷 billion loops done';

    // Async blocking
    // return new Promise((resolve, reject) => {

    //     let i = 0;
    //     while(i < 1000000000) { i++;}
    //     resolve('🐷 billion loops done');
    // })

    // Non-blocking

    return Promise.resolve().then(v =>  {
        let i = 0;
        while(i < 1000000000) { i++; }
        return '🐷 billion loops done';
    })
}

log('🥪 Synchronous 1');

codeBlocker().then(log)

log('🥪 Synchronous 2');
*/



// Error handling
const badSmoothie = async() => {
    try {

        const a = getFruit('pineapple')
        const b = getFruit('strawberry');
        const smoothie = await Promise.all([a, b])

        throw 'broken!'

        return smoothie;

    } catch(err) {
        console.log(err)
        // return `😬 We are going to be fine...`
        throw `💩 It's broken!`
    }
}


// Async await pro tips
// Basic
export const getFruit = async name => {
    const fruits = {
      pineapple: '🍍',
      peach: '🍑',
      strawberry: '🍓'
    };
  
    return fruits[name];
  };
  
  getFruit('peach').then(console.log);
  
  // Async + Await
export const makeSmoothie = async () => {
    const a = await getFruit('pineapple');
    const b = await getFruit('strawberry');
  
    return [a, b];
  };
  
const makeSmoothie2 = () => {
    let a;
    return getFruit('pineapple')
      .then(v => {
        a = v;
        return getFruit('strawberry');
      })
      .then(v => [a, v]);
  };



  // Sugar
  const fruits = ['peach', 'pineapple', 'strawberry'];

const fruitLoop = async () => {
  for (const f of fruits) {
    const emoji = await getFruit(f);
    log(emoji);
  }
};

const fruitInspection = async () => {
  if ((await getFruit('peach')) === '🍑') {
    console.log('looks peachy!');
  }
};

import fetch from 'node-fetch';

const getTodo = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  const { title, userId, body } = await res.json();

  console.log(title, userId, body);
};