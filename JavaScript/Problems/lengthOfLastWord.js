/**
@param {string} s
@return {number}
*/

// leetcode problem #58 Length of Last Word Easy

var lengthOfLastWord = (s)=>{
	// remove trailing spaces
	// scan from the end of the string
	// if the char is a space ignore
	// find the first char then init count = 0
	// repeat until the next space or start of the string
	// lastly, return the count

	let i = s.length - 1;
	while (s.charAt(i) == " " && i >= 0){
		i --;
	}
	let count = 0;
	while (i >= 0){
		if (s.charAt(i) != " "){
			count ++;
		}else{
			return count;
		}
		i --;
	}
	return count;
}

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to the moon    "));
console.log(lengthOfLastWord(" a   "));
