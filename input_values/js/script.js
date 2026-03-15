// js에는 value를 기억하게 하는 아주 쉬운 방법이 있다.
// user의 이름을 기억하는 것처럼
// 하지만 모든것은 HTML에서 시작되어야 한다.

// 우선 HTML을 작성한 다음에 거기있는 element들을 끌고와야한다.


const loginForm = document.querySelector("#login-form");
// querySelector 사용시 #을 붙여서 id인걸 확실히 해주기
// getElementById는 ""큰따옴표안에 id만 쓰면됨.

// HTML의 input과 button을 끌어와야한다

// loginForm에 document에서 div를 끌어와서 대입했기 때문에
// loginForm은 HTML 내에있는 element라는 뜻이다.
// 그렇기 때문에 이제 이것을 document가 아니라 loginForm안에서 바로 찾을 수 있다.

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// 두가지 옵션이있다. const loginInput을 작성한후 document에서 찾는대신
// 위에 작성한 loginForm에서 검색하는것.

// 다른 방법으로는 document에서 바로 찾아오는것
const loginInput2 = document.querySelector("#login-form input")
const loginButton2 = document.querySelector("#login-form button")




function handleLoginBtnClick(){
// 이름이 길어지더라도 나한테 코드가 더 명확해지는 방향으로 이름을 지어야한다.
  console.dir(loginInput)
  // dir에 loginInput을 넣으면 loginInput의 내부를 볼수있다.
  // 내가 loginInput에 넣은 입력값이 어디들어가는지 확인할수있다.
  // value라는 property에 내가 친 값이 들어가있다.

  // 이제 input의 내용을 가져오려면 어떤 property를 찾아야하는지 알게됨.
  console.log("clicked")
  console.log("hello",loginInput.value)
  // 이런식으로 input의 value를 얻을수있다.

}
// loginButton에는 click이벤트가 연결되어야 한다.
loginButton.addEventListener("click",handleLoginBtnClick);