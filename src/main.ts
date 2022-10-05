const VAILD_NUMBER_OF_DIGITS = 3;

let total: number = 0;
let cur: string = "0";
let operators: string[] = [];

const resultEl = <HTMLSpanElement>document.querySelector(".result");
const contentsEl = <HTMLElement>document.querySelector(".contents");

const render = (showingNum: string): void => {
  resultEl.textContent = showingNum;
};

const reset = (): void => {
  total = 0;
  cur = "0";
  operators = [];

  render(cur);
};

const onClickDigits = (strDigit: string): void => {
  if (cur.length >= VAILD_NUMBER_OF_DIGITS) {
    alert("3자리까지 입력가능합니다.");
    return;
  }

  cur = cur === "0" ? strDigit : cur + strDigit;
  render(cur);
};

const onClickOperator = (oper: string): void => {
  const prevOper: string = operators.length > 0 ? operators.shift()! : "";
  if (operators.length === 0) total = +cur;

  switch (prevOper) {
    case "+":
      total += +cur;
      break;
    case "-":
      total -= +cur;
      break;
    case "/":
      total /= +cur;
      break;
    case "*":
      total *= +cur;
      break;
  }

  cur = "0";

  if (oper !== "=") operators.push(oper);
  render(total + "");
};

const isNumber = (num: string): number => num.charCodeAt(0);

contentsEl.addEventListener("click", ({ target }) => {
  if (target) {
    const val: string = (target as HTMLButtonElement).textContent!;

    if (val === "AC") reset();
    else if (48 <= isNumber(val) && isNumber(val) <= 57) onClickDigits(val);
    else onClickOperator(val);
  }
});
