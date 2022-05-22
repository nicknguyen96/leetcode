/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function (strs) {
    let result = "";
    if (strs.length == 0) {
        return result
    } else if (strs.length == 1){
        return strs[0]
    }
    let isFound = false;
    let input = strs.sort((a, b) => a.length - b.length);
    let target = getSubstrings(input[0]);
    // console.log('target ',target)
    for (let i = 0; i < target.length; i++) {
        let current = target[i];
        for (let j = 1; j < input.length; j++) {
            if (!input[j].includes(current)) {
                isFound = false;
                break;
            } else {
                isFound = true;
            }
        }
        if (isFound) return current;
    }
    console.log("return here")
    return result;
};

var getSubstrings = (str) => {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j < str.length+1  ; j++) {
            result.push(str.substring(i, j))
        }
    }
    return result.sort((a,b) => b.length - a.length);
}

// let input = ["reflower","flow","flight"]
// console.log(longestCommonPrefix(input));


// console.log(getSubstrings('abc'))