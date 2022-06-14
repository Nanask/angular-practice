const allDate = new Date();
const year = allDate.getFullYear();
const month = allDate.getMonth();
const date = allDate.getDate();
const calender = document.querySelector(".calender");
const yearMonth = document.querySelector(".yearMonth");
const days = document.querySelector(".days");

let dates = [];

console.log("year", year);
console.log("month", month);
console.log("date", date);

function nextMonth() {
  console.log("다음날");
}

function prevMonth() {
  console.log("이전달");
}

const nextButton = document.querySelector(".next_month");
nextButton.addEventListener("click", nextMonth);

const prevButton = document.querySelector(".prev_month");
prevButton.addEventListener("click", prevMonth);

const thisMonth = document.createElement("div");
yearMonth.innerText = `${year}년 ${month + 1}월`;
calender.appendChild(thisMonth);

// 이전달 마지막 날
const startDay = new Date(year, month, 0);
console.log("thisDay", startDay); // Tue May 31
const prevDate = startDay.getDate();
console.log("prevDate", prevDate); // 31 , 이전달의 마지막 날짜
const prevDay = startDay.getDay();
console.log("prevDay", prevDay); // 화요일 , 2 , 이전달의 마지막 요일

for (let i = prevDate - prevDay; i <= prevDate; i++) {
  dates.push(i);
}

// 다음달 마지막 날
const endDay = new Date(year, month + 1, 0);
console.log("endDay", endDay); // Thu Jun 30
const nextDate = endDay.getDate();
console.log("nextDate", nextDate); // 30
const nextDay = endDay.getDay();
console.log("nextDay", nextDay); // 수요일 , 4

for (let i = 1; i <= nextDate; i++) {
  dates.push(i);
}

console.log("dates", dates);

dates.forEach((day) => {
  days.innerHTML += `<div class="day">${day}</div>`;
});
