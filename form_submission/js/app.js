// username의 유효성 검사
// username이 비어있어도 안되고, 너무긴 username이어도 안됨.



const loginInput = document.querySelector("#login-form input")
const loginButton = document.querySelector("#login-form button")


function handleLoginBtnClick2(){
  const username = loginInput.value;
  // 매번 loginInput.value를 적는대신 변수로 만들어준다.
  // username라는 변수에 loginInput의 value값을 넣는다.
  if(username ===""){
    alert("Please write your name")
    // 만약 username이 nothing이라면 (비어있다면) please write your name을 console.log한다.
    // 유저가 볼수있게 console.log를 alert로 바꾼다.
  }else if(username.length >15){
    // length는 string의 길이를 의미한다.
    alert("your name is too long.")
  }
  // 이방법도 옳은 방법이긴 하지만 최고의 방법이 아니다.
  // html에서 자체적으로 최대 글자수를 15로 조절할수도있다.
  // required maxlength = "15" ->input에 추가하면됨.
  // <!-- input의 유효성 검사를 작동시키기 위해서는 input은 form안에있어야한다. -->

}

function handleLoginBtnClick(){
  const username = loginInput.value;
  console.log(username);
  // 이상태에서 form에 값을 입력하고 버튼을누르면 콘솔에 나오지않고 웹이 자꾸 재시작된다.
  // 이렇게 되는 이유는 form이 submit 되고 있기 때문이다.

  // input안에 있는 button을 누르거나 type이 submit인 input을 클릭하면 submit된다 .
  // 이제 더이상 버튼을 크릭하는것에 신경 쓸 필요가 없다.
  // 입력후에 엔터를 눌러도 form은 submit된다.
  // form안에서 엔터를 누르고 input이 더 존재하지 않는다면 자동으로 submit되는 규칙.
  // 이제 우리는 브라우저가 새로고침하지않고 user정보를 저장하도록 만들어야한다.
  // 새로 고침 되도록 하지않기위해 form이 자동으로 submit되는것을 막아줘야함.

}


loginButton.addEventListener("click",handleLoginBtnClick);