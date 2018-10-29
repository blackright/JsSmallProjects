var wordList = ["apple", "have", "pear", "here"],
    wordCount = ["apple", "have", "pear", "here"];

areArraysSome(wordList, wordCount);

function areArraysSome(arr1, arr2) {
  for(fruits in arr1){
      console.log(arr1[fruits]);
  }
  for(numbers in arr2){
    console.log(arr2[numbers]);
  }
	if(arr1[fruits] == arr2[numbers]){
		console.log(" Arrays are the same")
	}else{
		console.log("Arrays Not the same")
	}
}
