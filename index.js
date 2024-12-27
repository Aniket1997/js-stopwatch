const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const display = document.getElementById('display');

let elapsedTime = 0;
let intervalId = null;
let isRunning = false;

// Format time as hh:mm:ss.ms
function formatTime(ms) {
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = Math.floor((ms % 1000) / 10);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
}

// Pause the stopwatch
pauseBtn.addEventListener('click', () => {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
});


// Initialize display
display.textContent = formatTime(elapsedTime);
function handleStart()
{
    if(isRunning) return;
    intervalId = setInterval(() => {
        elapsedTime += 100;
        isRunning = true;
        display.textContent = formatTime(elapsedTime);
    }, 100);
}

function handleReset()
{
    clearInterval(intervalId);
    elapsedTime = 0;
    isRunning = false;
    display.textContent = formatTime(elapsedTime);
}