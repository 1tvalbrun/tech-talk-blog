const Typewriter = function(txtElement, words, wait = 1000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordsIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// Type Method
Typewriter.prototype.type = function() {
  // Current Index of Word
  const current = this.wordsIndex % this.words.length;
  // Get Full Text of Current Word
  const fullTxt = this.words[current];
  // Check if deleting
  this.isDeleting
    ? (this.txt = fullTxt.substring(0, this.txt.length - 1))
    : (this.txt = fullTxt.substring(0, this.txt.length + 1));

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // Initial type speed
  let typeSpeed = 300;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  // If word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // Pause at end
    typeSpeed = this.wait;
    // Set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    //Move to next word
    this.wordsIndex++;
    //Pause before start typing
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
};
// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init Typwriter
  new Typewriter(txtElement, words, wait);
}
