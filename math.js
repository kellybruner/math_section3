#!/usr/bin/env node
var math = process.argv[2],
var number1 = process.argv[3],
var number2 = process.argv[4];
if (math === "add")
	console.log(+number1 + +number2);
}

tell jasmine where to find our code
var math = require('../math');

describe ("A program that does basic arithmetic", function() {
	it("can add two numbers together", function() {
		expect(math.add(3,5)).toBe(8);
	});
});