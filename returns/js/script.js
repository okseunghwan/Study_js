const age= 33;
function calculateKrAge(ageOfForeigner){
  return ageOfForeigner+2
}

// 함수는 어떤일을 수행하고 그 결과를 알려주는것이라고 생각
// console이나 alert가 아니라 코드에서 결과를 얻어야한다


const krAge = calculateKrAge(age)

console.log(krAge)

// 어떤 작업을 처리하고 그결과를 return하기위해 function을 사용
// 이게 function이 function의 밖과 소통하는 방법이다.
// 가끔 function을 쓸때 그냥 조용히 작업시키고 결과는 필요없는 경우도 있다.
// 그러나 어떨때는 어느 작업을 하고 그 작업의 결과를 알려주는 
// function을 원할 수 있다. 그 기능을 return이 수행한다.



const calculator = {
  add: function(a,b){
    return a+b;
  },
  minus: function(a,b){
    return a-b;

  },
  divide: function(a,b){
   return a/b;
  },
  power: function(a,b){
    return a**b;
  },
  times: function(a,b){
    return a*b;
  }

}


const plusResult = calculator.add(2,3);
const minusResult = calculator.minus(plusResult,10);
const timesResult = calculator.times(10,minusResult);
const divideResult = calculator.divide(timesResult,plusResult);
const powerResult = calculator.power(divideResult,minusResult);
// 5, -5,-50,-10,-100000

// 이전에는 모두 console.log를 했지만
// 콘솔안에 plusResult,minusResult를 넣으면 console.log를 하지않아도 값이나온다
// return했기 때문에