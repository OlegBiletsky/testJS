// 1.	Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.
arr1 = [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7];

let maxEl = arr1.reduce(function(a, b) {
    return Math.max(a, b);
});

console.log(maxEl);



// 2.	Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”]. Створити новий масив де будуть тільки Стрінгові значення.

arr2 = ["test", 12, undefined, null, -5, "javascript", "1", false, true, 0 , "!"];

let arrNew = arr2.filter( item => {
    if (typeof item === "string") {
        return item;
    }
});

console.log(arrNew);


// 3.	Дано колекцію - [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}] – Вивести всіх юзерів з типом user. Вивести юзерів які мають хоббі hiking. Додати можливість додати нове поле для всіх юзерів – job (true/false);
/*
let Peoples = [
    {name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, 
    {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, 
    {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"},
];
// Вивести всіх юзерів з типом user.
for (let i of Peoples) {
    if (i.type === "user") {
        console.log(i.name, i.type);
    };
};
// Вивести юзерів які мають хоббі hiking.
for (let j = 0; j<=Peoples.length-1; j++) {
    if(Peoples[j].hobby.includes("hiking")){
        console.log(Peoples[j].name, Peoples[j].hobby);
    };
};
// Додати можливість додати нове поле для всіх юзерів – job (true/false);
for (let i of Peoples) {
    if (i.job === undefined) {
        let new_value_job = confirm( ` Add job for ${i.name}? ` );
        i.job = new_value_job;
    };
    console.log(i);
};
*/

// 4.	Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з сторінки(додайте 1 рядок будь якого тексту) і сповіщати що це інтелектуальна власність власника.

function functionCopy() {
    alert("НЕ КОПІЮЙ МЕНЕ!!!!");
} 


// 5.	https://restcountries.eu/rest/v2/all – АПІ endpoint для країн. Вивести нумерований список з іменами всіх країн та її столицею на сторінку, назву країни зробити великими буквами.
