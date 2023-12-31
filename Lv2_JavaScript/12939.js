// 연습문제 - 최댓값과 최솟값 (정답률 79%)

function solution(s) {
  let answer = '';    
  const nums = s.split(' ').map(num => parseInt(num));
  const sortedNums = nums.sort((a, b) => a - b);
  
  answer = `${sortedNums[0]} ${sortedNums[sortedNums.length-1]}`;
  
  return answer;
}
