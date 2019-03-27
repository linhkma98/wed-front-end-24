var n;
var k;
var j;
do{
  	n = prompt("Nhập cạnh hình vuông:");
  	n = parseInt(n);
  }while(isNaN(n) || n<=0);
for (var i =0; i<n; i++) {
	for (var k = 0; k<n-i; k++) {
		alert(" ")
	}
	for (var j=n-1; j <=n ; j++) {
		alert("*")
	}
}