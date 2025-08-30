let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

function updateDisplay() {
  const h = String(hours);
  const m = String(minutes);
  const s = String(seconds);
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