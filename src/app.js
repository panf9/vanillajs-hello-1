/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

/**
 * The dog ate my homework before the class
 *
 * My grandma broke the keys while I was praying
 *
 * My bird peed the car during my lunch
 *
 * His turtle crushed my homework when I finished
 *
 *
 *
 */

let excuse = {
  a: [who[0], action[0], what[0], when[0]],
  b: [who[1], action[3], what[1], when[4]],
  c: [who[3], action[1], what[2], when[3]],
  d: [who[2], action[2], what[0], when[2]],
  e: [who[1], action[2], what[2], when[0]]
};

let random = Math.floor(Math.random() * Object.keys(excuse).length);
let msj = Object.values(excuse)[random];
let txt = "";
// for ( let i in msj ){
//   txt += msj[i] + ' ';
// }
msj.map(element => (txt += element + " "));
// console.log(txt)

txt = txt.slice(0, -1);
console.log(txt);
window.onload = function() {
  //write your code here
  const text = document.getElementById("excuse");
  text.innerHTML = txt + ".";
  console.log("Hello Rigo from the console!");
};
