
     // Selecting a random letter
// set what options have the code to pick from
var possibleCompuLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// the code get its random letter from the established array

// setting the starting values to the object round
var round = {
      "wins" : 0,
      "losses" :0,
      "guessesLeft" : 9,
      "guessesSoFar" : []
};

// creating variables that hold references to the places in the HTML where we want to display things
var instruccionsText = document.getElementsByClassName("Instruccions-Text");
var userChoiceText = document.getElementById("UserChoice-Text");
var yourWinsText = document.getElementById("YourWins-Text");
var yourLossesText = document.getElementById("YourLosses-Text");
var guessesLeftText = document.getElementById("GuessesLeft-Text");
var guessesSoFarText = document.getElementById("GuessesSoFar-Text");

// When a round is over then is needed to return guessesLeft and guessesSoFar to their original values, and
// becouse I don't want to repit it twice (in a case of a win and in the case of a losse), I am going to create a function to reset:
function reset (round); {
      // the property guessesLeft returns to its inicial value,
      round.guessesLeft = 9;
      // the containt of the arrey returns to empty
      round.guessesSoFar = [];
      // the return statement is needed to stop the function and give the values to the object, thats why a <div id="round"> is needed in the index file
      return round; 
   }

                          // Waiting for the user to pick a letter
// the onkeyup event handler specifies what should happen when any key is pressed and then released when the Document object is in focus.
     document.onkeyup = function(event) {
// ...in this case, I am creating the flollowing listener:     
      var userGuess = event.key; 
                     //it returns the identifier of the key that was pressed when the key event ocurred.
     // and is assigned to variable userGuess

// the computer randomly chooses a choice from the options array
var compuLetter = possibleCompuLetters [Math.floor(Math.random()*possibleCompuLetters.length)];
                                                                 // its current value is 26                                                                 
                                                   //it gives me a # between 0 and 1 
                                       //expected result is a # between 0 and 26 to be used as an index #

      
                   // when is a win round
if (userGuess === compuLetter) {
   // wins increases 1,
   round.wins++;
   // the funcion reset is called
   reset (round); 
}
   // if the code gets here is because the user lost a chance to guess
   else {
      // guessesLeft decreases 1,      
      round.guessesLeft--;
      // the method push adds the letter picked (userGuess) to the array (guessSoFar)
      round.guessesSoFar.push(userGuess);

        }

                  // when is a losse round (all chances are used in a round)
// if the property guessesLeft of object round is equal to 0, then..
if (round.guessesLeft === 0) {
      // the property losses of object round increases 1, 
      round.losses++;
      // the funcion reset is called
      reset (round);   
} 

// Display the results
userChoiceText.textContent = "Your Guess: " + userGuess;
yourWinsText.textContent = "wins: " + wins;
yourLossesText.textContent = "losses: " + losses;
guessesLeftText.textContent = "guesses Left:  " + guessesLeft;
guessesSoFarText.textContent = "guesses so far : " + guessesSoFar;

}

