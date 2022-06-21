/* console.log('Red Dragon'.indexOf('R'));
console.log('Red Drragon'.indexOf('r',6));
console.log('Red Drragon'.indexOf(' Dr')); */

var str = "He's my king from this day until his last day";
var cnt = 0;

// for(var i = 0; i < str.length; i++){
//   if(str.charAt(i) === 'a') cnt++;
// }

var pos = str.indexOf('a');
while(pos !== -1){
  pos = str.indexOf('a', pos+1);
  cnt++;
}

console.log(cnt);