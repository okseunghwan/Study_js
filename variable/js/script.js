

// 1 ->첫번째 데이터타입은 숫자다 
// integer ->full number(정수)

// 1.5 -> float

// 두번째 데이터 타입은 문자다
// 만약 그냥 hello라고 쓴다면,정의되어 있지 않다고 뜬다
// "hello" 이게 text다
// "hello"+"my name is ok seunghwan"
// text의 정식명칭은 string이다
// string ->처음부터 끝까지 모두 글자로 이뤄져 있다는 뜻


console.log(5335353);
// 콘솔에 괄호안의 값을 출력한다.
console.log("hahaha")


console.log(5+2)
console.log(5*2)
console.log(5/2)
// 프로그래머가 되고싶다면 게을러지는 법을 배워야한다.
// 코드를 적게쓰는게 에러도 적고 시간도 덜 걸린다
// 위의 코드를 수정하려면 6번이나 고쳐야한다.

// variable(변수)

// js뿐만아니라 모든 프로그래밍 언어에서 variable은 
// 값을 저장하거나 유지하는 역할을 한다

// variable은 만들기 위해 가장먼저 const라는것을 사용한다
// 이것은 constant(상수)라는걸 의미한다
// 바뀌지 않는 값 - 계속 유지됨 
const a = 5;
const b = 2;
console.log(a+b)
console.log(a*b)
console.log(a/b)
// 이렇게 만들면 2번만수정하면 모든값을 바꿀수있다.
// variable의 이름은 a이고 , 이건 5와 같다
// a가 5라는 값을 가지고 있다
// 이게 왜 중요할까
// 위에있는 5의 자리에 a를 대신해서 쓸수있다.
// 2는 숫자이고 "2"는 텍스트다

const myName = "okSeungHwan";
// variable은 공백이 있을수 없다
// js의 세상에서 단어에 공백이 필요하다면
// 다음 단어의 첫 문자를 대문자로 쓴다
// const veryLongVariableName = 0;
// 파이썬-> very_long_variable_name = 0

console.log("hello "+myName);
