const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minites = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minites}:${seconds}`;
}

// 바로 시계 호출
getClock();
// 그리고 1초마다 함수 실행
setInterval(getClock, 1000);
