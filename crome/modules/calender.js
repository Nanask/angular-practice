// 오늘 날짜 표시
// 날짜를 누르면 해당 날짜의 todo 보여주기
import { paintTodos, dayTodo } from "./todo.js";
import { date, year, month, day } from "./date.js";

// let date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
const calender = document.querySelector(".calender");
const yearMonth = document.querySelector(".yearMonth");
const days = document.getElementById("days");

let dates = [];

// console.log("year", year);
// console.log("month", month);
// console.log("day", day);

document.addEventListener("DOMContentLoaded", function () {
  renderCalender();
});

function calenderClick(e) {
  const target = e.target;
  const targetParentNode = target.parentNode;
  console.log("parent", targetParentNode);
  const dayText = target.innerText;
  console.log("target", target);
  console.log("dayText", dayText);
  // paintTodos에 클릭한 년도,월,일자를 매개변수로 넘겨주기
  // 클릭한 년도,월,일자와 같은 투두리스트를 보여주기
  // paintTodos(date.getFullYear(), date.getMonth(), dayText);
  // paintTodos(date.getFullYear(), date.getMonth(), dayText);

  // 클릭된 값에 클래스를 주기전에
  // targetParentNode.classList.remove("clickDay");

  // 클릭한 day를 파란색으로 표시
  // targetParentNode.classList.add("clickDay");

  // 클래스에 clickDay가 있으면 지우고 새로운 버튼에 주기
  console.log("e.target.id", targetParentNode.id);
  console.log("click 되어있는 날짜", document.querySelector(".clickDay"));
  if (document.querySelector(".clickDay")) {
    targetParentNode.classList.remove("clickDay");
  } else {
    console.log("target else");
    targetParentNode.classList.add("clickDay");
  }

  // dates.filter((day) => {
  //   console.log("targetParentNode.id, day", targetParentNode, day);
  //   targetParentNode !== day ? targetParentNode.classList.add("clickDay") : targetParentNode.classList.remove("clickDay");
  // });

  dayTodo(date.getFullYear(), date.getMonth(), dayText);
}

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

  // 6월 기준 prevDay 2
  // +
  // 6월 기준 nextDate 30
  // 32

  // 6월 기준 첫번째 주 29일 ~ 6월 마지막 주 30일 = 33일
  // [32]

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
    //  if (i <= prevDay) {s

    // 1. pDay 배열로 받기
    // const pDay = document.querySelectorAll(".date");
    if (i <= prevDay || nextDate + prevDay < i) {
      days.innerHTML += `<div class="day date other" id=${day}><span>${day}<span></div>`;
      // 1. 조건에 맞는 애를 class add시키기
      // pDay.classList.add("today");
      // console.log("i", i);
      // pDay[i].classList.add("today");
    } else {
      days.innerHTML += `<div class="day date" id=${day}><span>${day}<span></div>`;
    }
  });
  // for(let i = 0 ; i <= dates.length ; i++) {
  //   dates[i] --- dates[dates.length - 1]
  // }

  //id값을 찾아야함
  //id가 속해있는 부모요소를 찾았어
  //그 부모요소에 이벤트를 줬어요

  // const dayDateId = dayId.dataset.id;
  // console.log("dayDateId", dayDateId);
  // dayId.addEventListener("click", (e) => calenderClick(e));

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

days.addEventListener("click", (e) => calenderClick(e));
