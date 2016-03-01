var palindromeCheck = function(userInput) {
  if (textReverser(userInput) === userInput) {
    return true;
  } else {
  return false;
  };
};

var textReverser = function(userInput) {
  var wordArray = [];
  var reverseArray = [];
  var reverseText = "";
  for (var index = 1; index <= userInput.length; index +=1) {
    wordArray.push(userInput.slice((index - 1), index));
  };
  for (var rindex = 1; rindex <= userInput.length; rindex +=1) {
    reverseArray.push(wordArray.pop());
  };
  reverseArray.forEach(function(character) {
    reverseText += character
  });
  return reverseText;
};
//needs to be directed at the correct placeholder and result.
$(document).ready(function() {
  $("form#palindromeInput").submit(function(event) {
    var userInput = $("#palindromeInput").val();
    var result = palindromeCheck(userInput)
     if (result) {
       $("#result-true").show();
       $("#result-false").hide();
     } else {
       $("#result-false").show();
       $("#result-true").hide();
     };

    event.preventDefault();
  });
});
