
let daysEl = document.getElementById("daysinput");
let hoursEl = document.getElementById("hoursinput");
let minutesEl = document.getElementById("minutesinput");
let secondsEl = document.getElementById("secondsinput");

function countdown() {
    const newyear = new Date('1 Jan 2023');
    const currenttime = new Date();

    const totalseconds = (newyear - currenttime) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    daysEl.innerHTML = timeformat(days);
    hoursEl.innerHTML = timeformat(hours);
    minutesEl.innerHTML = timeformat(minutes);
    secondsEl.innerHTML = timeformat(seconds);

}

function timeformat(time){
    return time < 10 ? (`0${time}`) : time;
}

countdown()

setInterval(countdown, 1000);