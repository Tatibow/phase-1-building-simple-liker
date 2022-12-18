// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.querySelector("div#modal");
modal.classList = "hidden";

const likeButton = document.querySelector("span.like-glyph")
likeButton.addEventListener("click", () => {
  mimicServerCall()
    .then(() => updateHeart())
    .catch(error => {
      document.querySelector(".hidden").remove();
      let pErrorMsg = document.querySelector("p#modal-message")
      pErrorMsg.textContent = error.message;
    })
})

function updateHeart() {
  if (likeButton.innerText === EMPTY_HEART) {
    likeButton.innerText = FULL_HEART;
  }
  else if (likeButton.innerText === FULL_HEART) {
    likeButton.innerText = EMPTY_HEART;
  }
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
