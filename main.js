

const getSetTime=document.getElementById("Input__time");
const getButton= document.getElementById("btn__getTime");
const getTimeCurren=document.getElementById("time_curren");

function startTimer(duration, display) {
    console.log(duration,display)
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
getButton.onclick = function () {
    var fiveMinutes = parseInt(getSetTime.value),

    fiveMinutes =fiveMinutes*60;
    
    getTimeCurren.textContent='';
    display = getTimeCurren;

    
    startTimer(fiveMinutes, display);

};