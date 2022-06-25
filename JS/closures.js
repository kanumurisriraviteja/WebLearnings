// Function Declaration
function increment (number){
return ++number;
}
console.log(increment(5));

// function expression
var i = function(number){
    return ++number;
}
console.log(i(5));

//self called function
(function increment(number) {
  console.log(++number);  
})(5);

let t = (function(){
    let t1=0;
    return function(a){
        return ++t1 + a;    
    };
})();
console.log(t(1));
console.log(t(1));
console.log(t(1));

var t1 = (function() {
    var t2 = 1;
    // this return will be treated as a object
    return {
        gett2() { return t2 },
        sett2(val) { t2 = val; return t2; },
        inct2 : function () { return ++t2; }
   }
})();

console.log(t1);
console.dir(t1);
console.log(t1.gett2());
console.log(t1.sett2(10));
console.log(t1.inct2());