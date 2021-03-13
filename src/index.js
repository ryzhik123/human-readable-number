module.exports = function toReadable (number) {
	let ans = "";
	let current = number;
	const digits = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
	const root = ['zero','zero','twent','thirt','fort','fift','sixt','sevent','eight','ninet'];
	if(+current.toString()[0] && current.toString().length === 3) {
		ans = ans + digits[+number.toString()[0]]+ " " +"hundred ";
		current = +current.toString().substring(1);
	}
	if(number === 0) return digits[0];
	if(+current<=12 && +current >0) {
		ans = ans + digits[current];
	}	
	if(+current>12 && +current<20) {
		if(+current === 14)
			ans = ans + digits[+current.toString()[1]]+"teen";
		else
			ans = ans + root[+current.toString()[1]]+"een";
	}
	if(+current>=20 && +current <100) {
		let appendix = current.toString()[1] !== '0'?digits[+current.toString()[1]]:"";
		ans = ans + root[+current.toString()[0]]+"y " + appendix; 
	}
	return ans.trim();
}