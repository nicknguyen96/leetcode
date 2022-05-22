/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let head = 0;
        let tail = n;
        
        while (head <= tail){
            let middle = Math.floor((head + tail) / 2);
            if(isBadVersion(middle)){
                tail = middle - 1;
            } else {
                head = middle + 1;
            }
        }
        return head;
    };
};

