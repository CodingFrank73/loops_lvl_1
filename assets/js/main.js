// ------------- Aufgabe 1_1 ----------------
const nummer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < nummer.length; i++) {
    console.log("Hello World " + nummer[i]);
}

// ------------- Aufgabe 1_2 ----------------
let numArray = [];

for (let i = 0; i <= 10; i++) {
    numArray.push(i);
}

console.log(numArray);

// ------------- Aufgabe 1_3 ----------------
let counter = 0;

while (counter < 10) {
    console.log("Hallo World " + counter);
    counter++;
}

// ------------- Aufgabe 1_4 ----------------
let names = ['Eric', 'Steffen', 'Finn', 'Simon', 'Franzi', 'Kim', 'Sergio'];

for (i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// ------------- Aufgabe 1_5 ----------------
var apple1 = { color: "red", size: "big" };
var apple2 = { color: "green", size: "small" };
var apple3 = { color: "yellow", size: "big" };
var apples = [apple1, apple2, apple3];

for (i = 0; i < apples.length; i++) {
    console.log(apples[i].size);
}

// ------------- Aufgabe 1_6 ----------------
let retArray = [];
let j = 1;

while (j <= 100) {
    retArray.push("image_" + j)
    j++;
}
console.log(retArray);

// ------------- Aufgabe 1_7 ----------------
let k = 0;
do {
    k++
    console.log("The number is " + k);
} while (k < 5);

// ------------- Aufgabe 1_8 ----------------
let z = 0;

console.log("Even numbers less then 20");
do {
    z++;
    if (z % 2 == 0) { console.log(z); }
} while (z < 19);

// ------------- Aufgabe 1_9 ----------------
let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']

let a = document.getElementById("value");

function get() {
    words.forEach(e => {
        if (e.length == a.value) {
            console.log(e);
            document.getElementById('result').innerHTML += `<h1>${e}</h1><br>`;
        }

    });

};

function add(value) {
    words.push(value);
    console.log(words);
}

