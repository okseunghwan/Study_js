// conditionals(조건문) true, false 확인
// 뭔가를 확인해야 할때 대부분 사용한다

// 예를들어 사용자가 로그인되어 있다면,뭔가 보여준다든지

// if 만약(if) 이것이 맞으면?
// 만약(if) 숫자가 20보다 크면?

// 나이스한 나이 계산기

const age = prompt("how old are you?")
// 나이를 직접 넣는 대신 , prompt라는 function사용
// prompt는 사용자에게 창을 띄울수 있게 해준다
// prompt는 두개의 argument를 받는다
// message: string, default


console.log(age)
// prompt에 답을 하지않으면, 자바스크립트는 멈춘다.
// 내가 아무것도 하지않으면 , console.log는 작동하지 않는다.
// 이게 더 이상 prompt function을 사용하지 않는 이유

// prompt를 사용하지 않는 이유= 아무 스타일,즉 css도 적용할수없다,
// 버튼도 못바꾼다. 매우 오래된방법, 예전에 유저한테 값을 물어보려고 사용했었음
// 요즘에는 대부분이 HTML,CSS로 만든 자신만의 창을 사용

// variable의 type을 보는방법 = type of
console.log(typeof age);

// 어떻게 string을 number로 바꿀수있을까?
// ex) "15" -->15

// parseint(기본 내장)라는 function을 써야함 ->string을 number로 변환

console.log(typeof "15", typeof parseInt("15"));
// string number

console.log(age, parseInt(age));
// string이면 숫자와 크기 비교를 할수없다,
// parseInt를 사용하면 어느것이 큰지 비교 가능
// 사용자에게 나이를 물어봤는데 , 사용자가 숫자가 아닌걸 입력했을 경우를 인지할 수 있다

//parseInt는 "lalalala" 같은 string을 처리하지 못한다.
// "123"같은것만 처리할 수 있다.
// 우리는 NaN인지 아닌지만 확인 하면 된다. 

// parseInt한 후의 age가 number형이 아니라면
// message 띄우기

const age2 = parseInt(prompt("how old are you2?"));
// function은 내부에서 외부로 실행된다
// 1.how old are you 프롬프트 실행되고, 사용자가 15라고 답을한다.
// 2. "15"라는 string값을 parseInt가 15라는 number로 바꾼다.
// 3. age에는 15(number)가 들어간다

// 만약 사용자가 "lalalala"같은 답을 한다면
// parseInt는 이걸 받아서, NaN이라고 알려준다
console.log(age2)



// 무언가가 NaN인지 팔별하는방법 isNaN()
console.log(isNaN(age2));
// isNaN을 사용하면 boolean으로 알려줌 true,false
// 하나의 argument(인자)를 주면 number인지 아닌지 알려줌

// isNaN은 boolean을 return한다 NaN이면 true 
// NaN이 아니면(number) false



if(isNaN(age2)){
  // condition은 boolean으로 판별 가능해야 한다.
  // true or false 두가지 옵션 뿐
  // condition ===true (조건이 참이면)
  console.log("please write a number")
}else{
  // condition ===false (조건이 거짓이면)
  console.log("thank you for writing your age.")
}





