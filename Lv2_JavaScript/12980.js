// Summer/Winter Coding(~2018) - 점프와 순간 이동 (정답률 69%)

function solution(n)
{
  let ans = 0;

  while (n !== 0) {
    if (n % 2 === 1) {
      ans++;
      n -= 1;
    } else {
      n = n/2;
    }
  }
  
  return ans;
}
