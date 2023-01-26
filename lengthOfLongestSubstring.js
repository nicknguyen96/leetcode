const lengthOfLongestSubstring(s){
  if (s.length < 2) return s.length;
    let left = 0;
    let right = 0;
    let maxLength = 0;
    while (right < s.length) {
        if (s.substring(left,right).includes(s[right])) {
            maxLength = (right-left) > maxLength ? right-left : maxLength;
            left = left + s.substring(left,right).indexOf(s[right]) + 1;
        }

        right++;
    }
    return maxLength > right - left ? maxLength : right-left;
}
