var a=[10,30,50];
document.write(a+"<br>");
var c;
let b=a.map(function(e){
    c=Math.floor(3.14*e*e);
    
    //document.write(c+"<br>");
    return c;
})
document.write(b);