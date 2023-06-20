function getAverages(nums: number[], k: number): number[] {
    const numsLength = nums.length;
    var output = new Array(numsLength).fill(-1);
    if (k > numsLength) return output;

    for (let i = k; i < nums.length - k; i++) {
        const start = i - k;
        const end = i + k;
        if (start < 0) continue;
        if (end >= numsLength) break;
        else {
            const arr = nums.slice(start, end+1);
            if (arr.length > 0){
                const v = arr.reduce((t, v) => t + v);
                output[i] = Math.floor(v/arr.length);
            }
        }
    }    
    return output;
};


function getAverages2(nums: number[], k: number): number[] {
    if (k == 0) return nums;
    const numsLength = nums.length;
    var output = new Array(numsLength).fill(-1);
    if (2 * k + 1 > numsLength) return output;

    var runningSumArray = new Array(numsLength + 1).fill(0);
    for (let i = 0; i < numsLength; i++) {
        runningSumArray[i + 1] = runningSumArray[i] + nums[i];
    }

    for (let i = k; i < (numsLength - k); i++) {
        const start = i - k;
        const end = i + k;
        const sliceSum = runningSumArray[end + 1] - runningSumArray[start];
        output[i] = Math.floor(sliceSum / (2 * k + 1));
    }
    return output;
};

function getAverages3(nums: number[], k: number): number[] {
    if(k == 0) return nums;
    const numsLength = nums.length;
    var output = new Array(numsLength).fill(-1);
    let range = k * 2 + 1;    
    if (range > numsLength) return output;
    
    
    for (let i = 0; i < k; i++) {
        range++;
        const arr = nums.slice(i, range);
        const sum = arr.reduce((t,v) => t + v);
        output[k+i] = Math.floor(sum/arr.length);
    }
    return output;
};