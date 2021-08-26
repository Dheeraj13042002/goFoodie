// CallBack Function

// setTimeout(function(){
//   console.log("Timer");
// },5000)

// function x(y){
//   console.log("x");
//   y();
// }

// x(function y(){
//  console.log("y");
// });

// EVENT LISTNERS

// function attach() {
//   var count = 0;
//   document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("Button clicked", ++count);
//   });
// }

// attach();

function attach(){
 let count = 0;
 document.getElementById("clickHere").addEventListener("click",function whenclicked(){
   console.log("Done" , ++count);
 })
}
attach();

// function a(){
//   count++;
// }
// a();