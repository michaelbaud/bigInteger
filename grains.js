function Grains() {

	var bigInt = require('./big-integer')
	var total = [];
	var totalFinal = 0;

	this.square = function(num) {
		var result = num;

		for(var i = 1; i < num; i++) {
			result = bigInt(2).pow(num-1);
			total.push(result);
		}
		return result.toString();
	}

	this.total = function() {
		for(var i = 1; i < total.length; i++) {
			totalFinal += total[i];
		}
		return totalFinal.toString();
	}

	/*this.total = function() {
		for(var i = 0; i < ; i++) {

		}
	}*/


}

module.exports = Grains;
