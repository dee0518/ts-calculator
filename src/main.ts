const VAILD_NUMBER_OF_DIGITS = 3;
const BASE_DIGIT = 10;

let total: number = 0;
let cur: string = "0";
let operator: string[] = [];

const resultEL = <HTMLSpanElement>document.querySelector(".result");
const render = (showingNum: string) => {
  resultEL.textContent = showingNum;
};

const isNumber = (num: string): number => num.charCodeAt(0);

document.querySelector(".contents")?.addEventListener("click", ({ target }) => {
  if (target) {
    const val: string = (target as HTMLButtonElement).textContent!;
    let showNum: string = cur;

    if (val === "AC") {
      total = 0;
      cur = "0";
      operator = [];
      showNum = cur;
    } else if (48 <= isNumber(val) && isNumber(val) <= 57) {
      if (cur.length < 3) cur = +(cur + val) + "";
      else alert("3자리까지 입력가능합니다.");

      showNum = cur;
    } else {
      if (operator.length) {
        const oper = operator.shift();

        switch (oper) {
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
      } else {
        total = +cur;
      }

      cur = "0";
      showNum = total + "";
      operator.push(val);
    }

    render(showNum);
  }
});
