var wordList = ["apple", "have", "pear", "here"],
    wordCount = [3, 1, 3, 5];

areArraysSome(wordList, wordCount);

function areArraysSome(arr1, arr2) {
  for(fruits in arr1){
      console.log(arr1[fruits]);
  }
  for(numbers in arr2){
    console.log(arr2[numbers]);
  }
}