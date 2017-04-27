$(document).ready(function (){

// Select a random word from a collection of words
// to use as the key.
	var keyHard = ['abruptly', 'absurd', 'abyss', 'affix', 'askew', 'avenue', 'awkward', 'axiom', 'azure', 'bagpipes', 'bandwagon', 'banjo', 'bayou', 'beekeeper', 'bikini', 'blitz', 'blizzard', 'boggle', 'bookworm', 'boxcar', 'boxful', 'buckaroo', 'buffalo', 'buffoon', 'buxom', 'buzzard', 'buzzing', 'buzzwords', 'caliph', 'cobweb', 'cockiness', 'croquet', 'crypt', 'curacao', 'cycle', 'daiquiri', 'dirndl', 'disavow', 'dizzying', 'duplex', 'dwarves', 'embezzle', 'equip', 'espionage', 'euouae', 'exodus', 'faking', 'fishhook', 'fixable', 'fjord', 'flapjack', 'flopping', 'fluffiness', 'flyby', 'foxglove', 'frazzled', 'frizzled', 'fuchsia', 'funny', 'gabby', 'galaxy', 'galvanize', 'gazebo', 'giaour', 'gizmo', 'glowworm', 'glyph', 'gnarly', 'gnostic', 'gossip', 'grogginess', 'haiku', 'haphazard', 'hyphen', 'iatrogenic', 'icebox', 'injury', 'ivory', 'ivy', 'jackpot', 'jaundice', 'jawbreaker', 'jaywalk', 'jazziest', 'jazzy', 'jelly', 'jigsaw', 'jinx', 'jiujitsu', 'jockey', 'jogging', 'joking', 'jovial', 'joyful', 'juicy', 'jukebox', 'jumbo', 'kayak', 'kazoo', 'keyhole', 'khaki', 'kilobyte', 'kiosk', 'kitsch', 'kiwifruit', 'klutz', 'knapsack', 'larynx', 'lengths', 'lucky', 'luxury', 'lymph', 'marquis', 'matrix', 'megahertz', 'microwave', 'mnemonic', 'mystify', 'naphtha', 'nightclub', 'nowadays', 'numbskull', 'nymph', 'onyx', 'ovary', 'oxidize', 'oxygen', 'pajama', 'peekaboo', 'phlegm', 'pixel', 'pizazz', 'pneumonia', 'polka', 'pshaw', 'psyche', 'puppy', 'puzzling', 'quartz', 'queue', 'quips', 'quixotic', 'quiz', 'quizzes', 'quorum', 'razzmatazz', 'rhubarb', 'rhythm', 'rickshaw', 'schnapps', 'scratch', 'shiv', 'snazzy', 'sphinx', 'spritz', 'squawk', 'staff', 'strength', 'strengths', 'stretch', 'stronghold', 'stymied', 'subway', 'swivel', 'syndrome', 'thriftless', 'thumbscrew', 'topaz', 'transcript', 'transgress', 'transplant', 'triphthong', 'twelfth', 'twelfths', 'unknown', 'unworthy', 'unzip', 'uptown', 'vaporize', 'vixen', 'vodka', 'voodoo', 'vortex', 'voyeurism', 'walkway', 'waltz', 'wave', 'wavy', 'waxy', 'wellspring', 'wheezy', 'whiskey', 'whizzing', 'whomever', 'wimpy', 'witchcraft', 'wizard', 'woozy', 'wristwatch', 'wyvern', 'xylophone', 'yachtsman', 'yippee', 'yoked', 'youthful', 'yummy', 'zephyr', 'zigzag', 'zigzagging', 'zilch', 'zipper', 'zodiac', 'zombie'];
	var keyMedium = ['acres', 'adult', 'advice', 'arrangement', 'attempt', 'August', 'Autumn', 'border', 'breeze', 'brick', 'calm', 'canal', 'Casey', 'cast', 'chose', 'claws', 'coach', 'constantly', 'contrast', 'cookies', 'customs', 'damage', 'Danny', 'deeply', 'depth', 'discussion', 'doll', 'donkey', 'Egypt', 'Ellen', 'essential', 'exchange', 'exist', 'explanation', 'facing', 'film', 'finest', 'fireplace', 'floating', 'folks', 'fort', 'garage', 'grabbed', 'grandmother', 'habit', 'happily', 'Harry', 'heading', 'hunter', 'Illinois', 'image', 'independent', 'instant', 'January', 'kids', 'label', 'Lee', 'lungs', 'manufacturing', 'Martin', 'mathematics', 'melted', 'memory', 'mill', 'mission', 'monkey', 'Mount', 'mysterious', 'neighborhood', 'Norway', 'nuts', 'occasionally', 'official', 'ourselves', 'palace', 'Pennsylvania', 'Philadelphia', 'plates', 'poetry', 'policeman', 'positive', 'possibly', 'practical', 'pride', 'promised', 'recall', 'relationship', 'remarkable', 'require', 'rhyme', 'rocky', 'rubbed', 'rush', 'sale', 'satellites', 'satisfied', 'scared', 'selection', 'shake', 'shaking', 'shallow', 'shout', 'silly', 'simplest', 'slight', 'slip', 'slope', 'soap', 'solar', 'species', 'spin', 'stiff', 'swung', 'tales', 'thumb', 'tobacco', 'toy', 'trap', 'treated', 'tune', 'university', 'vapor', 'vessels', 'wealth', 'wolf', 'zoo'];
	var keyHorse = ['horse', 'mare', 'stallion', 'thoroughbred', 'backstretch', 'bearing', 'blinkers', 'book', 'breather', 'breeze', 'chute', 'closer', 'clubhouse', 'derby', 'kentucky', 'triple', 'crown', 'preakness', 'stakes', 'furlong', 'handicap', 'homestretch', 'stretch', 'juvenille', 'length', 'maiden', 'nose', 'odds', 'pace', 'pacemaker', 'paddock', 'pacesetter', 'place', 'pole', 'post', 'quarter', 'racetrack', 'rail', 'scratch', 'stretch', 'track', 'winner', 'weight', 'belmont', 'secretariat', 'seabiscuit', 'jockey', 'rider'];
	
	// console.log(keyHard.length); //>>> 213
	// console.log(keyMedium.length); //>>> 126
	// console.log(keyHorse.length); //>>> 48
	// var key = 'keyword';
	// var key = 'blahblahblah';
	// var key = 'waynecheng'
	var key = '';
	var keyMap = [];
	var guessesLeft = 6;
	var wrongLetters = [];
	var correctCount = 0;
	var allGuesses = [];
	var winCount = 0;
	var keyArray = keyHorse;
	var keyArrayLength = keyArray.length;

// -----------------------------------------------------------
// Random Number Generator
// -----------------------------------------------------------
	function getRandomInt(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min)) + min;
	}


// -----------------------------------------------------------
// Initialize a new game
// -----------------------------------------------------------
	// $('#new-game-button').on('click',function init(){
	function init(){
		console.log('----- new game -----')
		//  Pick a word
		var keyIndex = getRandomInt(0,keyArrayLength);
		key = keyArray[keyIndex]
		console.log(keyIndex, keyArray[keyIndex]);


		// Set or Reset Variables
			guessesLeft = 6;
			wrongLetters = [];
			correctCount = 0;
			allGuesses = [];
			$('#strike-counter').text(guessesLeft); // strikes left
			// $('#strike-counter').after(guessesLeft); // strikes left
			$('#ltr-board-wrap').text(''); // letter board
			$('#wrong-ltrs .content-wrap').text(''); // wrong letter display
			$('.char').css('left', 0); // player graphic positions


		// Make a space in letter board for each letter in keyword
		for (var i=0; i<key.length; i++) {
			var letNum = i;
			var letSpaceEl = '<span class="ltr-space" id="let'+ letNum +'"></span>'

			// Append new letter spaces to board
			$('div#ltr-board-wrap').append(letSpaceEl);
		}

		// return [correctCount,guessesLeft,wrongLetters,allGuesses];

		// Process keyword, Calculate lengths -------------
			keyMap = [];

			for (var i=0; i<key.length; i++){
				keyMap.push(key[i]);
			};

			console.log('keyMap',keyMap);
	}; // end init()

	// First initialization
	init();

	// New Game Button
	$('#new-game-button').on('click', init);
	
	// Verify variables have been reset
	$('#new-game-button').on('click', function(){
		console.log('keyMap',keyMap);
	});

// -----------------------------------------------------------
//  Player Movement Variables
// -----------------------------------------------------------
	var wrapLength = $('#player-wrap').css('width');
	var trackLength = wrapLength * 0.8;
	var keyLength = key.length;
	// var increment = 100/key.length;
	var increment = 70/key.length;


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

						// Toggle outcome to true (prevents else if from running)
						outcome = true;

						// var trackPos = (correctCount * increment) - 80;
						// $('#user').css('left',trackPos);

						// End Game when all letters guessed
						if (correctCount === keyMap.length) {
							winCount += 1;
							$('#win-counter').text(winCount);
							
							// init();
							console.log('--- win! ---');
						}
					}

				// IF WRONG -----------------------------
					else if ((i === keyMap.length - 1) && (outcome === false)) {
						
						//  Add incorrect letter to incorrect guess list
						wrongLetters.push(userGuess);
						wrongLetterHTML = '<span class="ltr-space">' + userGuess + '</span>';
						$('#wrong-ltrs .content-wrap').append(wrongLetterHTML);

						// Reduce Guesses Left by 1, update text
						guessesLeft = guessesLeft - 1;
						$('#strike-counter').text(guessesLeft);

					}
			}
		}

	// Player Movement -----------------------------------
		var trackPos = (correctCount * increment) + '%';
		$('#user').animate({ left: trackPos, }, 500 );


	}); // --- end play


}); // --- end document.ready

