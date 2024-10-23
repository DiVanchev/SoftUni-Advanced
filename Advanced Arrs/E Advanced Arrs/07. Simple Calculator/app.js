function calculator() {
    let num1Element, num2Element, resultElement;
  
    return {
      init(selector1, selector2, resultSelector) {
        num1Element = document.querySelector(selector1);
        num2Element = document.querySelector(selector2);
        resultElement = document.querySelector(resultSelector);
      },
      add() {
        const num1 = Number(num1Element.value);
        const num2 = Number(num2Element.value);
        resultElement.value = num1 + num2;
      },
      subtract() {
        const num1 = Number(num1Element.value);
        const num2 = Number(num2Element.value);
        resultElement.value = num1 - num2;
      }
    };
  }
  
  const calculate = calculator();
  calculate.init('#num1', '#num2', '#result');
  