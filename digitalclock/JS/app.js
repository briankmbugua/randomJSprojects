function updateTime(){
    let dateInfo = new Date();
    let hr;
    let _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes();
    let sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds();
    ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";
    //replace 0 with 12 at midnight

    if (dateInfo.getHours == 0) {
        hr = 12;
    } else if (dateInfo.getHours() > 12) {
        hr = dateInfo.getHours() - 12;
    } else {
        hr = dateInfo.getHours();
    }

    //current time
    let currentTime = `${hr} : ${_min} : ${sec}`;

    //print time
    document.getElementsByClassName("hms")[0].innerHTML = currentTime;
    document.getElementsByClassName("ampm")[0].innerHTML = ampm;

    // date

    let dow = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Friday",
            "Saturday"
        ],

        month = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        day = dateInfo.getDate();
    //store date

    let currentDate = `${dow[dateInfo.getDay()]} , ${month[dateInfo.getMonth()]} ${day}`;
    document.getElementsByClassName("date")[0].innerHTML = currentDate;
};
//print time and date once, then update them every second

let timeInterval = setInterval(function () {
    updateTime();
}, 1000)
let start = document.getElementsByClassName("start")[0].addEventListener("click", () => {
    setInterval(function () {
        updateTime();
    }, 1000)
})


let stop = document.getElementsByClassName("stop")[0].addEventListener("click", () => {

    clearInterval(timeInterval);
    console.log("button clicked");
    let b = new Date().getSeconds();
})