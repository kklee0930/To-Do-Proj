const time = document.querySelector("#jsClock");

function getTime() {
  const clock = new Date();
  const year = clock.getFullYear();
  const month = String(clock.getMonth() + 1).padStart(2, "0");
  const date = String(clock.getDate()).padStart(2, "0");
  let day = clock.getDay();
  const hour = String(clock.getHours()).padStart(2, "0");
  const min = String(clock.getMinutes()).padStart(2, "0");
  const sec = String(clock.getSeconds()).padStart(2, "0");
  printTime(year, month, date, day, hour, min, sec);
}

function dayConverter(day) {
  if (day === 1) {
    day = "월";
    return day;
  } else if (day === 2) {
    day = "화";
    return day;
  } else if (day === 3) {
    day = "수";
    return day;
  } else if (day === 4) {
    day = "목";
    return day;
  } else if (day === 5) {
    day = "금";
    return day;
  } else if (day === 6) {
    day = "토";
    return day;
  } else if (day === 0) {
    day = "일";
    return day;
  }
}

function printTime(year, month, date, day, hour, min, sec) {
  time.innerText = `${year}년 ${month}월 ${date}일 ${dayConverter(
    day
  )}요일 ${hour}:${min}:${sec}`;
}

getTime();
setInterval(getTime, 1000);
