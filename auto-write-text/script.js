const text = 'My viewers on home are the best ❤';

let index = 0;

function writeText() {
  document.body.innerHTML = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 0;
  }
}

setInterval(writeText, 100);

console.log('ola'.charAt(1));
