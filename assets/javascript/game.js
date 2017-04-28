$(document).ready(function (){

// Word Bank Arrays	
	// Note* longest word has 13 characters (manufacturing);
	var masterKey = ['arrangement', 'attempt', 'August', 'canal', 'cast', 'chose', 'damage', 'Danny', 'deeply', 'donkey', 'Egypt', 'essential', 'finest', 'fireplace', 'floating', 'folks', 'happily', 'hunter', 'Illinois', 'image', 'independent', 'instant', 'January', 'manufacturing', 'Martin', 'mathematics', 'monkey', 'mysterious', 'neighborhood', 'occasionally', 'palace', 'Philadelphia', 'plates', 'poetry', 'policeman', 'positive', 'possibly', 'promised', 'recall', 'rocky', 'sale', 'scared', 'shake', 'shaking', 'shallow', 'shout', 'simplest', 'slope', 'silly', 'slight', 'slip', 'solar', 'spin', 'swung', 'trap', 'university', 'vapor', 'wealth', 'acres', 'adult', 'advice', 'Autumn', 'border', 'breeze', 'brick', 'calm', 'claws', 'coach', 'constantly', 'contrast', 'cookies', 'customs', 'depth', 'discussion', 'doll', 'exchange', 'exist', 'explanation', 'facing', 'film', 'fort', 'garage', 'grabbed', 'grandmother', 'habit', 'Harry', 'heading', 'kids', 'label', 'Lee', 'lungs', 'melted', 'memory', 'mill', 'mission', 'Mount', 'Norway', 'nuts', 'official', 'ourselves', 'Pennsylvania', 'practical', 'pride', 'relationship', 'remarkable', 'require', 'rhyme', 'rubbed', 'rush', 'satellites', 'satisfied', 'selection', 'soap', 'species', 'stiff', 'tales', 'thumb', 'tobacco', 'toy', 'treated', 'tune', 'vessels', 'wolf', 'zoo', 'affix', 'askew', 'avenue', 'awkward', 'bagpipes', 'bandwagon', 'banjo', 'bayou', 'boggle', 'bookworm', 'boxcar', 'buffalo', 'buffoon', 'buxom', 'buzzard', 'cobweb', 'cockiness', 'croquet', 'cycle', 'daiquiri', 'dirndl', 'dwarves', 'embezzle', 'equip', 'espionage', 'exodus', 'faking', 'flapjack', 'flopping', 'frazzled', 'frizzled', 'fuchsia', 'funny', 'galaxy', 'galvanize', 'gazebo', 'gizmo', 'glowworm', 'glyph', 'gnarly', 'grogginess', 'haiku', 'haphazard', 'icebox', 'injury', 'ivory', 'ivy', 'jawbreaker', 'jaywalk', 'jazziest', 'jazzy', 'jelly', 'jiujitsu', 'jockey', 'jogging', 'joyful', 'juicy', 'kazoo', 'keyhole', 'kiosk', 'kitsch', 'knapsack', 'larynx', 'lymph', 'marquis', 'matrix', 'mnemonic', 'mystify', 'naphtha', 'nowadays', 'numbskull', 'nymph', 'oxidize', 'oxygen', 'pajama', 'phlegm', 'pixel', 'polka', 'pshaw', 'puzzling', 'quartz', 'queue', 'quizzes', 'quorum', 'razzmatazz', 'rickshaw', 'schnapps', 'scratch', 'shiv', 'sphinx', 'spritz', 'strength', 'strengths', 'stretch', 'subway', 'swivel', 'thumbscrew', 'topaz', 'transcript', 'transplant', 'triphthong', 'unknown', 'unworthy', 'unzip', 'vixen', 'vodka', 'voodoo', 'voyeurism', 'walkway', 'waltz', 'wavy', 'waxy', 'wellspring', 'whiskey', 'whizzing', 'whomever', 'witchcraft', 'wizard', 'woozy', 'yachtsman', 'yippee', 'yoked', 'zephyr', 'zigzag', 'zigzagging', 'abruptly', 'absurd', 'abyss', 'axiom', 'azure', 'beekeeper', 'bikini', 'blitz', 'blizzard', 'boxful', 'buckaroo', 'buzzing', 'buzzwords', 'caliph', 'crypt', 'curacao', 'disavow', 'dizzying', 'duplex', 'euouae', 'fishhook', 'fixable', 'fjord', 'fluffiness', 'flyby', 'foxglove', 'gabby', 'giaour', 'gnostic', 'gossip', 'hyphen', 'iatrogenic', 'jackpot', 'jaundice', 'jigsaw', 'jinx', 'joking', 'jovial', 'jukebox', 'jumbo', 'kayak', 'khaki', 'kilobyte', 'kiwifruit', 'klutz', 'lengths', 'lucky', 'luxury', 'megahertz', 'microwave', 'nightclub', 'onyx', 'ovary', 'peekaboo', 'pizazz', 'pneumonia', 'psyche', 'puppy', 'quips', 'quixotic', 'quiz', 'rhubarb', 'rhythm', 'snazzy', 'squawk', 'staff', 'stronghold', 'stymied', 'syndrome', 'thriftless', 'transgress', 'twelfth', 'twelfths', 'uptown', 'vaporize', 'vortex', 'wave', 'wheezy', 'wimpy', 'wristwatch', 'wyvern', 'xylophone', 'youthful', 'yummy', 'zilch', 'zipper', 'zodiac', 'zombie', 'horse', 'mare', 'stallion', 'thoroughbred', 'backstretch', 'bearing', 'blinkers', 'book', 'breather', 'breeze', 'chute', 'closer', 'clubhouse', 'derby', 'kentucky', 'triple', 'crown', 'preakness', 'stakes', 'furlong', 'handicap', 'homestretch', 'stretch', 'juvenille', 'length', 'maiden', 'nose', 'odds', 'pace', 'pacemaker', 'paddock', 'pacesetter', 'place', 'pole', 'post', 'quarter', 'racetrack', 'rail', 'scratch', 'stretch', 'track', 'winner', 'weight', 'belmont', 'secretariat', 'seabiscuit', 'jockey', 'rider'];
	var key1 = ['arrangement', 'attempt', 'August', 'canal', 'cast', 'chose', 'damage', 'Danny', 'deeply', 'donkey', 'Egypt', 'essential', 'finest', 'fireplace', 'floating', 'folks', 'happily', 'hunter', 'Illinois', 'image', 'independent', 'instant', 'January', 'manufacturing', 'Martin', 'mathematics', 'monkey', 'mysterious', 'neighborhood', 'occasionally', 'palace', 'Philadelphia', 'plates', 'poetry', 'policeman', 'positive', 'possibly', 'promised', 'recall', 'rocky', 'sale', 'scared', 'shake', 'shaking', 'shallow', 'shout', 'simplest', 'slope', 'silly', 'slight', 'slip', 'solar', 'spin', 'swung', 'trap', 'university', 'vapor', 'wealth'];
	var key2 = ['acres', 'adult', 'advice', 'Autumn', 'border', 'breeze', 'brick', 'calm', 'claws', 'coach', 'constantly', 'contrast', 'cookies', 'customs', 'depth', 'discussion', 'doll', 'exchange', 'exist', 'explanation', 'facing', 'film', 'fort', 'garage', 'grabbed', 'grandmother', 'habit', 'Harry', 'heading', 'kids', 'label', 'Lee', 'lungs', 'melted', 'memory', 'mill', 'mission', 'Mount', 'Norway', 'nuts', 'official', 'ourselves', 'Pennsylvania', 'practical', 'pride', 'relationship', 'remarkable', 'require', 'rhyme', 'rubbed', 'rush', 'satellites', 'satisfied', 'selection', 'soap', 'species', 'stiff', 'tales', 'thumb', 'tobacco', 'toy', 'treated', 'tune', 'vessels', 'wolf', 'zoo'];
	var key3 = ['affix', 'askew', 'avenue', 'awkward', 'bagpipes', 'bandwagon', 'banjo', 'bayou', 'boggle', 'bookworm', 'boxcar', 'buffalo', 'buffoon', 'buxom', 'buzzard', 'cobweb', 'cockiness', 'croquet', 'cycle', 'daiquiri', 'dirndl', 'dwarves', 'embezzle', 'equip', 'espionage', 'exodus', 'faking', 'flapjack', 'flopping', 'frazzled', 'frizzled', 'fuchsia', 'funny', 'galaxy', 'galvanize', 'gazebo', 'gizmo', 'glowworm', 'glyph', 'gnarly', 'grogginess', 'haiku', 'haphazard', 'icebox', 'injury', 'ivory', 'ivy', 'jawbreaker', 'jaywalk', 'jazziest', 'jazzy', 'jelly', 'jiujitsu', 'jockey', 'jogging', 'joyful', 'juicy', 'kazoo', 'keyhole', 'kiosk', 'kitsch', 'knapsack', 'larynx', 'lymph', 'marquis', 'matrix', 'mnemonic', 'mystify', 'naphtha', 'nowadays', 'numbskull', 'nymph', 'oxidize', 'oxygen', 'pajama', 'phlegm', 'pixel', 'polka', 'pshaw', 'puzzling', 'quartz', 'queue', 'quizzes', 'quorum', 'razzmatazz', 'rickshaw', 'schnapps', 'scratch', 'shiv', 'sphinx', 'spritz', 'strength', 'strengths', 'stretch', 'subway', 'swivel', 'thumbscrew', 'topaz', 'transcript', 'transplant', 'triphthong', 'unknown', 'unworthy', 'unzip', 'vixen', 'vodka', 'voodoo', 'voyeurism', 'walkway', 'waltz', 'wavy', 'waxy', 'wellspring', 'whiskey', 'whizzing', 'whomever', 'witchcraft', 'wizard', 'woozy', 'yachtsman', 'yippee', 'yoked', 'zephyr', 'zigzag', 'zigzagging'];
	var key4 = ['abruptly', 'absurd', 'abyss', 'axiom', 'azure', 'beekeeper', 'bikini', 'blitz', 'blizzard', 'boxful', 'buckaroo', 'buzzing', 'buzzwords', 'caliph', 'crypt', 'curacao', 'disavow', 'dizzying', 'duplex', 'euouae', 'fishhook', 'fixable', 'fjord', 'fluffiness', 'flyby', 'foxglove', 'gabby', 'giaour', 'gnostic', 'gossip', 'hyphen', 'iatrogenic', 'jackpot', 'jaundice', 'jigsaw', 'jinx', 'joking', 'jovial', 'jukebox', 'jumbo', 'kayak', 'khaki', 'kilobyte', 'kiwifruit', 'klutz', 'lengths', 'lucky', 'luxury', 'megahertz', 'microwave', 'nightclub', 'onyx', 'ovary', 'peekaboo', 'pizazz', 'pneumonia', 'psyche', 'puppy', 'quips', 'quixotic', 'quiz', 'rhubarb', 'rhythm', 'snazzy', 'squawk', 'staff', 'stronghold', 'stymied', 'syndrome', 'thriftless', 'transgress', 'twelfth', 'twelfths', 'uptown', 'vaporize', 'vortex', 'wave', 'wheezy', 'wimpy', 'wristwatch', 'wyvern', 'xylophone', 'youthful', 'yummy', 'zilch', 'zipper', 'zodiac', 'zombie'];
	var keyHorse = ['horse', 'mare', 'stallion', 'thoroughbred', 'backstretch', 'bearing', 'blinkers', 'book', 'breather', 'breeze', 'chute', 'closer', 'clubhouse', 'derby', 'kentucky', 'triple', 'crown', 'preakness', 'stakes', 'furlong', 'handicap', 'homestretch', 'stretch', 'juvenille', 'length', 'maiden', 'nose', 'odds', 'pace', 'pacemaker', 'paddock', 'pacesetter', 'place', 'pole', 'post', 'quarter', 'racetrack', 'rail', 'scratch', 'stretch', 'track', 'winner', 'weight', 'belmont', 'secretariat', 'seabiscuit', 'jockey', 'rider'];
	// var longest = ['manufacturing'];

	var key = '';
	var keyMap = [];
	var keyArray = key1;
	// var keyArray = longest;
	var keyArrayLength = keyArray.length;

	var guessesLeft = 6;
	var totalStrikesAllowed = guessesLeft;
	var allGuesses = [];
	var wrongLetters = [];
	var correctCount = 0;
	var winCount = 0;
	var startPoint = 15;
	var finishPoint = 85;

	var wrapLength = $('#player-wrap').width();
	var trackLength = finishPoint - startPoint;
	var keyLength = key.length;
	var increment = trackLength/key.length;
	var cpuIncrement = trackLength/totalStrikesAllowed;		

	var races = ['Qualifiers at Del Mar', 'Kentucky Derby', 'Preakness Stakes', 'Belmont Stakes'];
	var race = 1;
	var triplecrown = false;

// -----------------------------------------------------------
// Random Number Generator
// -----------------------------------------------------------
	function getRandomInt(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min)) + min;
	};

//-----------------------------------------------------------
// Initialize Function
//-----------------------------------------------------------
	function init(){
		console.log('----- new game -----')
		
		//-----------------------------------------------------------
		// Select Array  
		//-----------------------------------------------------------
			if (race === 1) { 
				keyArray = key1;
			}
			else if (race ===2 ) {
				keyArray = key2;
				$('#lane4 .ln-decor').attr('src','assets/images/waves-ds-pink-200.svg');
			}
			else if (race ===3 ) {
				keyArray = key3;
				$('#lane4 .ln-decor').attr('src','assets/images/waves-ds-yellow-200.svg');
			}
			else if (race ===4 ) {
				keyArray = key4;
				$('#lane4 .ln-decor').attr('src','assets/images/waves-ds-red-200.svg');
			}
			else { 
				keyArray = key4;
				triplecrown = true;
				$('#lane4 .ln-decor').attr('src','assets/images/waves-ds-purple-200.svg');
			}

		//-----------------------------------------------------------
		// Pick a word 
		//-----------------------------------------------------------
		var keyIndex = getRandomInt(0,keyArrayLength);
		key = keyArray[keyIndex].toLowerCase();
		console.log('cheat',keyArray[keyIndex]);

		//-----------------------------------------------------------
		// Set or Reset Variables
		//-----------------------------------------------------------

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

		//-----------------------------------------------------------
		// Make a space in letter board for each letter in keyword
		//-----------------------------------------------------------
		for (var i=0; i<key.length; i++) {
			var letNum = i;
			var letSpaceEl = '<span class="ltr-space" id="let'+ letNum +'"></span>'

			// Append new letter spaces to board
			$('div#ltr-board-wrap').append(letSpaceEl);
		}
		for (var i=0; i < (13-key.length); i++) {
			// var letNum = i;
			var letSpaceEl = '<span class="ltr-space inactive"></span>'

			$('div#ltr-board-wrap').append(letSpaceEl);

		}
		for (var i=0; i < 6; i++) {
			wrongLetterHTML = '<span id="wrong'+ i +'" class="ltr-space wrong-ltr inactive"></span>';
			$('#wrong-ltrs .content-wrap').append(wrongLetterHTML);
		}
		//-----------------------------------------------------------
		// Build keyMap (Process keyword, Calculate lengths)
		//-----------------------------------------------------------
			keyMap = [];

			for (var i=0; i<key.length; i++){
				keyMap.push(key[i]);
			};

			// console.log('keyMap',keyMap);
			// console.log('keyMapLength', keyMap.length);

		//  Player Movement Variables
			wrapLength = $('#player-wrap').width();
			trackLength = finishPoint - startPoint;
			keyLength = key.length;
			increment = trackLength/key.length;
			cpuIncrement = trackLength/totalStrikesAllowed;		

		//-----------------------------------------------------------
		// Character Movement (at Start) 
		//-----------------------------------------------------------
			$('.char').attr('pos',startPoint).css('left',startPoint+'%');

		// Update Race Name
			var raceName = races[race-1];
			$('#race-name').html('<span>Race '+race+':</span> <br>'+raceName);
			
			if (triplecrown === true) {
				$('#race-name').html('<span>Congrats!</span> <br> You won the Triple Crown!');
			}

	}; ////////////////////////// end init ////////////////////////////////////////////////
	
	// First initialization
	init();

	// New Game Button
	$('#new-game-button').on('click', init);


//-----------------------------------------------------------
// Gameplay function
//-----------------------------------------------------------
	$(document).on('keyup', function play(event){

		// Store user's guess into userGuess variable
			var userGuess = String.fromCharCode(event.which).toLowerCase();

		// Validate character input ---------------------------------
			var validated = false;
			var charCode = userGuess.charCodeAt(0);

			if (charCode <= 122 && charCode >= 97) {
				validated = true;
			}
			else {
				return;
			}

		// Check if already guessed ---------------------------------
			alreadyGuessed = false;
			
			for (var i=0; i<allGuesses.length; i++) {
				if (userGuess === allGuesses[i]) {
					alreadyGuessed = true;
					break;
					return;
				}
			}

		// Add current guess to prev guess array after already compared.
			allGuesses.push(userGuess);


	/////////////////////////////////////////////////////////////////////////////
		// Only Continue if Input is a real letter and unguessed 
			if (alreadyGuessed === false && validated === true) {

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

							// Toggle outcome to true (prevents else if from running)
							outcome = true;	

							////////////// USER WINS /////////////////////////////////////////////////////////
								if (correctCount === keyMap.length) {
									console.log('---- You Win! ----');
									winCount += 1;
									race += 1;
									$('#win-counter').text(winCount);
									// init();
								}
						}

					// IF WRONG -----------------------------
						else if ((i === keyMap.length - 1) && (outcome === false)) {
							
							//  Add incorrect letter to incorrect guess list
							wrongLetters.push(userGuess);
							// wrongLetterHTML = '<span class="ltr-space">' + userGuess + '</span>';
							// $('#wrong-ltrs .content-wrap').append(wrongLetterHTML);
							var strikes = totalStrikesAllowed - guessesLeft;
							var targetID = '#wrong'+strikes;
							$(targetID).text(userGuess).removeClass('inactive');

							
							// Reduce Guesses Left by 1, update text
							guessesLeft = guessesLeft - 1;
							$('#strike-counter').text(guessesLeft);

							////////////// USER LOSES /////////////////////////////////////////////////////////
							if (guessesLeft === 0) {
								console.log('---- You Lost! ----');
								winCount = 0;
								race = 1;
								init();
							}

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
			
		};

	// Call functions for each beta CPU
		cpuNewPos('#cpu2');
		cpuNewPos('#cpu3');
		
	}); // --- end play


}); // --- end document.ready

