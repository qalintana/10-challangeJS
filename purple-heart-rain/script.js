function createHeart() {
  const heart = document.createElement('div');

  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 5 + 's';

  heart.innerHTML = '❤';

  document.body.appendChild(heart);
}

setInterval(createHeart, 400);
