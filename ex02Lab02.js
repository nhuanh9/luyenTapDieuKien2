var a = prompt("Nhap a :");
var b = prompt("Nhap b :");
var c = prompt("Nhap c :");
if(a == 0){
	ptb1(b,c);
} else {
	ptb2(a,b,c);
}

function ptb1(b,c){
	if(b == 0) {
		if(c == 0) {
			document.write("Pt VSN");
		} else {
			document.write("Pt VN");
		}
	} else {
		document.write("Pt co nghiem la: " + (-b/c));
	}
}
function ptb2(a,b,c){
	var d = b*b - 4*a*c;
	if(d < 0) {
		document.write("Pt VN");
	} else {
		document.write("Pt co 2 nghiem la: " + ((-b-Math.sqrt(d))/(2*a)) + ", " + (-b+Math.sqrt(d))/(2*a));
	}
}