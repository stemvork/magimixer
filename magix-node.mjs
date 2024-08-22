let goal, dice_array, equation;

function roll() {
	goal = Math.floor((Math.random() * 6) + 1) * 10 + Math.floor((Math.random() * 6) + 1);
	dice_array = [Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1)];
};
function show_solution() {
	dice_array.sort();
	equation = solve(goal, dice_array);
	console.log(`GOAL: ${goal} with NUMBERS: ${dice_array} solved by ${equation}`);
};

const n = 1000;
let succ = 0;
for(let i=0; i<n; ++i) {
  roll();
  if(solve(goal, dice_array)) succ++;
  // show_solution();
}
console.log(`Out of ${n} experiments, ${succ} were solvable, so about ${(succ/n*100).toFixed(1)} percent.`);

export function solve(goal, numbers) {
	let ops = ["+","*","/","-"];

	if(numbers.length == 1) {
		if(eval(numbers[0]) == goal)
			return numbers[0];
		else
			return false;
	};
	
	for(var i = 0; i < numbers.length-1; i++) {
		if(i > 0 && eval(numbers[i]) == eval(numbers[i-1]))
			continue;
		for(var j = i+1; j < numbers.length; j++) {
			if(j - i > 1 && eval(numbers[j]) == eval(numbers[j-1]))
				continue;
			var lastResult = -1;
			for(var k = 0; k < 4; k++) {
				let newNumbers = calculate(numbers, i, ops[k], j);
				let newResult = eval(newNumbers[newNumbers.length-1])
				if(newResult == lastResult || newResult % 1 > 0) {
					continue;
				}
				
				resort(newNumbers);		
				equation = solve(goal, newNumbers);
				
				if(Boolean(equation))
					return equation;
				else
					lastResult = newResult;
			}
		}
	}
};
export function calculate(array, x, operator, y) {
	let returning = array.slice(0);
	returning.splice(x, 1);
	returning.splice(y-1, 1);
	returning.push("(" + array[y] + " " + operator + " " + array[x] + ")");
	return returning;
};
export function resort(array) {
	let inserting = array[array.length-1];
	let insertValue = eval(inserting);
	array.pop();
	for(let i = array.length; i >= 0; i--) {
		if(insertValue >= array[i-1] || i == 0) {
			array.splice(i,0,inserting);
			return array;
		}
	}
};

