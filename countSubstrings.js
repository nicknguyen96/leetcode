

/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    let total = 0;
   for (let i = 0; i < s.length; i++){
       total = count(i,i,s,total);
       total = count(i,i+1,s,total);
   }
   return total;

};

function count(left,right, s, total){
   while (left > -1 && right < s.length && s[left] == s[right]){
       total++;
       left--;
       right++;
   }
   return total
}

// let input= "aaabbb"
// console.log(countSubstrings(input));