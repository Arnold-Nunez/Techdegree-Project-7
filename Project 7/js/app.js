// Variables------------------------
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const starter = document.querySelector('.btn__reset');
let missed = 0;

//Random phrase array
const phrases = ['one piece', 'attack on titan', 'dragonball', 'black clover', 'naruto'];

//Functions--------------------------

function getRandomPhraseAsArray(arr) {
  //do stuff to any arr that is passed in
  return arr[Math.round(Math.random() * phrases.length)].split('');
}

function addPhraseToDisplay(arr) {
  // do stuff any arr that is passed in, and add to `#phrase ul`
  for(let i = 0; i < arr.length; i++) {
    const li = document.createElement('li');
    const ul = document.querySelector('ul');
    li.textContent = arr[i];
  if (arr[i] != ' ' ) {
    li.setAttribute('class', 'letter');
  } else {
    li.setAttribute('class', 'space');
  }
  ul.appendChild(li);
 }
}

function checkLetter(button) {
  const letter = document.querySelectorAll('.letter');
  for(let i = 0; i < letter.length; i++) {
    if(button.textContent == letter[i].textContent) {
      letter[i].setAttribute('class', 'show');
    } else {
      return null;
    }
  }
}

function checkWin() {
  const show = document.querySelectorAll('.show');
  const letter = document.querySelectorAll('.letter');
  const overlay = document.getElementById('overlay');

  if(show.length == letter.length) {
    overlay.className = 'win';
    overlay.textContent = "You've won";
  } else if(missed >= 5) {
    overlay.className = 'lose';
    overlay.textContent = "You've lost. Play again";
  }
}

function restart() {
  Location.reload();
}

//Event Listener----------------------------------

// remove overlay
starter.addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
    if (starter.textContent === 'Start Game') {
    overlay.style.display = 'none';
  } else {
    restart();
  }
  });

//keyboard chose
qwerty.addEventLister('click', (e) => {
  const buttonKey = e.target;
  if(e.target.tagName === 'button') {
    buttonKey.className === 'chosen';
    buttonKey.disabled = true;
  }
  const letterFound = checkLetter(buttonKey);

  if (letterFound == null) {
    missed =+ 1;
  }
  checkWin();
});


//Call in Functions---------------------


getRandomPhraseAsArray(phrases);

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
