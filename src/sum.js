function sum(a, b) {
  return a + b;
}

function throws() {
  throw new Error('An error has ocurred');
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve.bind(null, 3), ms);
  });
}

export { sum, throws, delay };
