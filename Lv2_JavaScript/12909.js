// 스택/큐 - 올바른 괄호 (정답률 77%)

function solution(s){
  let answer = true;

  const arrayS = s.split('');
  const stack = [];
  
  let index = 0;
  
  while (index < arrayS.length) {
    if (arrayS[index] === '(') stack.push(arrayS[index]);
    if (arrayS[index] === ')') {
      if (stack.pop() !== '(') {
        answer = false;
        break;
      }
    }
    index++;
  }
  
  if (stack.length !== 0) answer = false;

  return answer;
}
