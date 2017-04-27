$(document).ready(function (){


// Select a random word from a collection of words
// to use as the key.
	// var possible keys ['kobe bryant', 'peyton manning', 'michael jordan'];


	var key = 'keyword';
	var key = 'blahblahblah';
	var key = 'waynecheng'
	var keyMap = [];
	var guessesLeft = 6;
	var wrongLetters = [];
	var correctCount = 0;
	var allGuesses = [];

// -----------------------------------------------------------
// Initialize a new game
// -----------------------------------------------------------
	// $('#new-game-button').on('click',function init(){
	function init(){
		console.log('----- new game -----')
		
		// Set or Reset Variables
			$('#strike-counter').text('6'); // strikes left
			$('#ltr-board-wrap').text(''); // letter board
			$('#wrong-ltrs .content-wrap').text(''); // wrong letter display
			guessesLeft = 6;
			wrongLetters = [];
			correctCount = 0;
			allGuesses = [];


		// Make a space in letter board for each letter in keyword
		for (var i=0; i<key.length; i++) {
			var letNum = i;
			var letSpaceEl = '<span class="ltr-space" id="let'+ letNum +'"></span>'

			// Append new letter spaces to board
			$('div#ltr-board-wrap').append(letSpaceEl);
		}

		// 
		return [correctCount,guessesLeft,wrongLetters,allGuesses];
	}; // end init()

	// First initialization
	init();

	// New Game Button
	$('#new-game-button').on('click', init);
	
	// Verify variables have been reset
	$('#new-game-button').on('click', function(){
		console.log('keyMap',keyMap);
		console.log("correctCount",correctCount);
		console.log("guessesLeft",guessesLeft);
		console.log("wrongLetters",wrongLetters);
		console.log("allGuesses",allGuesses);
	});

// -----------------
// Process keyword
// -----------------
	var keyMap = [];

	for (var i=0; i<key.length; i++){
		keyMap.push(key[i]);
	};

	console.log('keyMap',keyMap);
	console.log("correctCount",correctCount);
	console.log("guessesLeft",guessesLeft);
	console.log("wrongLetters",wrongLetters);
	console.log("allGuesses",allGuesses);



// -----------------------------------------------------------
// Gameplay function
// -----------------------------------------------------------
	$(document).on('keyup', function play(event){

	// Store user's guess into userGuess variable
		var userGuess = String.fromCharCode(event.which).toLowerCase();
		console.log("userGuess",userGuess);

	// If key pressed doesn't match previously entered keys, continue with eval
		alreadyGuessed = false;
		//-- Loop through previous guesses to compare
		for (var i=0; i<allGuesses.length; i++) {
			//-- if already guessed, terminate rest of function
			if (userGuess === allGuesses[i]) {
				alreadyGuessed = true;
				break;
				return;
			}
		}

		//-- Add current guess to prev guess array after already compared.
		allGuesses.push(userGuess);


		if (alreadyGuessed === false) {

			// Default outcome is mismatch, switched to true when matched
			var outcome = false;

			// Compare userGuess with each letter in keyMap
			for (var i=0; i<keyMap.length; i++) {
				
				// IF RIGHT -----------------------------
					if (userGuess === keyMap[i]) {
						// Reveal the letter in the keyword
						var revealTargetID = '#let'+i;
						$(revealTargetID).text(userGuess);

						// Increase the count of correct letters
						correctCount += 1;
						console.log(correctCount);

						// Toggle outcome to true
						outcome = true;

						// End Game when all letters guessed
						if (correctCount === keyMap.length) {
							console.log('You win!');
						}
					}

				// IF WRONG -----------------------------
					else if ((i === keyMap.length - 1) && (outcome === false)) {
						
						//  Add incorrect letter to incorrect guess list
						wrongLetters.push(userGuess);
						wrongLetterHTML = '<span class="ltr-space">' + userGuess + '</span>';
						$('#wrong-ltrs .content-wrap').append(wrongLetterHTML);


						var prevImgID = '#img'+guessesLeft;

						// Reduce Guesses Left by 1, update text
						guessesLeft = guessesLeft - 1;
						$('#strike-counter').text(guessesLeft);

						// Toggle graphic displayed
						var imgID = '#img'+guessesLeft;
						
						$(prevImgID).attr('display','none');
						$(imgID).attr('display','inline-block');
					}
			}
		}
		

	}); // --- end play


}); // --- end document.ready

