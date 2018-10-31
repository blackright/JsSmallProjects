var str = prompt('enter a word or a sentence')
function wordChanger(str) {
for (i = 0; i <= str.length; i++){
	str = str.replace('a','4').replace('e','3').replace('i','1').replace('o','0').replace('a','4');
	}
return str
}
console.log(wordChanger(str));