var pw = [];
/*var instructions = alert('Follow the prompts to create your secure password.')
var isSymbols = confirm('Do you want symbols in your password?');
var isNumbers = confirm('Do you want numbers in your password?');
var isLowerCase = confirm('Do you want lowercase letters in your password?');
var isUpperCase = confirm('Do you want uppercase letters in your password?');*/
var lettersUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var symbols = ['!', '@', '#', '$', '&', '^', '?'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var defaultPassword = ['Select at least one of the options. <button type ="button" class="btn btn-success pwbuttons"onclick="refreshPage()">Try Again</button>'];

/* add characters to array*/

function addChar(arr) {
  var temp = arr[Math.floor(Math.random() * arr.length)];
  return temp;
  };

/* copy to clipboard*/

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

/*reload page*/

function refreshPage() {
    document.location.reload(true);
};

/*create password*/

function createPassword() {

  var possibleChar = [];
  var FinalChar = [];
  var symbolsCheckBox = document.getElementById("symbols");
  var numbersCheckBox = document.getElementById("numbers");
  var lowercaseLettersCheckBox = document.getElementById("lowercaseLetters");
  var uppercaseLettersCheckBox = document.getElementById("uppercaseLetters");
  var pwLen = document.getElementById("pwInput").value;
  

  /*if users want symbols*/

  if(symbolsCheckBox.checked === true)

  /*if(isSymbols)*/
  {
    possibleChar = possibleChar.concat(symbols);
    FinalChar.push(addChar(symbols));
  }

  /*if users want numbers*/

  /*if(isNumbers)*/

  if(numbersCheckBox.checked === true)
  {
    possibleChar = possibleChar.concat(numbers);
    FinalChar.push(addChar(numbers));
  }

  /*if users want lower case*/

  /*if(isLowerCase)*/

  if(lowercaseLettersCheckBox.checked === true)
  {
    possibleChar = possibleChar.concat(letters);
    FinalChar.push(addChar(letters));
  }

  /*if users want upper case*/

  /*if(isUpperCase)*/

  if(uppercaseLettersCheckBox.checked === true)
  {
    possibleChar = possibleChar.concat(lettersUpperCase);
    FinalChar.push(addChar(lettersUpperCase));
  }

  if (symbolsCheckBox.checked === false && numbersCheckBox.checked === false && lowercaseLettersCheckBox.checked === false && uppercaseLettersCheckBox.checked === false)
  {
    FinalChar.push(addChar(defaultPassword));
  }

  if (pwLen === '' || pwLen < 8 ) {
    FinalChar = 'Input valid password length. <button type ="button" class="btn btn-success pwbuttons"onclick="refreshPage()">Try Again</button>';
  }




  for (var i = 0; i < pwLen; i++) {
    var char = addChar(possibleChar);

    pw.push(char);
  };

  // Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < FinalChar.length; i++) {
    pw[i] = FinalChar[i];
  }

  // Transform the result into a string and pass in function

  pwShuffle = pw.join("");
  pwBox.innerHTML = pwShuffle;


};

document.getElementById('genBtn').addEventListener('click', createPassword);
document.getElementById('pwInput').addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) { 
    createPassword();
  }
});
  