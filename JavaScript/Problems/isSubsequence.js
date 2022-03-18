const isSubsequence = function(s, t) {
    let subPointer = 0;
    let mainPointer = 0;
    while (mainPointer < t.length){
        if (s.charAt(subPointer) === t.charAt(mainPointer)){
            subPointer ++;
        }
        mainPointer++;
    }
    if (subPointer === s.length) return true;
    return false;
};