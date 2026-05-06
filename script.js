let allbtn = document.querySelectorAll("button"); //node-list of all btns
let display  = document.querySelector(".display");
// allbtn.forEach(function(val) {
//     val.addEventListener('click',function() {
//       if (val.innerText == "DEL") {
//           display.value = display.value.slice(0, -1); // using slice we are addng backspace

//       }
//       else if (val.innerText === "=")
//         { display.value = eval(display.value) //eval caute the value if the value avail in string
//   }
//      else if (val.innerText === "AC"){
//        display.value = ""
//      }
//       else
//     display.value += val.innerText

//   })

// });



// // making calculator using without eval
// let num1 = null;
// let op = null;
// let operator = ["+","-","/","%","*","**"];

// allbtn.forEach(function (val) {
//   val.addEventListener("click", function getvalue() {
//     // console.log(val);
   
//     if (val.innerText === '=') {
//       calculation() // = click par calculation run hogi
//     }

// else if (val.innerText === "AC" ){
//   display.value = " "
// }

// else if (val.innerText === "DEL"){
// display.value =  display.value.slice(0,-1)
// }
//   else  display.value += val.innerText;
//   });
// });


// function calculation() {
//   let result ;
//  for (let i = 0; i < operator.length; i++) { // running loop on operator
// if (display.value.includes(operator[i])) {
//   op = operator[i];
//   console.log(op);
//   let parts = display.value.split(op) // breaking into array num1 last num  with  operator
//   console.log(parts);
//   num1 =parts[0]
//   num2 =parts[1]
//   break;
// }  
//  }
//  if (op=== '+') {
//   display.value = Number(num1) + Number(num2)
//  }

// else if (op === '-') {
//     display.value = Number(num1) -  Number(num2)
// }

// else if (op === '*') {
//     display.value = Number(num1) * Number(num2)
// }

// else if (op === '%') {
//     display.value = Number(num1) % Number(num2)
// }

// else if (op === '/') {
//     display.value = Number(num1) / Number(num2)
// }

// else if (op === '**') {
//     display.value = Number(num1) ** Number(num2)
// }

// }


// making the calculator works with multiple opernds


// Button clicks
allbtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    
    if (btn.innerText === "=") {
      calculation();
    }

    else if (btn.innerText === "AC") {
      display.value = "";
    }

    else if (btn.innerText === "DEL") {
      display.value = display.value.slice(0, -1);
    }

    else {
      display.value += btn.innerText;
    }

  });
});


// 🔥 MAIN CALCULATION FUNCTION (no eval)
function calculation() {

  // Step 1: string → tokens
let tokenArr = display.value.match(/(\d+|\+|\*|\-|\**|\/|\%)/g) // break the display value into roken array jo n=match hoys
//step 2 assngning the first number: 
if (!tokenArr) display.value = "Error"

let result = Number(tokenArr[0]);
// step 3 running loop on token to make calculation 
for (let i = 1; i < tokenArr.length; i+=2) { // number=0 operand =1 number =2 operand = 3

  let op = tokenArr[i]
  let num = Number(tokenArr[i+1]);// same ky loop 1 par run huwa tou 2 index = num value\

if (op === '+')  result += num 
else if (op === '-')  result -= num
else if (op === '%')  result %= num
else if (op === '/')  result /= num
else if (op === '*')  result *= num
else if (op === '**')  result **= num
}

display.value = result
}