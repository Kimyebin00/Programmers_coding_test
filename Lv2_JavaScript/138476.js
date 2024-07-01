// 연습문제 - 귤 고르기 (정답률 69%)

function solution(k, tangerine) {
    let answer = 0;
    
    const dict = {};
    
    tangerine.forEach(element => {
        if (!dict[element]) {
            dict[element] = 1;
        } else {
            dict[element] = dict[element] + 1;
        }
    });
    
    const countArray = [];
    for (let key in dict) {
        countArray.push(dict[key]);
    }
    
    const sortedCountArray = countArray.sort((a,b) => b-a);
    
    let wantedK = k;
    
    sortedCountArray.forEach(element => {
        if (wantedK !== 0) {
            if (element >= wantedK) {
                answer += 1;
                wantedK = 0;
            } else {
                answer += 1;
                wantedK -= element;
            }
        }
    });
    
    return answer;
}
