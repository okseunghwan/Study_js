// array 데이터를 정리하는 방법
// 가장 기본적인 데이터 구조 array

const mon ="mon";
const tue ="tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";
// array가 없는 세상

const daysOfWeek = mon+tue+wed+thu+fri+sat+sun
console.log(daysOfWeek)
// 우리는 앱안에서 한 주의 요일을 접근하고 싶어한다
// 만약 내가 일주일의 첫번째 요일을 넘겨줘 라고해도
// 이런 상태에서는 첫번째 요일에 접근할수없다.
// 그래서 무언가를 나열하기 위한 더 좋은 방법이 필요하다
// 데이터타입들을 그룹으로 묶기 위한 그게 array임

const dayOfWeek = [mon , tue , wed , thu , fri , sat];
// 이렇게 묶으면 string대신 array가 된다.

const nonsense = [1, 2, "hello", false, null, true, undefined]

console.log(dayOfWeek,nonsense)

// 우리는 말 그대로 리스트를 만든것이다.데이터로 이뤄진 리스트
// 숫자를 넣을수도있고, variable을 넣을수도 있다.
// 숫자, 스트링, boolean, variable

// array의 규칙
// 1.시작과 끝에 대괄호[]를 사용한다
// 2.array 각각의 항목은 쉼표로 분리되어야 한다.

// 만약 누군가 array에서 다섯번째 element를 알려주세요 라고 하면
// Get Item from Array
console.log(dayOfWeek[4]);
// 이런식으로 variable의 이름과 == array의 이름.
// 대괄호[]안에 원하는 숫자를 넣어주기만 하면 된다.

// 우리가 만약 to do list를 만든다고 치면 
// 그 할일들은 array에 저장하면 된다.

// array로 많은 것을 할수있다.
// 1. array에서 항목을 받아오는 것
// 2.원한다면 array에 하나 더 추가할 수도 있다.
console.log(dayOfWeek)
// Add one more day to the array
dayOfWeek.push("sun");
console.log(dayOfWeek)

// array의 목적은 하나의 variable안에 데이터의 list를 가지는것

const buyList = ["apple","banana","pizza","tomato"]
buyList.push("chicken")

console.log(buyList)
// array는 가장 기초적이고 필수적인 데이터 구조
// 값을 리스트로 정리하는것