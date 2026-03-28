const quotes = [
  {
    quote:"노가다 원양어선 필요한건 다 할거야. 내 가치를 네가 정하지마 . 내 인생 이제 시작이고 난 원하는거 다 이루면서 살거야",
    author:"이태원클라쓰",
  },
    {
    quote:"저희 아버지는 사람은 소신있게 살아야 된다고 가르쳐주셨습니다.",
    author:"이태원클라쓰",
  },
    {
    quote:"시간은 누구에게나 공평하게 흐른다.하지만 그와 나의 시간은 그 농도가 너무나도 달랐다",
    author:"이태원클라쓰",
  },
    {
    quote:"지금 한번 ,지금만 한번 ,마지막으로 한번 ,또 또 한번, 순간은편하겠지 근데말이야 그 한번들로 사람은 변하는 거야",
    author:"이태원클라쓰",
  },
    {
    quote:"더딜진 몰라도 저는 단계를 밟고 있고 그 끝에 당신이 있습니다.",
    author:"이태원클라쓰",
  },
    {
    quote:"노가다 원양어선 필요한건 다 할거야. 내 가치를 네가 정하지마 . 내 인생 이제 시작이고 난 원하는거 다 이루면서 살거야",
    author:"이태원클라쓰",
  },
    {
    quote:"시간은 누구에게나 공평하게 흐른다.하지만 그와 나의 시간은 그 농도가 너무나도 달랐다",
    author:"이태원클라쓰",
  },
    {
    quote:"저희 아버지는 사람은 소신있게 살아야 된다고 가르쳐주셨습니다.",
    author:"이태원클라쓰",
  },
    {
    quote:"지금 한번 ,지금만 한번 ,마지막으로 한번 ,또 또 한번, 순간은편하겠지 근데말이야 그 한번들로 사람은 변하는 거야",
    author:"이태원클라쓰",
  },
    {
    quote:"저희 아버지는 사람은 소신있게 살아야 된다고 가르쳐주셨습니다.",
    author:"이태원클라쓰",
  },
  
]

// 명언 10개 들어있는 Array 준비
// object형태로 quote에는 명언text, author에도 text로 내용
// div랑 span들 가져오기

// 명언 작가 부터 가져오기
const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
//새로고침해서 콘솔에 오류없는지 확인.

console.log(quotes[0])
//array 0번째 있는 명언 콘솔에 출력
//0-9까지의 숫자를 주는 function이 필요함. 명언10개(0~9)

// Math module사용

// Math.random()
//random()은 0에서 1사이의 랜덤한 숫자 제공 10을곱하면 0에서 10사이의 숫자 얻을수있음

// 필요없는 소수점숫자 없애기 3가지 function사용가능

// 1.round() 반올림= math.round(1.1)-> 1 =소수를 정수로 반환 1.4까지는 1 1.5부터는2(반올림)

// 2.ceil() 올림=math.ceil(1.1)->2 소수를 천장까지 높여준다고 보면됨 1.01도 2로 반환

// 3.floor() 내림= math.floor(1.9)->1 소수를 마루(바닥)까지 내려줌 1.99도 1로 반환

// Math.floor(Math.random()*10)


// console.log(quotes[Math.floor(Math.random()*10)])
//0~10까지 랜덤숫자 출력하는 함수식을 quotes array의 번호를 대입하는곳에 넣는다.

// 이렇게해도 가능하지만 array에 뭔가 추가될때마다 숫자를 세야한다.

// array에 length를 사용하면 array의 길이를 반환해준다
// 10을 곱하는 대신 length를 곱해준다

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;