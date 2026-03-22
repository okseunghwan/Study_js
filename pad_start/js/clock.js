

const clock = document.querySelector("#clock")

new Date().getHours()  //->19 string이 아닌 number임
String(new Date().getHours()) // "19" string으로 바뀜

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  //string으로 감싸서 변수안에 들어가는 number를 string으로 만들어준다
  //padStart로 string이 가져야하는 길이를 2로 만들어주고 길이가 2가아니면 앞쪽에 0을추가
  

  clock.innerText = `${hours}:${minutes}:${seconds}`;

}



getClock();

setInterval(getClock, 1000);

//우리가 해야할건 string을 문자 두개로 채우는것
// 1,2,3 이 아니라 01,02,03으로 string이 항상 2개의 문자를 가지도록 해야함.

// 이건 padStart()라는 function으로 이미 만들어져있음.
// padStart는 string에 쓸수있는 function이다.

// "1".padStart(2,"0") -> "이렇게생긴 string"을 2자리 수로 만들고 2자리가 아니라면 앞에 0을 추가
// "1".padStart(2,"0") -> "01"
//string에 padStart를 써서 padding을 추가해라 string의 시작부분에
// 그렇게해서 이 문자열의 길이가 2는 되어야한다.
// 길이가 2가 되지 않는다면 앞쪽에 "0"을 추가한다

// "12".padStart(2,"0") ->이미 string의 길이가 2이기 때문에 아무일도 일어나지 않는다.
// "1".padEnd(2,"0") ->padEnd는 string의 뒤에 string을 추가한다.

//"hello".padStart(10,"x")->xxxxxhello