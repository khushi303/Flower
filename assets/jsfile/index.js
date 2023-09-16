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
//5
// var is = "is"
// console.log(is)
//6
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
var t = 1; //global scope
const b = "ghghg"; //block scope
let c = true; //block scope
if (true) {
    var t = 3;
    let c = true;
    const b = "ghghg";
}
console.log(t);
console.log(c);
console.log(b);
//dom
document.getElementById("sec-1").classList.add("anime1");
console.log(document.getElementById("sec-1"));
console.log(document.getElementsByClassName("anime1"));
// document.getElementById("hi").style.background = "red";

function fun() {
    const name = "khushi";
    var age = 20;
    function nam() {
        console.log(name);
        return
    }
    nam();
    console.log(age);
}
fun();
