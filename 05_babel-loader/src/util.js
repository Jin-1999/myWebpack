function hello() {
  console.log("hello, world!!!");
}

async function asHello() {
  let res = await timer();
  console.log("res", res);
}

function timer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(9999);
    }, 3000);
  });
}

export { hello, asHello };
