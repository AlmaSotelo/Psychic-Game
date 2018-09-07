console.log("I am connected");
// Selecting a random letter
// set what options have the code to pick from
var possibleCompuLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// the code get its random letter from the established array

// setting the starting values to the object round
var round = {
      userGuess: "",
      wins : 0,
      losses :0,
      guessesLeft : 9,
      guessesSoFar : [],
};

// creating variables that hold references to the places in the HTML where we want to display things
var instruccionsText = document.getElementsByClassName("Instruccions-Text");
var userChoiceText = document.getElementById("UserChoice-Text");
var yourWinsText = document.getElementById("YourWins-Text");
var yourLossesText = document.getElementById("YourLosses-Text");
var guessesLeftText = document.getElementById("GuessesLeft-Text");
var guessesSoFarText = document.getElementById("GuessesSoFar-Text");

// When a round is over then is needed to return guessesLeft and guessesSoFar to their original values, and
// because I don't want to repeat it twice (in a case of a win and in a case of a losse), I am going to create a function to reset:
function reset (round) {
      // the property guessesLeft returns to its inicial value,
      round.guessesLeft = 9;
      console.log("guessesLeft " + round.guessesLeft);
      // the contain of the arrey returns to empty
      round.guessesSoFar = [];
      console.log("guessesSoFar " + round.guessesSoFar);
      // the return statement is needed to stop the function and give the values to the object, thats why a <div id="round"> is needed in the index file
      return round; 
}

                          // Waiting for the user to pick a letter
//  This function is run whenever the user presses a key.
   document.onkeyup = function(event) {
      // ...in this case, I am creating the flollowing listener:     
      var userGuess = event.key;
      console.log("userGuess " + userGuess); 
                     //it returns the identifier of the key that was pressed when the key event ocurred.
      // and is assigned to variable userGuess
      
      // the computer randomly chooses a choice from the options array.
      var compuLetter = possibleCompuLetters [Math.floor(Math.random()*possibleCompuLetters.length)];
                                                                 // its current value is 26                                                                 
                                                   //it gives me a # between 0 and 1 
                                      //expected result is a # between 0 and 26 to be used as an index #
      console.log("compuLetter " + compuLetter);

                   // when is a win round
      if (userGuess === compuLetter) {
      // wins increases 1,
      round.wins++;
      // the function reset is called
      reset (round); 
      }
      // if the code gets here is because the user lost a chance to guess
      else {
      // guessesLeft decreases 1,      
      round.guessesLeft--;
      // the method push adds the letter picked (userGuess) to the array (guessSoFar)
      round.guessesSoFar.push(userGuess);
      console.log(round.guessesSoFar);
      }

                   // when is a losse round (all chances are used in a round)
      // if the property guessesLeft of object round is equal to 0, then..
      if (round.guessesLeft === 0) {
      // the property losses of object round increases 1, 
      round.losses++;
      // the function reset is called
      reset (round);    
      }
      // Display the results
      document.querySelector("#YourWins-Text").innerHTML = round.wins;
      document.querySelector("#YourLosses-Text").innerHTML = round.losses;
      document.querySelector("#GuessesLeft-Text").innerHTML = round.guessesLeft;
      
      
      document.querySelector("#YourGuessesSoFar-Text").innerHTML = round.guessesSoFar;
      document.querySelector("#UserChoice-Text").innerHTML = round.usesGuesses;
      document.querySelector("#UserChoice-Text").innerHTML = round.usesGuesses;

   };

     
  
