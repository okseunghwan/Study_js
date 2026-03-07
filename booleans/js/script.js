// boolean -> true or false
// 컴퓨터는 0과 1을 사용한다
// 0->꺼져있음 1->켜져있음

const amIFat = true;
// true는 따옴표를 붙이지않는다 "true"가 되는순간 string
console.log(amIFat)

// 사용자가 로그인 했는가? true or false

// null -> '아무것도 없음' 
// null은 변수에 아무것도 없다는것을 뜻한다
// null != false 
// const amIFat = null;
// null은 비어있는게 아니라 아무것도 없는상태로 채워진것임
// 
let something;
const some = null;
// variable을 만들고는 있는데, 값을 주고 있지는 않다.->undefined

// something 이라는 variable이 존재하는데,값이 주어지지 않았다
// some은 존재하고 값이 주어졌는데 그값은 "비어있음"이다

// null은 절대 자연적으로 발생하지 않는다
// null은 우리가 variable안에 어떤것이 없다는것을 확실하기위해 쓴다.
// "비어있어요"를 의도적으로 표현함