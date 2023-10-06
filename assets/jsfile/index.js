//1
// var x = Symbol('abc')
// console.log(x)
// console.log(typeof x)
//2
// var xyz = "abc"
// var lmn = 123
// var y = { xyz, lmn }
// console.log(y)
// console.log(y.lmn)
//3
// var a = 123
// var b = "asvv"
// var c = Symbol('fkfkfkf')
// var d = { a, b, c }
// console.log(d)
// console.log(d.b)
//4
// var smile = "cake"
// console.log(smile)
// //5
// var is = "is"
// console.log(is)
// //6
// var beautiful = "sweat"
// console.log(beautiful)
//7
// function fun() {
//     var abc = 123
//     var lmn = "tftlntrb"
//     var a = { abc, lmn }
//     return a
// }
// console.log(fun().lmn)
// console.log(fun())
// 8
// var l = [1, 3, 4, 5, 64, 44]
// console.log(l)
// console.log(l[4])
//9
// function khushi(a, b) {
//     console.log(a + b)
// }
// khushi(4, 5)
// khushi(6, 5)
// khushi(7, 5)
//9
// const kim = [
//     { ab: 122 },
//     [
//         { xyr: 456 }
//     ]
// ]
// console.log(kim[0].ab)
// console.log(kim[1][0].xyr)
//10
// function live(k, l, m, n) {
//     console.log(k - l - m)
//     console.log(l - m - n)
//     console.log(k * l * m * n)
//     function five(kl, km, lk) {
//         console.log(kl - km)
//         console.log(km - lk)
//     }
//     five(9, 7, 5)
//     five(99, 77, 11)
//     return live
// }
// live(444, 333, 222, 111)
//11
// l = 9
// n = 8
// const d = (l % n)
// console.log(d);
//12
// m = 4
// k = 8
// var t = (m * k) - 9;
// console.log(m * k);
// console.log(t)
// k = 5
// l = 8
// k--;
// var lk = (k + l)
// console.log(lk);
//13
// tk = "90"
// jk = "20"
// var tjk = (tk > jk)
// console.log(tjk)
//14
// jm = "14"
// ms = 14
// var jms = (jm == ms)
// var jms = (jm === ms)
// console.log(jms)
//15
// rm = 67
// jin = 47
// var rn = (rm += jin)
// console.log((rn) + "<br>" +
//     (rn) * 6);
//16
// var s = 45
// var t = 34
// console.log(s > 0 && t < s)
// var hj = 89
// var kl = 39
// console.log(hj > 90 || kl < 40)
//scope
// var t = 1; //global scope
// const b = "ghghg"; //block scope
// let c = true; //block scope
// if (true) {
//     var t = 3;
//     let c = true;
//     const b = "ghghg";
// }
// console.log(t);
// console.log(c);
// console.log(b);
//dom
// document.getElementById("sec-1").classList.add("anime1");
// console.log(document.getElementById("sec-1"));
// console.log(document.getElementsByClassName("anime1"));
// document.getElementById("hi").style.background = "red";

// function fun() {
//     const name = "khushi";
//     var age = 20;
//     function nam() {
//         console.log(name);
//         return
//     }
//     nam();
//     console.log(age);
// }
// fun();

// conditional
// let t = 5;
// if (t == 3) {
//     console.log("excuted")
// } else if (t > 6) {
//     console.log("excuted")
// } else {
//     console.log("failed")
// }

switch (b = 3, b = 4) {
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;
    case 5:
        console.log("may")
        break;
    default:
        console.log("45454545454545454")
        break;
}

// function hii() {
//     document.getElementById("hi").innerHTML = Date();
// }

// let btn = document.getElementById("btn");
// let onbtn = document.getElementById("onbtn");
// let offbtn = document.getElementById("offbtn");

// onbtn.addEventListener("click", function () {
//     btn.classList.add("bg_yellow")
// })

// offbtn.addEventListener("click", function () {
//     btn.classList.remove("bg_yellow")
// })

// function myname() {
//     var p = document.getElementById("pwds")
//     if (p.type === "password") {
//         p.type = "text";
//     } else {
//         p.type = "password";
//     }
// }
// var a = [1, 3, 4, 5, 7, 3, 7, 4, 3, 2]
// var b = a.filter((e) => e < 2)
// console.log(b);

//---------------------string-method-----------------------
// slice(1);
let ant = "khushi,tarun,sakshi";
let bat = ant.slice(7);
console.log(bat);

//charAt(2);
let cat = "khushi,tarun,sakshi";
let dog = cat.charAt(5);
console.log(dog);

//concat(3);
let egg = "khushi,tarun,sakshi";
let fog = egg.concat(" " + "alka");
console.log(fog);

//indexof(4);
let goat = ["khushi", "tarun", "sakshi"];
console.log(goat.indexOf("khushi"));

//startwith(5);
let hot = "this is khushi"
console.log(hot.startsWith("this"));

//endwith(6);
let ink = "this is khushi"
console.log(ink.endsWith("khushi"));

//split(7);
let jk = "1,2,3,4";
let kh = jk.split("3");
console.log(kh);

//-----------------------------number------------------------------------//
//parsent();  =  change no. to string


//tofixed(); = print decimal no.
let loki = 24.4556543433
console.log(loki.toFixed(4));

//toprecision(); = print the no. and decimal no. both
let min = 2343.65554;
console.log(min.toPrecision(5));

//tostring(); = change no. in string
let namjoon = 12345;
let jin = namjoon.toString();
console.log(typeof jin)


//----------------------------------array---------------------------------//
//filter(); = get new array from existing array by condition
let okie = [1, 3, 5, 7, 0, 4, 7];
let dokie = okie.filter((e) => e + 6);
console.log(dokie);

//map(); = give a new array in boolean
let pinki = [1, 3, 4, 5, 6, 7, 3, 6, 7, 4];
let rakhi = pinki.map((s) => s > 5);
console.log(rakhi);

//find(); = print a no. who satisfied the condition order-first
let queen = [1, 3, 4, 6, 8, 4, 3, 2];
let king = queen.find((e) => e > 5);
console.log(king);

//sort(); arrange no. wise
let suga = [1, 2, 3, 2, 4, 2, 4, 2, 4, 8, 2, 4, 5, 5, 3];
let proud = suga.sort();
console.log(suga);

//slice(); print a no by index no.
let taehyung = [1, 4, 3, 6, 4, 3, 8, 6, 34];
let jungkookie = taehyung.slice(3, 7);
console.log(jungkookie);

//splice();
let unique = [1, 2, 6, 7, 5, 8]
unique.splice(4, 0, 3);
console.log(unique);

//square no.
for (let a = 0; a <= 50; a++) {
    console.log(Math.pow(a, 2));
}

// two digit
let k = 12;
let h = k.toPrecision().length;
console.log(h);

//with if else
let r = 1234;
let o = r.toPrecision().length;
console.log(o)
if (o == 2) {
    console.log(true)
} else if (o !== 2) {
    console.log(false)
}