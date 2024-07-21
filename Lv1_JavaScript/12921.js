// 연습문제 - 소수 찾기 (정답률 62%)

function solution(n) {
    var answer = 0;
    
    const arr = Array.from({ length: 1000001 }, (v, i) => i);
    arr[0] = 0;
    arr[1] = 0;
    
    for (let i = 2; i <= 1000000; i++) {
        if (arr[i] === 0) continue;
        
        for (let j = i*2; j <= 1000000; j+=i) {
            arr[j] = 0;
        }
    }

    for (let i = 2; i <= n; i++) {
        if (arr[i] !== 0) answer++;
    }
    return answer;
}
