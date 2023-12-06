// 2017 팁스타운 - 짝지어 제거하기 (정답률 72%)
// 정답 보고 테스트 케이스 100% 통과함

function solution(s)
{
  let answer = -1;
  
  const stack = [];
  
  s.split('').forEach(element => {
    if (stack[stack.length-1] === element) {
      stack.pop();
    } else {
      stack.push(element);
    }
  })
  
  answer = (stack.length === 0) ? 1 : 0;

  return answer;
}
