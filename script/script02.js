// 데이터 타입을 특별히 처리하지 않음
// typescript
let num = 10;
num = "kim"; // 오류 아님

// 낱개데이터 : 숫자(실수), 문자열, true, false, undefined, Null, NaN
// 데이터그룹 : 함수, 배열, 객체, 심볼, 클래스

num = 20; // 20.0
let tel1 = "010-1234-7894"; //기본 문자, 계산되지 않는 숫자
let tel2 = "010-1234-7894"; //"", '' 로 묶어 표현

// template literal(임시문자열) : `(백틱) 문자열
let tag1 = '<input type="text" />' + tel1;
let tag2 = "<input type='text' />" + tel2;
let tag3 = `<input type='text' /> 
   줄바꿈처리 가능 
   변수처리  ${tel1}
`;

console.log(tag1);
console.log(tag2);
console.log(tag3);

let boolVariable = false; //"", ', ` 문자열이 아님
console.log(boolVariable);

let ano;
console.log(ano); // undefined : 값을 저장하지 않았다. 정의되지 않음// 연산 처리를 못함
let nullData = null;
// null 공백과 같은 빈값 : 비어있는 공간의 듯

console.log(ano + nullData); // NaN( Not a Number )
