document.getElementById("start").addEventListener("click", start);
let music = document.getElementById("alarmMusic");
let startBtn = document.getElementById("start");
let timer;
let interval;

function startTimer(duration, display) {
  clearInterval(interval);
  timer = duration;
  let minutes, seconds;
  interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
      music.play();
      clearInterval(interval);
    }
  }, 1000);
}

function start() {
  startBtn.innerHTML = "Restart";
  music.pause();
  clearInterval(interval);
  myTime = 10;
  display = document.querySelector('#countdown');
  startTimer(myTime, display);
};