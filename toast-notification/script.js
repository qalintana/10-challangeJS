const btn = document.getElementById('btn');
const container = document.getElementById('container');

let count = 0;
btn.addEventListener('click', () => {
  createNotification(++count);
});

function createNotification(count) {
  const notif = document.createElement('div');
  notif.classList.toggle('toast');

  notif.innerText = 'This challange is crazy ' + count;

  container.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}
