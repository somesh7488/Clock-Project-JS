let hour = document.getElementById('hours');
let minute = document.getElementById('minutes');
let second = document.getElementById('seconds');
let ampm1 = document.getElementById('ampm');


function updateClock() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  let ampm = "AM";

  if (hours >= 12) {

    ampm = "PM";
  }


  hour.innerText = hours;
  minute.innerText = minutes;
  second.innerText = seconds;
  ampm1.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000)
}



updateClock();