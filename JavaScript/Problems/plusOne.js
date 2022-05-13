/**
@param {number[]} digits
@return {number[]}
*/

const plusOne = digits =>{
	let result = []
	let i = digits.length - 1;
	let carry = 0;
	while (i >= 0){
		let operand = i == digits.length - 1? 1: carry;
		let sum = digits[i] + operand;
		carry = 0;
		if (sum >= 10){
			sum = sum % 10;
			carry = 1;
		}
		digits[i] = sum;
		i --;
	}

	if (carry == 1){
		digits.unshift(1);
	}

	return digits;
}


console.log(plusOne([4,3,2,1]));

console.log(plusOne([9,9,9,9]));
