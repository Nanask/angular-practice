- 6/13번 문제점

* todo를 추가할 때 id의 값이 1씩 증가되도록 설정했는데, todo를 삭제 후 새로 todo를 추가하면 id가 0부터 시작하는 현상 발생

- 6/13 문제점 해결

* id값을 ++로 시작하는 것이 아니라 현재 보여지는 todoList의 배열의 마지막 값에 1씩 증가되는 방법으로 바꿔서 해결

- 6/14 문제점

* CUD 를 실행시킬 함수에 todoId를 매개변수로 보내 실행시킬려고 했을 때 클릭한 todo의 Id와 매개변수로 받은 todoId의 값이 일치하지 않는 현상

- 6/14 문제점 해결

* == / ===의 차이
* id값을 number로 지정했기 때문에 클릭한 값과 일치하지 않는 현상 발생
* == / ===에 대해 비교했으니 정리

- 6/15~16 캘린더 문제점

* 달력의 기본 이해 부족

- 6/16 캘린더 오늘 날짜 표시 문제

* day의 배열을 돌려서 day에 id를 추가
* 지난달과 다음달을 표기하는 날은 class를 따로 줘서 다르게 표시

- 6/18 todoId 적용값 문제

* 기존에 id값을 todoList의 배열 마지막 값이 1씩 추가되는 방법으로 적용했는데 삭제하거나 업데이트를 할때도 local에 적용이 되서 문제가 발생함, 그래서 todoList의 마지막 배열값의 요소를 추출해서 그 값에 +1을 적용하는 방법으로 해결

- 6/21~22 js파일끼리 연결

* ES6 문법을 이용하여 html에 script에 연결해주고 import와 export를 이용해서 사용할 수 있도록 연결

- 6/21~22 해결

* 달력을 클릭했을 때 기본 todo배열을 filter로 처리해서 날짜가 일치하는 값을 리턴시켜서 투두리스트를 그리는 곳에 매개변수로 보내고 그 매개변수로 반복문을 실행시켜 일치하는 리스트를 보여주는 것으로 해결

- 6/23 문제점

* 달력을 클릭했을 때 리스트는 잘 나오지만 CUD, 체크를 실행 후 기본배열이 전부 보여지는 현상

- 6/27 클릭한 day 표시하기

- 6/28 코드 변경도중 입력한 값이 undefined 로 나오는 현상

* 배열을 매개변수로 받는 과정에서 object로 받는 방식이 잘못된것으로 판단, 배열안에 배열을 추가하는 변수를 let으로 변경하고 그 값을 매개변수로 전달해서 받는 방식으로 변경해서 해결

- 6/29 캘린더 날짜의 today가 이전 달의 29일로 찍히는 현상

* 각 날짜의 id가 같아서 생긴 문제, 이전달과 다음달의 날짜를 나타내는 곳에는 id에 other를 추가하여 id가 같지 않게 문제 해결, id는 중복되지 않아야 하기 때문!

- 6/30 캘린더 날짜에 일치하는 todoList에서 오류

* newTodo라는 배열을 새로 만드는 것이 아니라 todoObj에 display 요소를 추가하여 boolen으로 분리

- clickDay 에서 false , true값으로 변경이 안됨
