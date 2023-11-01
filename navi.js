
const navi = ["회사소개","제품소개","견적서","고객센터"];
const pw = [10, 50, 40]
const subject = ["자바스크립트", "리액트","SQR"]

//고객센터만 출력
//console.log(navi[3])
//자바스크립트만 50
//console.log(subject[0], pw[1])
//console.log(subject[0]+" "+pw[1])
// 리액트 점수 50입니다.
//console.log(subject[1]+" 점수 "+pw[1]+"입니다.")

const mutisubject = [
  ["네이버","http://www.naver.com"],
  ["다음","http://www.daum.net"],
  ["구글","http://www.google.com"]
]

// http://www.google.com
console.log(mutisubject[2][1])

//<a href=http://www.google.com>구글</a> / 연산자로 표현하기

console.log("<a href="+mutisubject[2][1]+">"+mutisubject[2][0]+"</a>")

// 다나오는데 반복문
for ( x in mutisubject){
  console.log("<a href="+mutisubject[x][1]+">"+mutisubject[x][0]+"</a>")
}