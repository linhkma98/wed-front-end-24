var n;
var m;
var k;
var S=0;
do{
  	n = prompt("Nhập n:");
  	n = parseInt(n);
  }while(isNaN(n) || n<=0);
do{
  	m = prompt("Nhập m:");
  	m = parseInt(m);
  	if(n>m){
  		alert("n phải nhỏ hơn hoặc bằng m")
  	}
  }while(isNaN(m) || n>m);
  do{
  	k = prompt("Nhập k:");
  	k = parseInt(n);
  }while(isNaN(k) || k<=0);
for (var i =n+1; i <= m-1; i++) {
	if(i%k==0){
		S=S+i;
	}
}
alert("Tổng là "+S)