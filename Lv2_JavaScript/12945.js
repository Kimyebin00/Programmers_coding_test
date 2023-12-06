// 연습문제 - 피보나치 수 (정답률 73%)

function solution(n) {
  let answer = 0;
  
  let index = 1;
  let n_1 = 0;
  let n_2 = 0;
  while (index < n) {
    if (index === 1) answer = 1 % 1234567;
    if (index > 1) {
      if (index === 2) {
        n_1 = 1;
        n_2 = 1;
      }
      answer = (n_1 + n_2) % 1234567;
      n_2 = n_1;
      n_1 = answer;
    }
    index++;
  }
      
  return answer;
}
