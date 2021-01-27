document.getElementById("start").addEventListener("click", startTimer);

let isTimeGoingOn = false;
let minutes;
let seconds;


function startTimer() {
  if (!isTimeGoingOn){
    document.getElementById("start").innerHTML = "Restart";
    minutes = 9;
    seconds = 59;
    isTimeGoingOn = true;
    document.getElementById("subtitle").innerHTML = "";
        
      setInterval(function () {
        document.getElementById("countdown").innerHTML = addZeroBefore(minutes) + ":" 
        + addZeroBefore(seconds);
        seconds--;
        if (seconds < 0){
          seconds = 59;
          minutes--;
        }
        if (minutes < 0){
          isTimeGoingOn = false;
          document.getElementById("countdown").innerHTML = "WAKE UP";
        }
    }, 1000);
  }
  else{
    minutes = 10;
    seconds = 0;
  }
}

function addZeroBefore(n) {
  return (n < 10 ? '0' : '') + n;
}
