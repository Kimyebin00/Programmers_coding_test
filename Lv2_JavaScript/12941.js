// 연습문제 - 최솟값 만들기 (정답률 77%)

function solution(A,B){
  let answer = 0;

  const sortedAscA = A.sort((a, b) => a - b);
  const sortedDesB = B.sort((a, b) => b - a);
  
  for(let i = 0; i < A.length; i++) {
    answer += sortedAscA[i] * sortedDesB[i];
  }

  return answer;
}
