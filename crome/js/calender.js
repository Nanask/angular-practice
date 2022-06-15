// 오늘 날짜 표시
// 날짜를 누르면 해당 날짜의 todo 보여주기

let today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();
const calender = document.querySelector(".calender");
const yearMonth = document.querySelector(".yearMonth");
const days = document.getElementById("days");

let dates = [];

// console.log("today", today);
console.log("year", year);
console.log("month", month);
console.log("date", date);

document.addEventListener("DOMContentLoaded", function () {
  renderCalender();
});

// next 누르면 데이터 보여주기
function nextMonth() {
  today.setMonth(today.getMonth() + 1);
  renderCalender();
}

// prev 누르면 데이터 보여주기
function prevMonth() {
  today.setMonth(today.getMonth() - 1);
  renderCalender();
}

function renderCalender() {
  // next나 prev로 넘어갈때 초기화
  dates.length = 0;
  days.innerHTML = null;
  console.log("dates", dates);

  yearMonth.innerText = `${today.getFullYear()}년 ${today.getMonth() + 1}월`;
  console.log("today", today);

  // 이전달 마지막 날
  const startDay = new Date(today.getFullYear(), today.getMonth(), 0);
  console.log("startDay", startDay); // Tue May 31
  const prevDate = startDay.getDate();
  console.log("prevDate", prevDate); // 31 , 이전달의 마지막 날짜
  const prevDay = startDay.getDay();
  console.log("prevDay", prevDay); // 화요일 , 2 , 이전달의 마지막 요일

  // 이전달의 날짜와 현재 날짜 분리해서 concat으로 합치기
  for (let i = prevDate - prevDay; i <= prevDate; i++) {
    dates.push(i);
  }

  // 다음달 마지막 날
  const endDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
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

  dates.forEach((day) => {
    days.innerHTML += `<div class="day date">${day}</div>`;
  });
}
