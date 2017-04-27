$(document).ready(function (){

// Word Bank Arrays	
	// var keyMedSrc = ['acres', 'adult', 'advice', 'arrangement', 'attempt', 'August', 'Autumn', 'border', 'breeze', 'brick', 'calm', 'canal', 'cast', 'chose', 'claws', 'coach', 'constantly', 'contrast', 'cookies', 'customs', 'damage', 'Danny', 'deeply', 'depth', 'discussion', 'doll', 'donkey', 'Egypt', 'essential', 'exchange', 'exist', 'explanation', 'facing', 'film', 'finest', 'fireplace', 'floating', 'folks', 'fort', 'garage', 'grabbed', 'grandmother', 'habit', 'happily', 'Harry', 'heading', 'hunter', 'Illinois', 'image', 'independent', 'instant', 'January', 'kids', 'label', 'Lee', 'lungs', 'manufacturing', 'Martin', 'mathematics', 'melted', 'memory', 'mill', 'mission', 'monkey', 'Mount', 'mysterious', 'neighborhood', 'Norway', 'nuts', 'occasionally', 'official', 'ourselves', 'palace', 'Pennsylvania', 'Philadelphia', 'plates', 'poetry', 'policeman', 'positive', 'possibly', 'practical', 'pride', 'promised', 'recall', 'relationship', 'remarkable', 'require', 'rhyme', 'rocky', 'rubbed', 'rush', 'sale', 'satellites', 'satisfied', 'scared', 'selection', 'shake', 'shaking', 'shallow', 'shout', 'silly', 'simplest', 'slight', 'slip', 'slope', 'soap', 'solar', 'species', 'spin', 'stiff', 'swung', 'tales', 'thumb', 'tobacco', 'toy', 'trap', 'treated', 'tune', 'university', 'vapor', 'vessels', 'wealth', 'wolf', 'zoo'];
	// var keyHardSrc = ['abruptly', 'absurd', 'abyss', 'affix', 'askew', 'avenue', 'awkward', 'axiom', 'azure', 'bagpipes', 'bandwagon', 'banjo', 'bayou', 'beekeeper', 'bikini', 'blitz', 'blizzard', 'boggle', 'bookworm', 'boxcar', 'boxful', 'buckaroo', 'buffalo', 'buffoon', 'buxom', 'buzzard', 'buzzing', 'buzzwords', 'caliph', 'cobweb', 'cockiness', 'croquet', 'crypt', 'curacao', 'cycle', 'daiquiri', 'dirndl', 'disavow', 'dizzying', 'duplex', 'dwarves', 'embezzle', 'equip', 'espionage', 'euouae', 'exodus', 'faking', 'fishhook', 'fixable', 'fjord', 'flapjack', 'flopping', 'fluffiness', 'flyby', 'foxglove', 'frazzled', 'frizzled', 'fuchsia', 'funny', 'gabby', 'galaxy', 'galvanize', 'gazebo', 'giaour', 'gizmo', 'glowworm', 'glyph', 'gnarly', 'gnostic', 'gossip', 'grogginess', 'haiku', 'haphazard', 'hyphen', 'iatrogenic', 'icebox', 'injury', 'ivory', 'ivy', 'jackpot', 'jaundice', 'jawbreaker', 'jaywalk', 'jazziest', 'jazzy', 'jelly', 'jigsaw', 'jinx', 'jiujitsu', 'jockey', 'jogging', 'joking', 'jovial', 'joyful', 'juicy', 'jukebox', 'jumbo', 'kayak', 'kazoo', 'keyhole', 'khaki', 'kilobyte', 'kiosk', 'kitsch', 'kiwifruit', 'klutz', 'knapsack', 'larynx', 'lengths', 'lucky', 'luxury', 'lymph', 'marquis', 'matrix', 'megahertz', 'microwave', 'mnemonic', 'mystify', 'naphtha', 'nightclub', 'nowadays', 'numbskull', 'nymph', 'onyx', 'ovary', 'oxidize', 'oxygen', 'pajama', 'peekaboo', 'phlegm', 'pixel', 'pizazz', 'pneumonia', 'polka', 'pshaw', 'psyche', 'puppy', 'puzzling', 'quartz', 'queue', 'quips', 'quixotic', 'quiz', 'quizzes', 'quorum', 'razzmatazz', 'rhubarb', 'rhythm', 'rickshaw', 'schnapps', 'scratch', 'shiv', 'snazzy', 'sphinx', 'spritz', 'squawk', 'staff', 'strength', 'strengths', 'stretch', 'stronghold', 'stymied', 'subway', 'swivel', 'syndrome', 'thriftless', 'thumbscrew', 'topaz', 'transcript', 'transgress', 'transplant', 'triphthong', 'twelfth', 'twelfths', 'unknown', 'unworthy', 'unzip', 'uptown', 'vaporize', 'vixen', 'vodka', 'voodoo', 'vortex', 'voyeurism', 'walkway', 'waltz', 'wave', 'wavy', 'waxy', 'wellspring', 'wheezy', 'whiskey', 'whizzing', 'whomever', 'wimpy', 'witchcraft', 'wizard', 'woozy', 'wristwatch', 'wyvern', 'xylophone', 'yachtsman', 'yippee', 'yoked', 'youthful', 'yummy', 'zephyr', 'zigzag', 'zigzagging', 'zilch', 'zipper', 'zodiac', 'zombie'];
	var key1 = ['arrangement', 'attempt', 'August', 'canal', 'cast', 'chose', 'damage', 'Danny', 'deeply', 'donkey', 'Egypt', 'essential', 'finest', 'fireplace', 'floating', 'folks', 'happily', 'hunter', 'Illinois', 'image', 'independent', 'instant', 'January', 'manufacturing', 'Martin', 'mathematics', 'monkey', 'mysterious', 'neighborhood', 'occasionally', 'palace', 'Philadelphia', 'plates', 'poetry', 'policeman', 'positive', 'possibly', 'promised', 'recall', 'rocky', 'sale', 'scared', 'shake', 'shaking', 'shallow', 'shout', 'simplest', 'slope', 'silly', 'slight', 'slip', 'solar', 'spin', 'swung', 'trap', 'university', 'vapor', 'wealth'];
	var key2 = ['acres', 'adult', 'advice', 'Autumn', 'border', 'breeze', 'brick', 'calm', 'claws', 'coach', 'constantly', 'contrast', 'cookies', 'customs', 'depth', 'discussion', 'doll', 'exchange', 'exist', 'explanation', 'facing', 'film', 'fort', 'garage', 'grabbed', 'grandmother', 'habit', 'Harry', 'heading', 'kids', 'label', 'Lee', 'lungs', 'melted', 'memory', 'mill', 'mission', 'Mount', 'Norway', 'nuts', 'official', 'ourselves', 'Pennsylvania', 'practical', 'pride', 'relationship', 'remarkable', 'require', 'rhyme', 'rubbed', 'rush', 'satellites', 'satisfied', 'selection', 'soap', 'species', 'stiff', 'tales', 'thumb', 'tobacco', 'toy', 'treated', 'tune', 'vessels', 'wolf', 'zoo'];
	var key3 = ['affix', 'askew', 'avenue', 'awkward', 'bagpipes', 'bandwagon', 'banjo', 'bayou', 'boggle', 'bookworm', 'boxcar', 'buffalo', 'buffoon', 'buxom', 'buzzard', 'cobweb', 'cockiness', 'croquet', 'cycle', 'daiquiri', 'dirndl', 'dwarves', 'embezzle', 'equip', 'espionage', 'exodus', 'faking', 'flapjack', 'flopping', 'frazzled', 'frizzled', 'fuchsia', 'funny', 'galaxy', 'galvanize', 'gazebo', 'gizmo', 'glowworm', 'glyph', 'gnarly', 'grogginess', 'haiku', 'haphazard', 'icebox', 'injury', 'ivory', 'ivy', 'jawbreaker', 'jaywalk', 'jazziest', 'jazzy', 'jelly', 'jiujitsu', 'jockey', 'jogging', 'joyful', 'juicy', 'kazoo', 'keyhole', 'kiosk', 'kitsch', 'knapsack', 'larynx', 'lymph', 'marquis', 'matrix', 'mnemonic', 'mystify', 'naphtha', 'nowadays', 'numbskull', 'nymph', 'oxidize', 'oxygen', 'pajama', 'phlegm', 'pixel', 'polka', 'pshaw', 'puzzling', 'quartz', 'queue', 'quizzes', 'quorum', 'razzmatazz', 'rickshaw', 'schnapps', 'scratch', 'shiv', 'sphinx', 'spritz', 'strength', 'strengths', 'stretch', 'subway', 'swivel', 'thumbscrew', 'topaz', 'transcript', 'transplant', 'triphthong', 'unknown', 'unworthy', 'unzip', 'vixen', 'vodka', 'voodoo', 'voyeurism', 'walkway', 'waltz', 'wavy', 'waxy', 'wellspring', 'whiskey', 'whizzing', 'whomever', 'witchcraft', 'wizard', 'woozy', 'yachtsman', 'yippee', 'yoked', 'zephyr', 'zigzag', 'zigzagging'];
	var key4 = ['abruptly', 'absurd', 'abyss', 'axiom', 'azure', 'beekeeper', 'bikini', 'blitz', 'blizzard', 'boxful', 'buckaroo', 'buzzing', 'buzzwords', 'caliph', 'crypt', 'curacao', 'disavow', 'dizzying', 'duplex', 'euouae', 'fishhook', 'fixable', 'fjord', 'fluffiness', 'flyby', 'foxglove', 'gabby', 'giaour', 'gnostic', 'gossip', 'hyphen', 'iatrogenic', 'jackpot', 'jaundice', 'jigsaw', 'jinx', 'joking', 'jovial', 'jukebox', 'jumbo', 'kayak', 'khaki', 'kilobyte', 'kiwifruit', 'klutz', 'lengths', 'lucky', 'luxury', 'megahertz', 'microwave', 'nightclub', 'onyx', 'ovary', 'peekaboo', 'pizazz', 'pneumonia', 'psyche', 'puppy', 'quips', 'quixotic', 'quiz', 'rhubarb', 'rhythm', 'snazzy', 'squawk', 'staff', 'stronghold', 'stymied', 'syndrome', 'thriftless', 'transgress', 'twelfth', 'twelfths', 'uptown', 'vaporize', 'vortex', 'wave', 'wheezy', 'wimpy', 'wristwatch', 'wyvern', 'xylophone', 'youthful', 'yummy', 'zilch', 'zipper', 'zodiac', 'zombie'];
	var keyHorse = ['horse', 'mare', 'stallion', 'thoroughbred', 'backstretch', 'bearing', 'blinkers', 'book', 'breather', 'breeze', 'chute', 'closer', 'clubhouse', 'derby', 'kentucky', 'triple', 'crown', 'preakness', 'stakes', 'furlong', 'handicap', 'homestretch', 'stretch', 'juvenille', 'length', 'maiden', 'nose', 'odds', 'pace', 'pacemaker', 'paddock', 'pacesetter', 'place', 'pole', 'post', 'quarter', 'racetrack', 'rail', 'scratch', 'stretch', 'track', 'winner', 'weight', 'belmont', 'secretariat', 'seabiscuit', 'jockey', 'rider'];


	var key = '';
	var keyMap = [];
	var guessesLeft = 6;
	var totalStrikesAllowed = guessesLeft;
	var wrongLetters = [];
	var correctCount = 0;
	var allGuesses = [];
	var winCount = 0;
	var keyArray = key1;
	var keyArrayLength = keyArray.length;
	var startPoint = 15;
	var finishPoint = 85;


// -----------------------------------------------------------
// Random Number Generator
// -----------------------------------------------------------
	function getRandomInt(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min)) + min;
	};


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
			totalStrikesAllowed = guessesLeft;
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

		// Char Movement
			$('.char').attr('pos',startPoint).css('left',startPoint+'%');


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

	var wrapLength = $('#player-wrap').width();
	var trackLength = finishPoint - startPoint;
	var keyLength = key.length;
	// var increment = 100/key.length;
	var increment = trackLength/key.length;

	var cpuIncrement = trackLength/totalStrikesAllowed;
	
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

						// var userPos = (correctCount * increment) - 80;
						// $('#user').css('left',userPos);

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

	// User Movement
		var userPos = startPoint + (correctCount * increment);
		$('#user').attr('pos',userPos).animate({ left: userPos+'%' }, 500 );

	// Alpha CPU movement
		var cpuPos = startPoint + ((totalStrikesAllowed - guessesLeft) * cpuIncrement);
		$('#cpu1').attr('pos',cpuPos).animate({ left: cpuPos+'%' }, 500 );
			
	// Beta CPU movement function
		function cpuNewPos (el){
			var cpuRandomPct = getRandomInt(50,100)/100;
			var cpuRandomPos = cpuPos * cpuRandomPct;
			var cpuCurrentPos = parseFloat($(el).attr('pos'));
			var cpuNewPos = cpuCurrentPos;

			// Only update position if new pos value is larger than current
			if ( cpuRandomPos > cpuCurrentPos) {
				cpuNewPos = cpuRandomPos; 
			};

			// Update pos-attribute, Animate to new pos
			$(el).attr('pos',cpuNewPos).animate({ left: cpuNewPos+'%' }, 500 );
			
			// console.log('cpuPos', cpuPos);
			// console.log('cpuCurrentPos', cpuCurrentPos);
			// console.log('cpuRandomPct', cpuRandomPct);
			// console.log('cpuRandomPos', cpuRandomPos);
			// console.log('cpuNewPos', cpuNewPos);
		};

	// Call functions for each beta CPU
		cpuNewPos('#cpu2');
		cpuNewPos('#cpu3');
		




	}); // --- end play


}); // --- end document.ready

