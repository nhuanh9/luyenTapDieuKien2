var a;
var b;
a = eval(prompt('Nhập a:'));
b = eval(prompt('Nhập b:'));
document.writeln('Giai PT: '+a+'*x+'+b+'=0');
document.writeln('');
function gpt(){
	if(a==0){
		if (b == 0) {
			alert('PT vo so nghiem!');
		}
		else {
			alert('PT vo nghiem!');
		}
	} else{
		alert('PT co nghiem la: '+(-b/a));
	}
}