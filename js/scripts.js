$(document).ready(function() {
  $("#sentenceForm").submit(function(event) {
    var userSentece = $("#userSentence").val();
    var words = userSentece.split(' ');
    

    var threeCharWords = words.filter(function(word) {
      return word.length >= 3;
    });

    var reverseWordsList = threeCharWords.reverse();
    var newSentence = reverseWordsList.join().replace(",", " ");
    
    $("#sentenceForm").hide();
    $(".output").text(newSentence);
    
    event.preventDefault();
  });
});