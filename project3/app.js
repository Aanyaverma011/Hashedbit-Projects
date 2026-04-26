//ques 1

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam",
  "Bihar", "Chhattisgarh", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan",
  "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const res = states.filter(state=>{
    const firstChar = state[0].toLowerCase();
    return !['a', 'e', 'i', 'o', 'u'].includes(firstChar);
});

console.log(res);

//ques 2
let str = 'I love my India';
let ans = str
    .split(" ")    
    .reverse()        
    .join(" ");       

console.log(ans);

//ques 3
let string = 'INDIA';
let arr = string.split("");
arr.splice(3, 0, 'O', 'N', 'E', 'S');
let out = arr.join("");
console.log(out);

//ques 4
let s = "I am a third year Btech student";
str = str.toLowerCase();

let vowels = 0;
let consonants=0;

for(let i=0; i<s.length; i++){
if(s[i]>='a' && s[i]<='z'){
if(s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u') vowels++;
else consonants++;
    }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);

//ques 5
//Question not visible

//ques 6
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let x = inputArr.filter(a =>{
  return a>5;
})
console.log(x);

//ques 7
const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

const answer = students.map(stu => {
    const total = stu.scores.reduce((sum, score) =>sum+score, 0);
const avg = total/stu.scores.length;

return {
    name: stu.name,
    average: avg
};
});

console.log(answer);

//ques 8
function repeatedDigitSum(num) {
    while (num >= 10) {   
        let sum = 0;

        while (num > 0) {
            sum += num % 10;   
            num = Math.floor(num / 10);
        }

        num = sum;  
    }
    return num;
}


console.log(repeatedDigitSum(456));


//ques 9
let para = "I love programming in JavaScript. It is very interesting!";
function count(p){
return p.split(" ").length;
}

console.log(count(para));

//ques 10
let i = "Hello";
let k = "";
for(let j=i.length-1; j>=0; j--){
k+=i[j];
}
console.log(k);

//ques 11

const bacche = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

let result = {};

for (let student in bacche) {
    let total = 0;
    let count = 0;

    for (let sub in bacche[student]) {
        total += bacche[student][sub];
        count++;
    }

    result[student] = {
        average: Math.floor(total / count)
    };
}

console.log(result);

