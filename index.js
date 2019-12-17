var mainCode = "";

function orderOfPressOnDivs(n) {
    var code = n;
    mainCode += code;
    console.log("main code" + mainCode);
    var Encode=encode();
    if (mainCode == Encode){
        var a = document.createElement('a');
a.setAttribute('href','https://github.com/PizzamanJ10/lolol/archive/master.zip');
a.innerHTML = 'https://github.com/PizzamanJ10/lolol/archive/master.zip';
document.getElementsByTagName('body')[0].appendChild(a);
document.getElementsByTagName('body')[0].innerHTML += '<a href="'+desiredLink+'">'+desiredText+'</a>';
}
}
function encode(){
var encrypt="3?6?9?12?15";
var res = encrypt.split("?");
var decrypt="";
for(var i=0;i<res.length;i++)
decrypt+=res[i];
var a = parseInt(decrypt);
return a;
}