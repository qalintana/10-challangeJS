const imgs = document.getElementById('imgs');
const imgEls = document.querySelectorAll('#imgs img');

let index = 0;

function run() {
  index++;

  if (index > imgEls.length) {
    index = 0;
  }

  imgs.style.transform = `translateX(${-index * 500}px)`;

  setTimeout(run, 2000);
}

run();
