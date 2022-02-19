//https://leetcode.com/problems/longest-common-prefix/

// Unoptimized
var longestCommonPrefix = function(strs) {
    if (strs.length < 1){
        return "";
    }
    if (strs.length == 1){
        return strs[0];
    }
    let commonPrefix = strs[0];
    for (let i=1;i < strs.length; i++){
        const smallerLength  = Math.min(commonPrefix.length, strs[i].length);
        commonPrefix = commonPrefix.slice(0, smallerLength);
        for (let j=0; j < smallerLength; j++){
            if (commonPrefix[j] !== strs[i][j]){
                commonPrefix = commonPrefix.slice(0, j);
                break;
            }
        }
    }
    
    return commonPrefix;
};