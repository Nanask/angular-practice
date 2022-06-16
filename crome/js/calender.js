// 오늘 날짜 표시
// 날짜를 누르면 해당 날짜의 todo 보여주기

let date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const calender = document.querySelector(".calender");
const yearMonth = document.querySelector(".yearMonth");
const days = document.getElementById("days");

let dates = [];

console.log("year", year);
console.log("month", month);
console.log("day", day);

document.addEventListener("DOMContentLoaded", function () {
  renderCalender();
});

// next 누르면 데이터 보여주기
function nextMonth() {
  date.setMonth(date.getMonth() + 1);
  renderCalender();
}

// prev 누르면 데이터 보여주기
function prevMonth() {
  date.setMonth(date.getMonth() - 1);
  renderCalender();
}

function renderCalender() {
  // next나 prev로 넘어갈때 초기화
  dates.length = 0;
  days.innerHTML = null;
  console.log("dates", dates);

  yearMonth.innerText = `${date.getFullYear()}년 ${date.getMonth() + 1}월`;

  // 이전달 마지막 날
  const startDay = new Date(date.getFullYear(), date.getMonth(), 0);
  console.log("startDay", startDay); // Tue May 31
  const prevDate = startDay.getDate();
  console.log("prevDate", prevDate); // 31 , 이전달의 마지막 날짜
  const prevDay = startDay.getDay();
  console.log("prevDay", prevDay); // 화요일 , 2 , 이전달의 마지막 요일
  2;

  for (let i = prevDate - prevDay; i <= prevDate; i++) {
    dates.push(i);
  }

  // 캘린더는 배열로 돌죠
  // 배열의 첫번째 값?
  // dates[0] = 29
  // dates[1] = 30
  // dates[2] = 31
  // dates[prevDay] = 31

  // 다음달 마지막 날
  const endDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  console.log("endDay", endDay); // Thu Jun 30
  const nextDate = endDay.getDate();
  console.log("nextDate", nextDate); // 30
  const nextDay = endDay.getDay();
  console.log("nextDay", nextDay); // 목요일 , 4

  for (let i = 1; i <= nextDate; i++) {
    dates.push(i);
  }

  for (let i = 1; i <= 6 - nextDay; i++) {
    dates.push(i);
  }

  const nextButton = document.querySelector(".next_month");
  nextButton.addEventListener("click", nextMonth);

  const prevButton = document.querySelector(".prev_month");
  prevButton.addEventListener("click", prevMonth);

  // 지난달
  console.log("dates[prevDate]", dates[prevDay]);

  // 다음달
  console.log("dates[nextDate]", dates[nextDay]);

  dates.forEach((day, i) => {
    // i = prevDay
    // i = dates ----- dates마지막
    // prevDay = 2 , i 의 0,1,2 에 클래스를 먹이면 되겠네
    // console.log("i <= prevDay", );
    //  if (i <= prevDay) {
    days.innerHTML += `<div class="day date" id=${day}>${day}</div>`;
    // 1. pDay 배열로 받기
    const pDay = document.querySelectorAll(".date");
    if (i <= prevDay) {
      // 1. 조건에 맞는 애를 class add시키기
      // pDay.classList.add("today");
      console.log("i", i);
      pDay[i].classList.add("today");
    }
  });
  // for(let i = 0 ; i <= dates.length ; i++) {
  //   dates[i] --- dates[dates.length - 1]
  // }

  // 현재의 년도와 월을 비교
  if (year == date.getFullYear() && month == date.getMonth()) {
    const thisDay = document.getElementById(day);
    console.log("thisDay", thisDay);
    thisDay.classList.add("today");
  }

  // 같은 달을 먼저 체크

  // dates에 있는 값 == days.innerHTML
  // class = "today" 표시
}
