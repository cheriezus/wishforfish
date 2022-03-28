
function yourName() {
  let name = prompt("What is your silly fish name?");
  document.write(name + "fish is a silly name");
}

function guessNumber() {
  let answer;
  let guesses = 0;

  do {
    guesses++;
    answer = prompt("How many years can a goldfish live?");
  } while (parseInt(answer) !== 15)

  if (parseInt(answer) === 15) {
    document.write("It took you " + guesses + " times to guess the life of a fish")
  }

}

function rating() {
  let output = '';
  let rating = prompt("Scale of 1-5 how cool is this website?");

  for (let i = 0; i < rating; i++) {
    output += "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0F4vCc7UMN1abHeUvtOZbkasi7ymb5fI6JUB_zbP6E9yRwKubHAuACpA_yED5uE2PuoU&usqp=CAU' />";
  }

  document.write(output);
}

yourName();
guessNumber();
rating();