// Use a forEach() loop within another forEach() loop to build an array representing a deck of cards. A deck consists of 52 cards - 13 ranks in each of 4 suits.
// Then, display a list of every card in the deck. (Hint: Each element of the array should read something like "ace of spades" or "4 of hearts").

$(document).ready(function(){
  var numbers = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
  var types = ["spades", "hearts", "diamonds", "clubs"];

  types.forEach(function(type){
    numbers.forEach(function(number){
      $(".deckList").append("<li>" + number + " of " + type + "</li>");
    });
  });

});
