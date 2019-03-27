var n;
var gt=1;
var S=0;
do{
  	n = prompt("Nhập n:");
  	n = parseInt(n);
  }while(isNaN(n) || n<=0);
for (var i =1; i <=n; i++) {
	gt = gt*i;
	S = S + i/gt;
}
alert("Tổng là "+S)