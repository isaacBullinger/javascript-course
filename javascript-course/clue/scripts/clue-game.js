let phrase;       
const who = [
    'Green',
    'Mustard',
    'Peacock',
    'Plum',
    'Scarlet',
    'Orchid'
]
const what = [
    'candlestick',
    'dagger',
    'revolver',
    'lead pipe',
    'rope',
    'wrench'
]
const where = [
    'conservatory',
    'ballroom',
    'kitchen',
    'dining room',
    'lounge',
    'hall',
    'study',
    'library',
    'billiard room'
]
let cards = who.concat(what, where);
let envelope = {
    who: '',
    what: '',
    where: ''
}
let accusation = {
    who: '',
    what: '',
    where: '',
}
let player = [];

console.log(cards);
let remainingCards = setupGame();
console.log(remainingCards);

let human = [];
let computer0 = [];
let computer1 = [];
let computer2 = [];
let computer3 = [];
let computer4 = [];

human = createPlayer(human, remainingCards);
computer0 = createPlayer(computer0, remainingCards);
computer1 = createPlayer(computer1, remainingCards);
computer2 = createPlayer(computer2, remainingCards);
computer3 = createPlayer(computer3, remainingCards);
computer4 = createPlayer(computer4, remainingCards);

function setupGame () {
    let shuffledWho = shuffleCards(who, 5);
    let shuffledWhat = shuffleCards(what, 5);
    let shuffledWhere = shuffleCards(where, 5);
    envelope.who = shuffledWho[0];
    envelope.what = shuffledWhat[0];
    envelope.where = shuffledWhere[0];

    // console.log(`It was ${envelope.who} with the ${envelope.what} in the ${envelope.where}!`);

    let shuffledCards = shuffleCards(cards, 5);
    for (let i = 0; i < shuffledCards.length - 1; i++) {
        if (envelope.who === shuffledCards[i] || envelope.what === shuffledCards[i] || envelope.where === shuffledCards[i]) {
            shuffledCards.splice(i, 1)
        }
    }
    return shuffledCards;
}

function shuffleCards (array, number) {
    let index = 0;
    while (index < number) {
        for (let i = array.length - 1; i > 0; i--) {
            const swap = Math.floor(Math.random() * (i + 1));
            [array[i], array[swap]] = [array[swap], array[i]];
        }
        index++;
    }   
    return array;
}

function createPlayer (player, cards) {
    player.push(cards[0]);
    player.push(cards[1]);
    player.push(cards[2]);
    cards.splice(0, 3);
    console.log(player);

    return player;
}

function checkPlayer (accusation, cards) {
    for (let i = 0; i < player.lengh; i++) {
        if (accusation.who === player[i] || accusation.what === player[i] || accusation.where === player[i]) {
            return player[i];
        } else {
            break;
        }
    }
}

function turn () {

    accusation.who = document.querySelector('.js-who-input').value;
    // console.log(accusation.who);
    accusation.what = document.querySelector('.js-what-input').value;
    // console.log(accusation.what);
    accusation.where = document.querySelector('.js-where-input').value;
    // console.log(accusation.where);

    checkPlayer(accusation, computer0);
    checkPlayer(accusation, computer1);
    checkPlayer(accusation, computer2);
    checkPlayer(accusation, computer3);
    checkPlayer(accusation, computer4);
}