const qwerty = document.querySelector('#qwerty');
const phrase = document.getElementById('phrase');
const starter = document.querySelector('.btn__reset');
let missed = 0;

const phrases = ['one piece','attack on titan','dragonball','black clover','naruto'];

function getRandomPhraseAsArray(arr) {
  return arr[Math.round(Math.random() * (arr.length - 1))].split('');
}

function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('li');
    li.textContent = arr[i].toUpperCase();
    document.querySelector('ul').appendChild(li);

    if (arr[i] != ' ') {
      li.classList.add('letter');
    } else {
      li.classList.add('space');
    }
  }
}

function checkLetter(button) {
  const letters = document.querySelectorAll('.letter');
  let match = null;

  for (let i = 0; i < letters.length; i++) {
    if (button.textContent.toUpperCase() == letters[i].textContent) {
      match = button.textContent;
      letters[i].classList.add('show');
    }
  }
  return match;
}

function checkWin() {
  const show = document.querySelectorAll('.show');
  const letter = document.querySelectorAll('.letter');
  const overlay = document.querySelector('#overlay');

  if (show.length == letter.length) {
    overlay.classList.add = 'win';
    overlay.textContent = "You've won";
    overlay.style.display = '';
  } else if (missed === 5) {
    overlay.classList.add = 'lose';
    overlay.textContent = "You've lost. Play again";
    overlay.style.display = '';
  }
}

function restart() {
  location.reload();
}

starter.addEventListener('click', () => {
  if (starter.textContent === 'Start Game') {
    starter.parentElement.style.display = 'none';
  } else {
    restart();
  }
});

qwerty.addEventListener('click', (event) => {
const buttonKey = event.target;

    if (event.target.tagName === 'BUTTON') {
    buttonKey.className = 'chosen';
    buttonKey.disabled = true;

    const letterFound = checkLetter(buttonKey);

    if (letterFound === null) {
      missed += 1;
    }

    if (missed >= 1 && missed <= 5) {
      const hearts = document.getElementsByTagName('img');
      hearts[missed - 1].src = 'images/lostHeart.png';
    }
  }
    checkWin();
  });

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
