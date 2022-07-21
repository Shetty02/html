// SCOPE CHAIN

// console.log("SCOPE CHAIN");

// var aa= 10;
// function a(){
//     function b() {
//         function c(){
//             console.log(aa);
//         }
//         c();
//     }
//     b();
// }
// a();


// CLOSURES

// console.log("CLOSURES");

// function a() {
//     var b = 10;
//     function c() {
//         // console.log("Hey Guys");
//         console.log(b);
//     }
//     return c;
//     // c();
// }
// var x  = a();
// console.log(x);
// x();


// function a() {
//     var x = 10;
//     function b() {
//        var y = 20;
//         function c() {
//          console.log(x, y);
//         }
//         c();
//     }
//     b();
// }

// a();

function a() {
    const x = 10;
    function b() {
        console.log(x);
    }
    return b;
}

const p = a();
p();
// a()();