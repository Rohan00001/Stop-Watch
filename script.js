let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

function updateDisplay() {
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  document.getElementById('display').textContent = `${h}:${m}:${s}`;
}

function start() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
  }
}

function stop() {
  running = false;
  clearInterval(timer);
}

function reset() {
  stop();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}