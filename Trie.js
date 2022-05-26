class Trie {
    root = {};

    /**
     * O(n) time | O(n) space where n is the length of word
     * 
     * @param {string} word
     * @return {void}
     */
    insert(word){
        if (word.length == 0) return;
        let charNode = this.root;
        for (let char of word){
            // create new character at current level if character is not found
            if (!(char in charNode)){
                charNode[char] = {};
            }
            charNode = charNode[char];
        }
        // set null node at the end
        charNode['*'] = {};
    }

    /**
     * O(n) time | O(1) space
     * @param {string} word
     * @return {boolean}
     */
    search(word){
        let prefixTree = this.root;
        for (let char of word){
            if (!(char in prefixTree)){
                return false;
            }
            prefixTree = prefixTree[char];
        }
        return "*" in prefixTree;
    }

    /**
     * O(n) time | O(1) space where n is length of word
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix){
        let prefixTree = this.root;
        for (let char in prefix){
            if (!(char in prefixTree)){
                return false;
            }
            prefixTree = prefixTree[char];
        }
        return true;
    }

    /**
     * visualize words in Trie
     */
    printWords(){

    }
}

const trie = new Trie();
let dictionary = ["app","apple","beer","add","jam","rental"];
dictionary.forEach(w => trie.insert(w));
let example1 = ["apps","app","ad","applepie","rest","jan","rent","beer","jam"];
console.log(example1)
example1.map(w => console.log(`w ${w} \t\t trie.search(w) ${trie.search(w)} \t\t trie.startsWith(w) ${trie.startsWith(w)}`));


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

console.log(createTrie(dictionary))
