var pw = [];
var isSymbols = confirm('Do you want symbols in your password?'); 
var isNumbers = confirm('Do you want numbers in your password?');
var isLowerCase = confirm('Do you want lowercase letters in your password?');
var isUpperCase = confirm('Do you want uppercase letters in your password?');
var pwLen = prompt('what is your pw length');
var lettersUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var symbols = ['!', '@', '#', '$', '&', '^', '?'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var defaultPassword = ['Try again and select at least one of the options.'];


/*function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
    //console.log("Current Index: ",+currentIndex);

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      console.log("Current Index",+currentIndex);

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }; */

function addChar(arr) {
  var temp = arr[Math.floor(Math.random() * arr.length)];

  return temp;
};

function refreshPage() {
    document.location.reload(true);
};

function createPassword() {

  var possibleChar = [];
  var FinalChar = [];

  if(isSymbols)
  {
    possibleChar = possibleChar.concat(symbols);
    FinalChar.push(addChar(symbols));
  }

  if(isNumbers)
  {
    possibleChar = possibleChar.concat(numbers);
    FinalChar.push(addChar(numbers));
  }

  if(isLowerCase)
  {
    possibleChar = possibleChar.concat(letters);
    FinalChar.push(addChar(letters));
  }

  if(isUpperCase)
  {
    possibleChar = possibleChar.concat(lettersUpperCase);
    FinalChar.push(addChar(lettersUpperCase));
  }

  else 
  {
    FinalChar.push(addChar(defaultPassword));  
  }


  for (var i = 0; i < pwLen; i++) {
    var char = addChar(possibleChar);

    pw.push(char);
  };

  // Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < FinalChar.length; i++) {
    pw[i] = FinalChar[i];
  }

  // Transform the result into a string and pass into writePassword
  
  pwShuffle = pw.join("");
  pwBox.innerHTML = pwShuffle;


};
