/*

<------------------------------------- Below code is made using referance ------------------------------------------->

let input = "";

function number(num) {
  input += num;
  updateValue();
}

function operator(op) {
  input += op;
  updateValue();
}

function calculate() {
  try {
    const result = eval(input);
    updateValue();
  } 
  
  catch (error) {
    console.error(error);
  }
}

function updateValue() {
  const resultInput = document.getElementById("result");
  resultInput.value = input;
}

************* not working **************

*/

