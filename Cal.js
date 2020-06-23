// Script for Calculator
var z = [];
var y = [];

var dis = document.getElementById('display1');
var output = document.getElementById('display2');

function disp1() { 
	if (output.textContent === '') {
		var obj = dis.textContent + '1';
		dis.textContent = obj;
		z.push(1);
} else {
		z.splice(0);
		output.textContent = '';
		dis.textContent = '';
		var obj1 = dis.textContent + '1';
        dis.textContent = obj1;
	    z.push(1);
	}
}

function disp2() {
	if (output.textContent === '') {
		var obj = dis.textContent + '2';
		dis.textContent = obj;
		z.push(2);
}  else {
	    z.splice(0);
		output.textContent = '';
		dis.textContent = '';
		var obj1 = dis.textContent + '2';
        dis.textContent = obj1;
	    z.push(2);	
	}
}

function disp3() {
	if (output.textContent === '') {
		var obj = dis.textContent + '3';
		dis.textContent = obj;
		z.push(3);
}   else {
	    z.splice(0);
		output.textContent = '';
		dis.textContent = '';
		var obj1 = dis.textContent + '3';
        dis.textContent = obj1;
	    z.push(3);	
	}
}

function disp4() {
	if (output.textContent === '') {
		var obj = dis.textContent + '4';
		dis.textContent = obj;
		z.push(4);
}   else {
	    z.splice(0);
		output.textContent = '';
		dis.textContent = '';
		var obj1 = dis.textContent + '4';
        dis.textContent = obj1;
	    z.push(4);	
	}
}

function disp5() {
	if (output.textContent === '') {
	var obj = dis.textContent + '5';
    dis.textContent = obj;
	z.push(5);
}   else {
	    z.splice(0);
		output.textContent = '';
		dis.textContent = '';
		var obj1 = dis.textContent + '5';
        dis.textContent = obj1;
	    z.push(5);	
	}
}

function disp6() {
	if (output.textContent === '') {
	var obj = dis.textContent + '6';
    dis.textContent = obj;
	z.push(6);
}  else {
	    z.splice(0);
		output.textContent = '';
		dis.textContent = '';
		var obj1 = dis.textContent + '6';
        dis.textContent = obj1;
	    z.push(6);	
	}
}

function disp7() {
	if (output.textContent === '') {
	var obj = dis.textContent + '7';
    dis.textContent = obj;
	z.push(7);
}  else {
	    z.splice(0);
		output.textContent = '';
		dis.textContent = '';
		var obj1 = dis.textContent + '7';
        dis.textContent = obj1;
	    z.push(7);	
	}
}

function disp8() {
	if (output.textContent === '') {
	var obj = dis.textContent + '8';
    dis.textContent = obj;
	z.push(8);
} else {
	    z.splice(0);
		output.textContent = '';
		dis.textContent = '';
		var obj1 = dis.textContent + '8';
        dis.textContent = obj1;
	    z.push(8);	
	}
}

function disp9() {
	if (output.textContent === '') {
	   var obj = dis.textContent + '9';
       dis.textContent = obj;
	   z.push(9);
} else {
	    z.splice(0);
		output.textContent = '';
		dis.textContent = '';
		var obj1 = dis.textContent + '9';
        dis.textContent = obj1;
	    z.push(9);	
	}
}

function disp0() {
	if (output.textContent === '') {
	    var obj = dis.textContent + '0';
        dis.textContent = obj;
	    z.push(0);
} else { 
		z.splice(0);
		output.textContent = '';
		dis.textContent = '';
		var obj1 = dis.textContent + '0';
        dis.textContent = obj1;
	    z.push(0);	
	}
}

function disp_plus() {
	if (output.textContent === '') {
	    var obj = dis.textContent + '+';
        dis.textContent = obj;
	    z.push('+');
}   else {
	       if(output.textContent.indexOf('Error') === -1){
				z.splice(0);
				var tem = output.textContent;
				y.push(tem);
				dis.textContent = tem + '+';
				output.textContent = '';
				z.push(Number(y[0]));
				z.push('+');
				y.splice(0);
		  } else 
			  {
				 z.splice(0);
				 dis.textContent = '+';
				 output.textContent = '';
				 z.push('+');
			  }
	        
	}
}

function disp_minus() {
	if (output.textContent === '') {
	    var obj = dis.textContent + '-';
        dis.textContent = obj;
	    z.push('-');
}   else {
	         if(output.textContent.indexOf('Error') === -1){
				z.splice(0);
				var tem = output.textContent;
				y.push(tem);
				dis.textContent = tem + '-';
				output.textContent = '';
				z.push(Number(y[0]));
				z.push('-');
				y.splice(0);
			} else 
			  {
				 z.splice(0);
				 dis.textContent = '-';
				 output.textContent = '';
				 z.push('-');
			  }
	}
}

function disp_divide() {
	if (output.textContent === '') {
	var obj = dis.textContent + '÷';
	dis.textContent = obj;
	z.push('/');
}   else {
	         if(output.textContent.indexOf('Error') === -1){
				z.splice(0);
				var tem = output.textContent;
				y.push(tem);
				dis.textContent = tem + '÷';
				output.textContent = '';
				z.push(Number(y[0]));
				z.push('/');
				y.splice(0);
			} else 
			  {
				 z.splice(0);
				 dis.textContent = '÷';
				 output.textContent = '';
				 z.push('/');
			  }
	}
				 
	}

function disp_times() {
	if (output.textContent === '') {
		var obj= dis.textContent + '×';
		dis.textContent = obj;
	    z.push('*');
}   else {
	if(output.textContent.indexOf('Error') === -1){
				z.splice(0);
				var tem = output.textContent;
				y.push(tem);
				dis.textContent = tem + '×';
				output.textContent = '';
				z.push(Number(y[0]));
				z.push('*');
				y.splice(0);
			} else 
			  {
				 z.splice(0);
				 dis.textContent = '×';
				 output.textContent = '';
				 z.push('*');
			  }
	}
 }

function disp_open() {
   if (output.textContent === '') {
	var obj = dis.textContent + '(';
    dis.textContent = obj;
	var n = z.length-1;
	if (z[n]==='+'|| z[n]==='-'|| z[n]==='/'|| z[n]==='*' || z.length===0) {
	z.push('(');
} else {
		z.push('*(');
}
	
} else {
		z.splice(0);
		dis.textContent = '(';
		output.textContent = '';
	    z.push('(');
	}
}

function disp_close() {
	if (output.textContent === '') {
	var obj = dis.textContent + ')';
    dis.textContent = obj;
	z.push(')');
}
	else {
		z.splice(0);
		dis.textContent = ')';
		output.textContent = '';
	    z.push(')');
	}
}

function disp_square() {
	if (output.textContent === '') {
	    var obj = dis.textContent + '²';
        dis.textContent = obj;
	    z.push('**2');
}   else {
	if(output.textContent.indexOf('Error') === -1){
		z.splice(0);
		var tem = output.textContent;
		y.push(tem);
		dis.textContent = tem + '²';
		output.textContent = '';
		z.push(Number(y[0]));
	    z.push('**2');
		y.splice(0);
}
	 else{
		         z.splice(0);
				 dis.textContent = '²';
				 output.textContent = '';
				 z.push('**2');
	   }
  }
}

function disp_root() {
	if (output.textContent === '') {
	dis.textContent = dis.textContent + '√(';
	z.push('Math.sqrt(');
}   else {
     z.splice(0);
     dis.textContent = '√(';
     output.textContent = '';
     z.push('Math.sqrt(');
	}
}

function disp_percent() {
	if (output.textContent === '') {
	    var obj = dis.textContent + '%';
        dis.textContent = obj;
	    z.push('*0.01');
}   else {
	if(output.textContent.indexOf('Error') === -1){
		z.splice(0);
		var tem = output.textContent;
		y.push(tem);
		dis.textContent = tem + '%';
		output.textContent = '';
		z.push(Number(y[0]));
	    z.push('*0.01');
		y.splice(0);
}
	 else{
		         z.splice(0);
				 dis.textContent = '%';
				 output.textContent = '';
				 z.push('*0.01');
	   }
  }
}

function disp_dot() {
	if (output.textContent === '') {
	    var obj = dis.textContent + '.';
        dis.textContent = obj;
	    z.push('.');
}   else {
		z.splice(0);
	    dis.textContent = '.';
	    output.textContent = '';
	    z.push('.');
	}
}

function equal() {
   
	var ans = '';
   for(var i=0; i<z.length; i++)
      {ans = ans + z[i];}
	
	try {
	output.textContent = eval(ans);
}
	catch (e) {
    if (e instanceof TypeError) {
       output.textContent = 'Type Error'; // statements to handle TypeError exceptions
    } else if (e instanceof RangeError) {
       output.textContent = 'Range Error'; // statements to handle RangeError exceptions
    } else if (e instanceof EvalError) {
        output.textContent = 'Evaluation Error'; // statements to handle EvalError exceptions
	} else if (e instanceof SyntaxError) {
        output.textContent = 'Syntax Error';
    } else {
       output.textContent = 'Error'; // statements to handle any unspecified exceptions
    }
}
  }

function del() {
	var obj = dis.textContent;
	var l = obj.length;
	var m = l-1;
	if (l>0){
    dis.textContent = obj.substring(0,m);
	}
	output.textContent = '';
	z.pop();
}


function cancel() {
	var obj = dis.textContent;
	dis.textContent = obj.substring(0,0);
	output.textContent = output.textContent.substring(0,0);
	z.splice(0);
}


// For button use
var pairs = [
	['0', disp0],
	['1', disp1],
	['2', disp2],
	['3', disp3],
	['4', disp4],
	['5', disp5],
	['6', disp6],
	['7', disp7],
	['8', disp8],
	['9', disp9],
	['plus',disp_plus],
	['minus', disp_minus],
	['times', disp_times],
	['divide', disp_divide],
	['open', disp_open],
	['close', disp_close],
	['square', disp_square],
	['root', disp_root],
	['percent', disp_percent],
	['delete', del],
	['dot', disp_dot],
	['equal',equal],
	['c', cancel]
];

for (var i=0; i<pairs.length; i++){
	document.getElementById(pairs[i][0]).addEventListener('click',pairs[i][1], false);
}

// For Keyboard Input
function key(e){
	var k =  e.keyCode || e.which;
  switch (k){
	case 37: disp_percent(); break;
	case 40: disp_open(); break;
	case 41: disp_close(); break;
	case 42: disp_times(); break;
	case 43: disp_plus(); break;
	case 45: disp_minus(); break;
	case 46: disp_dot(); break;
	case 47: disp_divide(); break;
	case 48: disp0(); break;
	case 49: disp1(); break;
	case 50: disp2(); break;
	case 51: disp3(); break;
	case 52: disp4(); break;
	case 53: disp5(); break;
	case 54: disp6(); break;
	case 55: disp7(); break;
	case 56: disp8(); break;
	case 57: disp9(); break;
	case 61: case 13: equal(); break;
	case 127: cancel(); break;
			
	}
}
function keyd(e){
	var k =  e.keyCode;
	if(k == 8){
		del();
	}

}
window.document.addEventListener('keypress', key, false);
window.document.addEventListener('keydown', keyd, false);
