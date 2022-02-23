const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");
// 반복되는 string은 대문자로 명시해놓는다. 실수를 줄일 수 있음!
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // 브라우저의 기본 동작을 막아줌(여기서는 새로고침)
  event.preventDefault();
  // 다시 form 숨기기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // username에 이름 저장해주기
  const username = loginInput.value;
  // localStorage에 저장, 새로고침하면 없어지니까 저장해놓기
  localStorage.setItem(USERNAME_KEY, username);
  // greeting.innerText = 'Hello ' + username;
  // paintGreetings 호출하기
  paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

// 함수이름 뒤에 () 붙이면 바로 실행 >> 자동으로 바로 실행!
// addEventListener를 활용할 땐 func의 이름만 지정! 직접실행 X!!!

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

//localStorage는 브라우저가 가지고 있는 작은 DB같은 API
// savedUsername은 null 아니면 채은인 상태
const savedUsername = localStorage.getItem(USERNAME_KEY);

// localStorage에 없는 값을 받아오면 'null'값이 뜸
if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
