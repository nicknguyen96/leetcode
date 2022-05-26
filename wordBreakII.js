/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    const trie = createTrie(wordDict);
    return dfs(0, trie, s);
};

function dfs (i, trie, s) {
    if (i === s.length) return [""];
    const start = i;
    const res = [];
    const char = s[i];
    let currentNode = trie[char];
    let nextId = i + 1;
    while (currentNode){
        if (currentNode.isEnd){
            const prev = dfs(nextId, trie, s);
            for ( let str of prev) {
                const curr = s.slice(start, nextId);
                if (str.length > 0 ) {
                    res.push(curr + " "  + str);
                } else {
                    res.push(curr);
                }
            }
        }
        currentNode = currentNode[s[nextId]];
        nextId++;
    }

    return res;
}

const createTrie = (dictionary) => {
    const trie = {};
    for (let word of dictionary){
        let node = trie;
        for (let char of word){
            node[char] = { char };
            node = node[char];
        }
        node.isEnd = true;
    }
    return trie;
}