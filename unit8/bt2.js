var n;
var s=0;
do{
  	n = prompt("Nhập n:");
  	n = parseInt(n);
  }while(isNaN(n) || n<=0);
for (var i=0; i <= n; i++) {
	s=s+i;
}
alert("Tổng của 1+2+3+...+n là "+s);