var pw = [];
var instructions = alert('Follow the prompts to create your secure password.')
var isSymbols = confirm('Do you want symbols in your password?'); 
var isNumbers = confirm('Do you want numbers in your password?');
var isLowerCase = confirm('Do you want lowercase letters in your password?');
var isUpperCase = confirm('Do you want uppercase letters in your password?');
var pwLen = prompt('How many characters do you want in your password?');
var lettersUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var symbols = ['!', '@', '#', '$', '&', '^', '?'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var defaultPassword = ['Try again and select at least one of the options.'];

function addChar(arr) {
  var temp = arr[Math.floor(Math.random() * arr.length)];

  return temp;
};

function CopyToClipboard(containerid) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy");

  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("Secure Password Copied")
  }
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

  if (isSymbols === false && isNumbers === false && isLowerCase === false && isUpperCase === false) 
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
