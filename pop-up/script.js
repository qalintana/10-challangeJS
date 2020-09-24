const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

const popupContainer = document.getElementById('popup-container');

openBtn.addEventListener('click', function (e) {
  popupContainer.classList.add('active');
});

closeBtn.addEventListener('click', function (e) {
  popupContainer.classList.remove('active');
});
