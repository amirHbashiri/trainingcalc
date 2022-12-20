var root = document.querySelector(":root");
let cs = getComputedStyle(root);
let btn = document.getElementById("standard");
var buttons = document.querySelector(".same");
let roots = document.querySelector("html");

btn.addEventListener("click", () => {
  if (roots.getAttribute("data") === "main") {
    roots.setAttribute("data", "blue");
  } else if (roots.getAttribute("data") === "blue") {
    roots.setAttribute("data", "yellow");
  } else if (roots.getAttribute("data") === "yellow") {
    roots.setAttribute("data", "green");
  } else if (roots.getAttribute("data") === "green") {
    roots.setAttribute("data", "main");
  }
  // if (cs.getPropertyValue("--main-color") === "gray") {
  //   document.documentElement.style.setProperty("--main-color", "blue");
  // } else if (cs.getPropertyValue("--main-color") === "blue") {
  //   document.documentElement.style.setProperty("--main-color", "yellow");
  // } else if (cs.getPropertyValue("--main-color") === "yellow") {
  //   document.documentElement.style.setProperty("--main-color", "purple");
  // } else if (cs.getPropertyValue("--main-color") === "purple") {
  //   document.documentElement.style.setProperty("--main-color", "gray");
  // }
});
const mainResult = document.querySelector(".current-operand");
const prevOperate = document.querySelector(".previous-operand");

let currentresult = {
  Secoundnumber: "",
  Result: "",
};

let prevNum = {
  Firstnumber: "",
  Operator: "",
};

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiBtn = document.getElementById("multi");
const div = document.getElementById("division");
const equal = document.getElementById("equal");
const numberBtn = document.querySelectorAll(".same");
const del = document.getElementById("delete");
const radic = document.getElementById("radic");
const perc = document.getElementById("percent");
const all = document.getElementById("allclear");

const getResult = () => mainResult.textContent || "";

const showNO = (digit) => {
  if (mainResult.textContent === "0") {
    mainResult.textContent = "";
  }
  mainResult.textContent = getResult() + digit;
};

const sumresult = () => {
  let Sum =
    parseFloat(prevNum.Firstnumber) + parseFloat(currentresult.Secoundnumber);
  currentresult.Result = Sum;
  mainResult.textContent = currentresult.Result;
};

const subresult = () => {
  let Sub =
    parseFloat(prevNum.Firstnumber) - parseFloat(currentresult.Secoundnumber);
  currentresult.Result = Sub.toString();
  mainResult.textContent = currentresult.Result;
};

const multiresult = () => {
  let multi =
    parseFloat(prevNum.Firstnumber) * parseFloat(currentresult.Secoundnumber);
  currentresult.Result = multi;
  mainResult.textContent = currentresult.Result;
};

const dividresult = () => {
  let divid =
    parseFloat(prevNum.Firstnumber) / parseFloat(currentresult.Secoundnumber);
  currentresult.Result = divid;
  mainResult.textContent = currentresult.Result;
};

const radicresult = () => {
  let radic = parseFloat(prevNum.Firstnumber);
  currentresult.Result = Math.sqrt(radic);
  mainResult.textContent = currentresult.Result;
};

const percentresult = () => {
  let percent =
    (parseFloat(prevNum.Firstnumber) *
      parseFloat(currentresult.Secoundnumber)) /
    100;
  currentresult.Result = percent;
  mainResult.textContent = currentresult.Result;
  currentresult.Secoundnumber = currentresult.Result;
};

const percentfunction = () => {
  prevNum.Firstnumber = mainResult.textContent;
  currentresult.Secoundnumber = mainResult.textContent;
};

const sumfunction = () => {
  prevNum.Firstnumber = mainResult.textContent;
  currentresult.Secoundnumber = mainResult.textContent;
};

const subfunction = () => {
  prevNum.Firstnumber = mainResult.textContent;
  currentresult.Secoundnumber = mainResult.textContent;
};

const multifunction = () => {
  prevNum.Firstnumber = mainResult.textContent;
  currentresult.Secoundnumber = mainResult.textContent;
};

const divisionfunction = () => {
  prevNum.Firstnumber = mainResult.textContent;
  currentresult.Secoundnumber = mainResult.textContent;
};

const radicfunction = () => {
  prevNum.Firstnumber = mainResult.textContent;
};

plusBtn.addEventListener("click", () => {
  prevOperate.textContent = `${mainResult.textContent}` + "+";
  prevNum.Firstnumber = mainResult.textContent;
  prevNum.Operator = "+";
  console.log(prevNum.Operator);
  sumfunction();
});

minusBtn.addEventListener("click", () => {
  prevOperate.textContent = `${mainResult.textContent}` + "-";
  prevNum.Firstnumber = mainResult.textContent;
  prevNum.Operator = "-";
  console.log(prevNum.Operator);
  subfunction();
});

multiBtn.addEventListener("click", () => {
  prevOperate.textContent = `${mainResult.textContent}` + "x";
  prevNum.Firstnumber = mainResult.textContent;
  prevNum.Operator = "X";
  console.log(prevNum.Operator);
  multifunction();
});

div.addEventListener("click", () => {
  prevOperate.textContent = `${mainResult.textContent}` + "/";
  prevNum.Firstnumber = mainResult.textContent;
  prevNum.Operator = "/";
  console.log(prevNum.Operator);
  divisionfunction();
});

radic.addEventListener("click", () => {
  prevNum.Firstnumber = `${mainResult.textContent}` + `&Sqrt;`;
  prevNum.Firstnumber = mainResult.textContent;
  prevNum.Operator = "rad";
  console.log(prevNum.Operator);
  radicfunction();
  radicresult();
});

perc.addEventListener("click", () => {
  prevNum.Firstnumber = `${mainResult.textContent}` + `${prevNum.Operator}`;
  prevNum.Firstnumber = mainResult.textContent;
  console.log(prevNum.Operator);
  percentfunction();
  percentresult();
});

all.addEventListener("click", () => {
  prevNum.Firstnumber = "";
  mainResult.textContent = "0";
  currentresult.Result = "";
  prevOperate.textContent = "";
  currentresult.Secoundnumber = "";
});

// del.addEventListener("click", () => {
//   var str = currentresult.Secoundnumber;
//   for (var i = str.length; i >= 0; i--) {
//     mainResult.textContent = str.slice(0, str.length - 1);
//   }
// });

equal.addEventListener("click", () => {
  console.log(prevNum.Operator);
  var el = prevNum.Operator;
  switch (el) {
    case "+":
      sumresult();
      break;
    case "-":
      subresult();
      break;
    case "X":
      multiresult();
      break;
    case "/":
      dividresult();
      break;
    default:
      alert("what the hell are you doing!");
      break;
  }
});

del.addEventListener("click", () => {
  var str = currentresult.Secoundnumber;
  currentresult.Secoundnumber = mainResult.textContent;
  currentresult.Secoundnumber = currentresult.Secoundnumber.slice(
    0,
    currentresult.Secoundnumber.length - 1
  );
  mainResult.textContent = currentresult.Secoundnumber;
  if (str.length == "1") {
    currentresult.Secoundnumber = "0";
    mainResult.textContent = currentresult.Secoundnumber;
  }
});

numberBtn.forEach((el) => {
  el.addEventListener("click", () => {
    showNO(el.textContent);
  });
});

// class Calcultor {
//   constructor(previousOperandandTextElement, currentOperationandTextElement) {
//     this.previousOperandandTextElement = previousOperandandTextElement;
//     this.currentOperationandTextElement = currentOperationandTextElement;
//     this.clear();
//   }
//   clear() {
//     this.currentOperand = "";
//     this.previousOperand = "";
//     this.operation = undefined;
//   }
//   delete() {
//     this.currentOperand = this.currentOperand.toString().slice(0, -1);
//   }
//   appendNumber(nubmer) {
//     this.currentOperand = this.currentOperand.toString() + nubmer.toString();
//   }
//   chooseOperation(operation) {
//     if (this.currentOperand === "") return;
//     if (this.previousOperand !== "") {
//       this.compute();
//     }
//     this.operation = operation;
//     this.previousOperand = this.currentOperand;
//     this.currentOperand = "";
//   }
//   compute() {
//     let computation;
//     const prev = parseFloat(this.previousOperand);
//     const current = parseFloat(this.currentOperand);
//     if (isNaN(prev) || isNaN(current)) return;
//     switch (this.operation) {
//       case "+":
//         computation = prev + current;
//         break;
//       case "-":
//         computation = prev - current;
//         break;
//       case "*":
//         computation = prev * current;
//         break;
//       case "/":
//         computation = prev / current;
//         break;
//       default:
//         return;
//     }
//     this.currentOperand = computation;
//     this.operation = undefined;
//     this.previousOperand = "";
//   }

//   getDisplayNumber(nubmer) {
//     const stringNumber = number.toString();
//     const integerDigits = parseFloat(stringNumber.split(".")[0]);
//     const decimalDigits = stringNumber.split(".")[1];
//     let integerDisplay;
//     if (isNaN(integerDigits)) {
//       integerDisplay = "";
//     } else {
//       integerDisplay = integerDigits.toLocaleString("en", {
//         maximumFractionDigits: 0,
//       });
//     }
//     if (decimalDigits != null) {
//       return `${integerDisplay}.${decimalDigits}`;
//     } else {
//       return integerDisplay;
//     }
//   }

//   updateDisplay() {
//     this.currentOperationandTextElement.innerText = this.getDisplayNumber(
//       this.currentOperand
//     );
//     if (this.operation != null) {
//       this.previousOperandandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
//     } else {
//       this.previousOperandandTextElement.innerText = "";
//     }
//   }
// }

// const numberButtons = document.querySelectorAll("#Number");
// const operationButtons = document.querySelectorAll("#Operation");
// const equlButton = document.querySelector("#Equal");
// const deleteButton = document.querySelector("#Delete");
// const allClearButton = document.querySelector("#Allclear");
// const previousOperandandTextElement =
//   document.querySelector("#Previous-operand");
// const currentOperationandTextElement =
//   document.querySelector("#Current-operand");

// const calcultor = new Calcultor(
//   previousOperandandTextElement,
//   currentOperationandTextElement
// );

// numberButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     calcultor.appendNumber(button.innerText);
//     calcultor.updateDisplay();
//   });
// });

// operationButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     calcultor.chooseOperation(button.innerText);
//     calcultor.updateDisplay();
//   });
// });

// equlButton.addEventListener("click", (button) => {
//   calcultor.compute();
//   calcultor.updateDisplay();
// });

// allClearButton.addEventListener("click", (button) => {
//   calcultor.clear();
//   calcultor.updateDisplay();
// });

// deleteButton.addEventListener("click", (button) => {
//   calcultor.delete();
//   calcultor.updateDisplay();
// });
