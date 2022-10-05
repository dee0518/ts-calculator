"use strict";
var _a;
var VAILD_NUMBER_OF_DIGITS = 3;
var BASE_DIGIT = 10;
var total = 0;
var cur = "0";
var operator = [];
var resultEL = document.querySelector(".result");
var render = function (showingNum) {
    resultEL.textContent = showingNum;
};
var isNumber = function (num) { return num.charCodeAt(0); };
(_a = document.querySelector(".contents")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (_a) {
    var target = _a.target;
    if (target) {
        var val = target.textContent;
        var showNum = cur;
        if (val === "AC") {
            total = 0;
            cur = "0";
            operator = [];
            showNum = cur;
        }
        else if (48 <= isNumber(val) && isNumber(val) <= 57) {
            if (cur.length < 3)
                cur = +(cur + val) + "";
            else
                alert("3자리까지 입력가능합니다.");
            showNum = cur;
        }
        else {
            if (operator.length) {
                var oper = operator.shift();
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
            }
            else {
                total = +cur;
            }
            cur = "0";
            showNum = total + "";
            operator.push(val);
        }
        render(showNum);
    }
});
