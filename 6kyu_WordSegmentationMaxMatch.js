const VALID_WORDS = [ 'luck',
'this',
'is',
'a',
'japanese',
'doll',
'it',
'free',
'should',
'we',
'start',
'class',
'now',
'or',
'wait',
'for',
'everyone',
'to',
'get',
'here',
'purple',
'pig',
'and',
'green',
'donkey',
'flew',
'kite',
'in',
'the',
'middle',
'of',
'night',
'ended',
'up',
'sunburnt',
'joe',
'made',
'sugar',
'cookies',
'susan',
'decorated',
'them',
'what',
'was',
'person',
'thinking',
'when',
'they',
'discovered',
'cows',
'milk',
'fine',
'human',
'consumption',
'why',
'did',
'do',
'first',
'place',
'quick',
'brown',
'fox',
'jumps',
'over',
'lazy',
'dog',
'i',
'checked',
'make',
'sure',
'that',
'he',
'still',
'alive',
'turned',
'research',
'paper',
'on',
'friday',
'otherwise',
'would',
'have',
'not',
'passed',
'mary',
'plays',
'piano',
'let',
'me',
'help',
'you',
'with',
'your',
'baggage',
'if',
'like',
'tuna',
'tomato',
'sauce',
'try',
'combining',
'two',
'its',
'really',
'as',
'bad',
'sounds',
'getting',
'dark',
'werent',
'there',
'yet',
'want',
'go',
'work',
'but',
'am',
'too',
'sick',
'drive',
'lake',
'long',
'way',
'from',
'very',
'proud',
'my',
'nickname',
'throughout',
'high',
'school',
'today',
'couldnt',
'be',
'any',
'different',
'easter',
'bunny',
'tooth',
'fairy',
'had',
'babies',
'take',
'teeth',
'leave',
'chocolate',
'got',
'early',
'good',
'seats',
'river',
'stole',
'gods',
'last',
'random',
'sentence',
'will',
'writing',
'going',
'stop',
'midsent',
'people',
'eaters',
'are',
'real',
'where',
'find',
'eat',
'she',
'only',
'paints',
'bold',
'colors',
'does',
'pastels',
'abstraction',
'often',
'one',
'floor',
'above',
'buy',
'onesie',
'know',
'wont',
'suit',
'how',
'math',
'test',
'lets',
'all',
'unique',
'together',
'until',
'realise',
'same',
'old',
'apple',
'revels',
'authority',
'short',
'see',
'fence',
'happy',
'donation',
'amount',
'greatly',
'appreciated',
'list',
'sentences',
'harder',
'than',
'initially',
'thought',
'sometimes',
'need',
'completely',
'an',
'ass',
'yourself',
'laugh',
'off',
'life',
'isnt',
'so',
'after',
'mysterious',
'diary',
'records',
'voice',
'lot',
'rain',
'june',
'book',
'front',
'table',
'rock',
'music',
'approaches',
'at',
'velocity',
'advised',
'him',
'come',
'back',
'once',
'said',
'yesterday',
'however',
'many',
'saw',
'hurry',
'always',
'speaks',
'loud',
'never',
'home',
'sundays',
'more',
'detailed',
'information',
'didnt',
'dentist',
'went',
'anyway',
'id',
'rather',
'bird',
'fish',
'tom',
'small',
'piece',
'pie',
'thoughts',
'time',
'1111',
'1234',
'clocks',
'mum',
'tries',
'cool',
'by',
'saying',
'likes',
'things',
'body',
'may',
'perhaps',
'compensates',
'loss',
'true',
'metaphysics',
'hear',
'nancy',
'pretty',
'clock',
'within',
'blog',
'laptop',
'1',
'hour',
'each',
'other',
'borrowed',
'years',
'ago',
'hasnt',
'returned',
'italy',
'favorite',
'country',
'fact',
'plan',
'spend',
'weeks',
'next',
'year',
'busy',
'movie',
'alone',
'little',
'car',
'door',
'slammed',
'shut',
'hand',
'remember',
'quite',
'vividly',
'waves',
'were',
'crashing',
'shore',
'lovely',
'sight',
'works',
'jobs',
'ends',
'meet',
'least',
'her',
'reason',
'having',
'join',
'us',
'young',
'again',
'ever',
'oh',
'just',
'older',
'white',
'out',
'conditions',
'town',
'subsequently',
'roads',
'impassable',
'cats',
'pets',
'clean',
'noisy',
'been',
'asia',
'nor',
'visited',
'africa',
'dont',
'step',
'broken',
'glass',
'love',
'eating',
'toasted',
'cheese',
'sandwiches',
'christmas',
'coming',
'cheat',
'right',
'thing',
'something',
'ill',
'stay',
'away',
'think',
'red',
'lease',
'blue',
'someone',
'recently',
'combined',
'maple',
'syrup',
'buttered',
'popcorn',
'taste',
'caramel',
'recommend',
'anyone',
'else',
'either',
'memory',
'used',
'share',
'no',
'longer',
'coherent',
'wednesday',
'hump',
'day',
'has',
'asked',
'camel',
'hes',
'about',
'currently',
'4',
'windows',
'open',
'stranger',
'officiates',
'meal',
'gotten',
'promotion',
'attendance',
'wasnt',
'enough',
'best',
'yeah',
'environment',
'learning',
'english',
'ran',
'money',
'playing',
'poker',
'shooter',
'says',
'goodbye',
'his',
'check',
'tomorrow',
'arrived',
'please',
'outside',
'house',
'counting',
'calories',
'dessert',
'told',
'exciting',
'adventure',
'story',
'song',
'can',
'ruin',
'persons',
'malls',
'great',
'places',
'shop',
'everything',
'under',
'roof',
'better',
'walk',
'later',
'youre',
'frame',
'mind',
'sixtyfour',
'comes',
'asking',
'bread',
'folded',
'handkerchief',
'neatly',
'wow',
'wrote',
'letter',
'read',
'sky',
'clear',
'stars',
'twinkling',
'vacant',
'rent',
'room',
'our',
'party',
'glittering',
'gem',
'ice',
'cream',
'freezer',
'store',
'three',
'spotted',
'striped',
'worm',
'shake',
'hands',
'legless',
'lizard' ];

function maxMatch(sentence){
  const result = [];

  const findLongestWordInSentence = sentence => Array
    .from(VALID_WORDS).sort((a,b) => b.length-a.length)
    .find(word => sentence
    .indexOf(word) === 0);

  while(sentence.length > 0) {
    var wordInSentence = findLongestWordInSentence(sentence);
    if (wordInSentence){
      sentence = sentence.slice(wordInSentence.length, sentence.length);
    } else {
      wordInSentence = sentence[0];
      sentence = sentence.slice(1, sentence.length);
    } 
    result.push(wordInSentence);
  }

  return result;
}

console.log(maxMatch('goodluck'), ['good','luck']);
console.log(maxMatch('ewingsa'),['e','w','in','g','s','a']);//'ewingsa' is not a valid word    