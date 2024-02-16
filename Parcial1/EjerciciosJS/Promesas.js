// Promesas paralelas
function promesa(){
  return new Promise((resolve, reject) => 
  setTimeout(()=> {
    reject('ok'), 2000
  }))
}

Promise.then()

Promise.all([p1(), p2(), p3()])
    .then((values) => {
    console.log(values);
  });

Promise.all([])
Promise.allSettled([])
Promise.any([])
Promise.race([])