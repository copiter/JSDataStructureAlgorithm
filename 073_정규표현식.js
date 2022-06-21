var str = "JavaScript DataStructures 5050 H1E0L0LO data";

console.log(str.search(/50/));
console.log(str.search(/\d+/));
console.log(str.search(/^\d+$/));

var reg = /\d+$/;
console.log(reg.test("12a"));

var regLetter = /[a-zA-Z0-9]/;
console.log(regLetter.test("12d"));
console.log(regLetter.test(" "));

//질의 문자열
var uri = 'http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv';
var queryString = {};
uri.replace(
  new RegExp(/([^?=&]+)(=([^&]*))?/,"g"),
  function($0, $1, $2, $3){queryString[$1] = $3;}
);

console.log(queryString['product_id']);
console.log(queryString['category']);
console.log(queryString['query']);