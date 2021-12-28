let expString = "";
let answerString = "";

let btnArray = document.getElementsByClassName("btn");
Array.from(btnArray).forEach((element) => {
    element.addEventListener("click", () => {
        let ch = element.textContent;
        let tempCh;
        let operatorsArray = ["+", "-", "*", "/", "%", "."];

        let idName = element.getAttribute("id");
        if (idName == "bt-division") {
            tempCh = "/";
        }
        else if (idName == "bt-mul") {
            tempCh = "*";
        }
        else if (idName == "bt-sub") {
            tempCh = "-";
        }
        else if (idName == "bt-sum") {
            tempCh = "+";
        }
        else {
            tempCh = ch;
        }
        if ((ch == "%" || tempCh == "/" || tempCh == "*") && expString == "") {
            console.log("ch is %,/*");
            return;
        }

        let isPreviousData = operatorsArray.some(element => element == expString[expString.length - 1]);
        let isCurrentData = operatorsArray.some(element => element == tempCh);
        console.log(expString[expString.length - 1]);
        console.log(ch);
        console.log(isPreviousData);
        console.log(isCurrentData);
        if ((isPreviousData && isCurrentData) && (expString[expString.length - 1] != ".") && (tempCh != ".")) {
            return;
        }
        if (ch == "=") {
            if (isPreviousData) {
                return;
            }
            if (expString != "") {
                expString = String(eval(expString))
                answerString = String(eval(expString))
                document.getElementById("ans").innerText = expString;
            }
            return;
        }
        if (idName == "bt-division") {
            expString = expString.concat("/");
            answerString = answerString.concat(ch);

        }
        else if (idName == "bt-mul") {
            expString = expString.concat("*");
            answerString = answerString.concat(ch);

        }
        else if (idName == "bt-sub") {
            expString = expString.concat("-");
            answerString = answerString.concat(ch);

        }
        else if (idName == "bt-sum") {
            expString = expString.concat("+");
            answerString = answerString.concat(ch);

        }
        else if (ch == "CE") {
            expString = expString.slice(0, -1);
            answerString = answerString.slice(0, -1);

        }
        else {
            expString = expString.concat(ch);
            answerString = answerString.concat(ch);
        }
        document.getElementById("ans").innerText = answerString;
    })
})