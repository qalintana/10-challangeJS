const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  document.body.style.background = randomBg();
});

const changeBg = () => {
  document.body.style.background = randomBg();
};

const getNumberRandom = () => Math.random() * 255;

function randomBg() {
  return `rgba(${getNumberRandom()}, ${getNumberRandom()}, ${getNumberRandom()}, 0.2)`;
}
