//alert('hello world ');
//var val;
//confirm("how are you")
//if (val == true){
	//alert("good");
//}
//else{
	//alert("not good");
//}
//var val;
//if (val != null){
	//document.write("<b style='color:red'>"+val+"</b>");
//}else alert("nhập họ tên đi");

// var a;
// var b;
// do{
// 	a=prompt("Nhập a:");
// 	a=parseFloat(a);
// }
// while (isNaN(a));
// do{
// 	b=prompt("Nhập b:");
// 	b=parseFloat(b);
// }
// while (isNaN(b));

// if (a==0 && b==0){
// 	alert("Pt vô số nghiệm:");
// }else alert("pt có nghiệm:"+(-b/a));

// do{
// 	n = prompt("Nhập n:");
// 	n = parseInt(n);
// }while(isNaN(n) || n<=0);
// var tong=0.0;
// for (var i = 0; i < n; i++) {
// 	tong = tong + (i+1)/(i+2);
// }
// alert(tong);

// var mang = [];
// mang.push(3);
// mang.push(4);

// mang = new Array(10);
// mang[i]

// do{
//  	n = prompt("Nhập n:");
//  	n = parseInt(n);
//  }while(isNaN(n) || n<=0);
//  var mang = new Array(n);
//  for (var i =0; i<n; i++) {
//  	do{
// 	mang[i] = prompt("Nhập phần tử thứ: "+(i+1));
// 	mang[i] = parseInt(n);
//  }while(isNaN(mang[i]) || mang[i]<=0);
//  }
//  var tong =0;
//  for (var i =0; i < n; i++) {
//  	tong = tong + mang[i]
//  }

function enterNumberic(thongBao){
	var m;
	do{
		m = prompt("Nhập " + thongBao + ":");
		m = parseInt(m);
	}
	while(isNaN(m) || m<=0);
	return m;
}
var n;
n = enterNumberic("n");
var mang = new Array(n);
for (var i = 0; i < n; i++) {
	mang[i] = enterNumberic("phần tử thứ"+(i+1))
}
var tong =0;
for (var i = 0; i < n; i++) {
	tong = tong + mang[i]
}
alert(tong);