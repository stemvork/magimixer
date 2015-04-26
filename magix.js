function init() {
	draw();
	roll();		
};

function next() {
	if(document.getElementById("equation").style.visibility == "visible") {
		document.getElementById("equation").style.visibility = "hidden";
		roll();
	}
	else {
		showSolution();
	}
};

function draw() {
	document.getElementById("equation").style.lineHeight = document.getElementById('container').clientHeight * .5  + "px";
	document.getElementById("equation").style.fontSize = Math.min(document.getElementById('container').clientHeight, document.getElementById('container').clientWidth) * .06 + "px";		
};

function roll() {
	goal = Math.floor((Math.random() * 6) + 1) * 10 + Math.floor((Math.random() * 6) + 1);
	diceArray = [Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1)];
	makeSVG(goal, diceArray);
};

function showSolution() {
	diceArray.sort();
	equation = solve(goal, diceArray);
	if(Boolean(equation))
		document.getElementById("equation").innerHTML = equation + " = " + goal;
	else
		document.getElementById("equation").innerHTML = "Can't make " + goal + " with " + diceArray + " :(";
	document.getElementById("equation").style.visibility = "visible";
};

window.onresize = function(event) {
	draw();
};

function solve(goal, numbers) {
	ops = ["+","*","/","-"];

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
				newNumbers = calculate(numbers, i, ops[k], j);
				newResult = eval(newNumbers[newNumbers.length-1])
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

function calculate(array, x, operator, y) {
	returning = array.slice(0);
	returning.splice(x, 1);
	returning.splice(y-1, 1);
	returning.push("(" + array[y] + " " + operator + " " + array[x] + ")");
	return returning;
};

function resort(array) {
	inserting = array[array.length-1];
	insertValue = eval(inserting);
	array.pop();
	for(i = array.length; i >= 0; i--) {
		if(insertValue >= array[i-1] || i == 0) {
			array.splice(i,0,inserting);
			return array;
		}
	}
};

function makeSVG(goal, dices) {
	document.getElementById("svgMixer").innerHTML = '<g transform="translate(1606.5168,-67.522636)"> <g transform="translate(-154.28572,-20)"><rect style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:25;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="rect9105" width="450" height="18" x="-1327.2311" y="606.67792" ry="0.070253305" /> <circle transform="matrix(0.5,0.8660254,-0.8660254,0.5,0,0)" style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:17.79701424;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="circle9109" cx="-130.42288" cy="1457.2548" r="113.87957" /> <path style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:Helvetica;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:18.11899948;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;image-rendering:auto;shape-rendering:auto;text-rendering:auto" d="m -1327.2311,490.67783 c -68.9281,0 -125,56.07191 -125,125.00005 0,68.92813 56.072,125.00001 125,125.00004 68.9281,-2e-5 125,-56.07189 125,-125.00004 0,-68.92815 -56.0719,-125.00004 -125,-125.00005 z m 0,18.11577 c 59.1378,-1e-5 106.8843,47.74653 106.8843,106.88428 0,59.13774 -47.7465,106.88426 -106.8843,106.88428 -59.1377,1e-5 -106.8843,-47.74655 -106.8843,-106.88428 0,-59.13775 47.7466,-106.88427 106.8843,-106.88428 z" id="path9111" /> <rect transform="matrix(0.5,-0.8660254,0.8660254,0.5,0,0)" style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:25;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="rect9105-6" width="450" height="18" x="-1429.5969" y="-447.42715" ry="0.070253305" /> <circle style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:17.79701424;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="circle9109-2" cx="-1094.4875" cy="1018.8536" r="113.87957" /> <path style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:Helvetica;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:18.11899948;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;image-rendering:auto;shape-rendering:auto;text-rendering:auto" d="m -1202.7408,956.35365 c -34.464,59.69345 -13.9403,136.28915 45.7533,170.75315 59.6935,34.4641 136.2891,13.9403 170.75316,-45.7531 34.46405,-59.6935 13.94032,-136.28913 -45.75316,-170.75321 -59.6936,-34.46406 -136.2892,-13.94032 -170.7533,45.75316 z m 15.6888,9.05788 c 29.5688,-51.21478 94.7918,-68.69124 146.0066,-39.12237 51.21479,29.56887 68.69123,94.79184 39.1224,146.00664 -29.5689,51.2148 -94.7919,68.6912 -146.0067,39.1224 -51.2148,-29.5689 -68.6912,-94.7919 -39.1223,-146.00667 z" id="path9111-3" /> <rect transform="matrix(-0.5,-0.8660254,0.8660254,-0.5,0,0)" style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:25;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="rect9105-6-6" width="450" height="18" x="-567.87781" y="-1063.1141" ry="0.070253305" /> <circle transform="matrix(0.5,-0.8660254,0.8660254,0.5,0,0)" style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:17.79701424;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="circle9109-2-0" cx="-1196.8285" cy="-35.260456" r="113.87957" /> <path style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:Helvetica;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:18.11899948;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;image-rendering:auto;shape-rendering:auto;text-rendering:auto" d="m -737.20392,1081.3537 c 34.46405,59.6935 111.05971,80.2172 170.75321,45.7531 59.6935,-34.4641 80.21722,-111.0597 45.75323,-170.75316 -34.46409,-59.6935 -111.0597,-80.21724 -170.75323,-45.75317 -59.69352,34.46408 -80.21725,111.05973 -45.75321,170.75323 z m 15.68871,-9.0579 c -29.56887,-51.2148 -12.09243,-116.43778 39.12235,-146.00666 51.21479,-29.56887 116.43775,-12.09243 146.00665,39.12237 29.5689,51.21479 12.09243,116.43779 -39.12235,146.00669 -51.21479,29.5688 -116.43777,12.0924 -146.00665,-39.1224 z" id="path9111-3-2" /> <rect transform="scale(-1,-1)" style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:25;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="rect9105-6-6-3" width="450" height="18" x="396.21198" y="-624.67834" ry="0.070253305" /> <circle transform="matrix(-0.5,-0.8660254,0.8660254,-0.5,0,0)" style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:17.79701424;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="circle9109-2-0-4" cx="-335.08707" cy="-650.96881" r="113.87957" /> <path style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:Helvetica;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:18.11899948;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;image-rendering:auto;shape-rendering:auto;text-rendering:auto" d="m -396.212,740.67838 c 68.9281,0 125.00002,-56.07191 125,-125.00005 -2e-5,-68.92813 -56.07193,-125.00001 -124.99998,-125.00004 -68.92813,2e-5 -125.00001,56.07189 -125.00002,125.00004 0,68.92815 56.07191,125.00004 125,125.00005 z m 0,-18.11577 c -59.13773,1e-5 -106.88428,-47.74653 -106.88429,-106.88428 0,-59.13774 47.74653,-106.88426 106.88429,-106.88428 59.13776,-1e-5 106.88429,47.74655 106.88429,106.88428 1e-5,59.13775 -47.74654,106.88427 -106.88429,106.88428 z" id="path9111-3-2-8" /> <rect transform="matrix(-0.5,0.8660254,-0.8660254,-0.5,0,0)" style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:25;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="rect9105-6-6-3-8" width="450" height="18" x="498.50528" y="429.4375" ry="0.070253305" /> <circle transform="scale(-1,-1)" style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:17.79701424;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="circle9109-2-0-4-7" cx="628.95068" cy="-212.49953" r="113.87957" /> <path style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:Helvetica;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:18.11899948;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;image-rendering:auto;shape-rendering:auto;text-rendering:auto" d="m -520.69747,274.99954 c 34.46405,-59.69348 13.94031,-136.28914 -45.75322,-170.75319 -59.69352,-34.46405 -136.28916,-13.940292 -170.7532,45.75313 -34.46405,59.69353 -13.94032,136.28914 45.7532,170.75322 59.69353,34.46407 136.28916,13.94032 170.75322,-45.75316 z m -15.68872,-9.05788 c -29.56886,51.21478 -94.79185,68.69124 -146.00664,39.12238 -51.21479,-29.56888 -68.69123,-94.79184 -39.12236,-146.00665 29.56886,-51.21481 94.79186,-68.691243 146.00665,-39.12238 51.21479,29.56887 68.69122,94.79186 39.12235,146.00665 z" id="path9111-3-2-8-1" /> <rect transform="matrix(0.5,0.8660254,-0.8660254,0.5,0,0)" style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:25;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="rect9105-6-6-3-8-1" width="450" height="18" x="-363.21393" y="1045.1036" ry="0.070253305" /> <circle transform="matrix(-0.5,0.8660254,-0.8660254,-0.5,0,0)" style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:17.79701424;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="circle9109-2-0-4-7-7" cx="731.27362" cy="841.60431" r="113.87957" /> <path style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:Helvetica;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:18.11899948;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;image-rendering:auto;shape-rendering:auto;text-rendering:auto" d="m -986.23432,149.99937 c -34.46408,-59.693488 -111.05968,-80.217241 -170.75318,-45.75316 -59.6935,34.46409 -80.2173,111.05973 -45.7533,170.75319 34.4641,59.6935 111.0597,80.21724 170.7533,45.75317 59.69349,-34.46408 80.21722,-111.05972 45.75318,-170.7532 z m -15.68868,9.05788 c 29.56884,51.21478 12.0924,116.43777 -39.1224,146.00665 -51.2148,29.56887 -116.4377,12.09243 -146.0066,-39.12237 -29.5689,-51.21479 -12.0925,-116.43778 39.1223,-146.00665 51.2148,-29.568881 116.4378,-12.09242 146.0067,39.12237 z" id="path9111-3-2-8-1-5" /> <circle transform="matrix(-0.5,0.8660254,-0.8660254,-0.5,0,0)" style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:17.79701424;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="circle9109-2-0-4-7-7-5" cx="964.05219" cy="438.43442" r="113.87957" /> <path style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:Helvetica;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:18.11899948;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;image-rendering:auto;shape-rendering:auto;text-rendering:auto" d="m -753.46827,553.17647 c -34.46405,-59.69349 -111.05971,-80.21724 -170.75321,-45.75316 -59.6935,34.46409 -80.21722,111.05973 -45.75323,170.75319 34.46409,59.6935 111.0597,80.21724 170.75323,45.75317 59.69352,-34.46408 80.21725,-111.05972 45.75321,-170.7532 z m -15.68871,9.05788 c 29.56887,51.21478 12.09243,116.43777 -39.12235,146.00665 -51.21479,29.56887 -116.43775,12.09243 -146.00665,-39.12237 -29.5689,-51.21479 -12.09243,-116.43778 39.12235,-146.00665 51.21479,-29.56888 116.43777,-12.09242 146.00665,39.12237 z" id="path9111-3-2-8-1-5-9" /> <text id="text9871" y="670.27856" x="-861.64825" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:150px;line-height:0%;font-family:Helvetica;-inkscape-font-specification:\'sans-serif, Normal\';text-align:center;word-spacing:0px;text-anchor:middle;fill:#FFF;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" xml:space="preserve">'+ (goal - (goal % 10)) + '</text> <text id="text9871-9" y="670.27991" x="-1327.1578" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:150px;line-height:0%;font-family:Helvetica;-inkscape-font-specification:\'sans-serif, Normal\';text-align:center;word-spacing:0px;text-anchor:middle;fill:#FFF;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" xml:space="preserve">'+ (goal % 10) + '</text> <text id="text9871-9-8" y="267.10144" x="-1094.4143" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:150px;line-height:0%;font-family:Helvetica;-inkscape-font-specification:\'sans-serif, Normal\';text-align:center;word-spacing:0px;text-anchor:middle;fill:#000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" xml:space="preserve">'+ dices[0] + '</text> <text id="text9871-9-8-5" y="267.10159" x="-628.87744" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:150px;line-height:0%;font-family:Helvetica;-inkscape-font-specification:\'sans-serif, Normal\';text-align:center;word-spacing:0px;text-anchor:middle;fill:#000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" xml:space="preserve">'+ dices[1] + '</text> <text id="text9871-9-8-5-1" y="670.2804" x="-396.13876" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:150px;line-height:0%;font-family:Helvetica;-inkscape-font-specification:\'sans-serif, Normal\';text-align:center;word-spacing:0px;text-anchor:middle;fill:#000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" xml:space="preserve">'+ dices[2] + '</text> <text id="text9871-9-8-5-1-2" y="1073.4557" x="-628.8775" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:150px;line-height:0%;font-family:Helvetica;-inkscape-font-specification:\'sans-serif, Normal\';text-align:center;word-spacing:0px;text-anchor:middle;fill:#000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" xml:space="preserve">'+ dices[3] + '</text> <text id="text9871-9-8-5-1-2-4" y="1073.4557" x="-1094.4143" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:150px;line-height:0%;font-family:Helvetica;-inkscape-font-specification:\'sans-serif, Normal\';text-align:center;word-spacing:0px;text-anchor:middle;fill:#000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" xml:space="preserve">'+ dices[4] + '</text></g></g>';
};
