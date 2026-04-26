
//ques 1
let p = document.getElementById("display");
let res = "";

for(let i=2; i<=100; i+=2){
res += i + (i<100 ? "  " : "");

}

console.log(res);
p.innerHTML = res;

//ques 2

function calculate(num1, num2, op) {
    let ans;
    
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (op) {
        case "+":
            ans = n1 + n2;
            break;
        case "-":
            ans = n1 - n2;
            break;
        case "*":
            ans = n1 * n2;
            break;
        case "/":
            ans = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
            break;
        default:
            ans = "Invalid Operator";
    }
    return ans;
}


document.getElementById("btn").addEventListener("click", function() {
    const val1 = document.getElementById("n1").value;
    const val2 = document.getElementById("n2").value;
    const op = document.getElementById("operator").value;
    
    const output = calculate(val1, val2, op);
    document.getElementById("res").innerText = "Result: " + output;
});

//ques 3

function salaryTax(salary){
let rate;
switch(true){
case (salary>0 && salary<=500000):
    rate = 0;
    break;
case (salary>500000 && salary<=1000000):
    rate = 0.10;
    break;
case (salary>1000000 && salary<=1500000):
    rate = 0.20;
    break;
case (salary>1500000):
    rate = 0.30;
    break;
default:
    rate = 0;
}

const amt = salary*rate;
return amt;
}

document.getElementById("tax").addEventListener("click", function() {
    const val = document.getElementById("inp").value;
    const output = salaryTax(val);
    document.getElementById("stax").innerText = "Tax Amount " + output;
});

//ques 4

function sODP(n1, n2) {
    let sum = 0;

    while (n1 > 0 || n2 > 0) {
        let d1 = n1 % 10; 
        let d2 = n2 % 10;  

        sum += d1 * d2;

        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }

    return sum;
}

document.getElementById("done").addEventListener("click", function() {
    const x = document.getElementById("v1").value;
    const y = document.getElementById("v2").value;
    const o = sODP(x, y);
    document.getElementById("sp").innerText = o;
});

