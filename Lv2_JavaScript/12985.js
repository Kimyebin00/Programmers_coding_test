// 2017 팁스타운 - 예상 대진표 (정답률 68%)

function solution(n,a,b)
{
  let answer = 0;

  while (true) {
    answer++;
    if (parseInt(a / 2) !== parseInt(b / 2) && Math.abs(a-b) === 1) break;
    a = a % 2 === 0 ? a / 2 : parseInt(a / 2) + 1;
    b = b % 2 === 0 ? b / 2 : parseInt(b / 2) + 1;
  }

  return answer;
}
