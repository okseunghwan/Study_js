// let 과 const의 차이
// const는 constant(상수)라는 것이고, constant는 값이 바뀔수 없다.

// 만약 변수값을 변경할 필요가 없다면 const를 쓴다
// 하지만 값을 업데이트 해야한다면 let을 사용한다
let myName = "okseunghwan";
console.log(myName)
myName = "nicolas";
// let은 새로운것을 생성할때만 사용한다
// 한번 myName이 생기면 업데이트할때
// let을 사용하지않고 myName만 쓰면된다.
console.log("your new name is "+ myName);

// 코드는 항상 top to bottom




const a = 5;
const b = 2;

let yourName = "james";
// 이 3개의 코드만봐도 바뀌지않는 variable이 2개있고
// 바뀔수도 있는 variable이 있다는 것을 알수있다.
// 이 코드륵 읽고 이규칙에 대해 안다면, 
// 코드가 나중에 뭘할지 알수있다

// ex)이 프로그램에서 yourName이 업데이트 될수 있구나
// 하지만 5나 2는 업데이트 될 일이 없구나


// const를 기본적으로 사용하고
// 만약 variable을 업데이트 하고 싶다면 let을 쓴다
// 모든 변수를 업데이트 해야하는 경우는 잘 없다.
// 프로그램에서 몇몇 중요한 부분만 업데이트
// 기본적으로 const 필요할때만 let

// 과거에는 const와 let은없고 var만 있었다.
// var는 어디서든 업데이트가능
// 문제점 :언어를 통한 보호를 받지못함
// 실수로 a의 값을 업데이트해도,언어가 말해주지않음.
// var는 아무런 규칙이없다.
// let과 const로 변수를 만들어야 코드에서 의미를 바로 찾을수있다.
// 만약 모두 var를 사용한다면, 우리는 코드가 밑에서 뭘할지 알수가 없다.


// 규칙 기본적으로 const를 쓰고 필요할 떄만 let을 쓰되, var는 쓰지 말것.
