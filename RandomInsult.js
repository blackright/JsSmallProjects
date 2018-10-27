var bodyPart = ["face", "foot", "nose", "hand", "head"];
var adjective = ["hairy and", "extremely", "insultingly", "astonishingly"];
var adjectiveTwo = ["stupid", "gigantic", "fat", "horrid", "scary"];
var animal = ["baboon", "sasquatch", "sloth", "naked cat", "warthog"];

var randomInsult = (function() {
  var bp, a, a2, an;
  var bp = bodyPart[Math.floor(Math.random() * 5)];
  var a = adjective[Math.floor(Math.random() * 4)];
  var a2 = adjectiveTwo[Math.floor(Math.random() * 5)];
  var an = animal[Math.floor(Math.random() * 5)];
  var insult = "Your" + " " + bp + " " + "is more" + " " + a + " " + a2 + " " + "than a" + " " + an + "'s" + " " + bp + ".";

  alert(insult);
});

document.getElementById('test').addEventListener('click', randomInsult, false);