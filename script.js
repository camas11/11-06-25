
  const trigger = document.querySelector('.nav__trigger');
  const dropdownItem = document.querySelector('.nav__item--dropdown');

  trigger.addEventListener('click', () => {
    dropdownItem.classList.toggle('open');
  });
  
  document.addEventListener('click', (e) => {
  if (!dropdownItem.contains(e.target) && !trigger.contains(e.target)) {
    dropdownItem.classList.remove('open');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    dropdownItem.classList.remove('open');
  }
});

const track = document.querySelector('.slider__track');
const slides = document.querySelectorAll('.slider__item');

let index = 0;

document.getElementById('next').addEventListener('click', () => {
  if (index < slides.length - 1) {
    index++;
    track.style.transform = `translateX(-${index * 100}%)`;
  }
});

document.getElementById('prev').addEventListener('click', () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(-${index * 100}%)`;
  }
});

function updateWorldClock() {
  const jakarta = new Date().toLocaleTimeString("id-ID", { timeZone: "Asia/Jakarta" });
  const london = new Date().toLocaleTimeString("en-GB", { timeZone: "Europe/London" });
  const newyork = new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" });

  document.querySelector("#jakarta .time").textContent = jakarta;
  document.querySelector("#london .time").textContent = london;
  document.querySelector("#newyork .time").textContent = newyork;
}

setInterval(updateWorldClock, 1000);
updateWorldClock(); // langsung tampil saat load