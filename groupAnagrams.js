var groupAnagrams = function(strs) {
    let result = [];
    let map = {};
    for (let i = 0 ; i < strs.length; i++){
        let word = sortedWord(strs[i]);
        if (!map[word]) map[word] = [];
        map[word].push(strs[i]);
    }
    for (let group in map){
        result.push(map[group]);
    }
    return result;
};

function sortedWord(str){
    if (str.length < 2) return str;
    let arr = str.split('');
    arr.sort();
    return arr.join('');
}
