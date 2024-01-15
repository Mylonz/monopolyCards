// This array contains a list of messages representing chance cards in a game.
const chanceCardsOld = [
    "Market Boom! Your stock investments paid off. Collect $2.5 million from the bank.",
    "Speeding Fine! You've been caught speeding around the board. Pay $1 million in fines.",
    "Property Tax Rebate! A clerical error in your favor has reduced your taxes. Collect $1.5 million from the bank.",
    "Insurance Maturity! Your property insurance matures. Collect $1 million from the bank.",
    "Bank Dividends! The bank pays you dividends of $2.25 million.",
    "Elected Chairman of the Board! Pay each player $500,000 for your campaign expenses.",
    "Advance to Go! Collect your salary of $2 million as you pass.",
    "Get Out of Jail Free! This card may be kept until needed or sold.",
    "Go Back Three Spaces! Sometimes it's good to look back. Move back and follow the instructions on the space.",
    "Roadworks! Pay $1.25 million for repairs on all your properties."
    // ... add any additional card descriptions here
];

// This array contains a list of messages representing community chest cards in a game.
const communityChestCardsOld = [
    "Community Spirit! You organized a car wash fundraiser for the local fire brigade. Collect $50k from the bank.",
    "Warm Hearts, Warm Paws! Your knitting club made cozy blankets for the animal shelter. Advance to Go and collect $200k.",
    "Neighborhood Hero! You volunteered for the beach cleanup. Receive a thank you gift of $100k.",
    "Cultural Exchange! You hosted international students for a cultural fair. Collect $25k from every player.",
    "Block Party Bonanza! Your street's block party was a hit. Pay $20k for supplies, but gain lots of happy memories.",
    "Local Library Donation! You donated books to the community library. Collect $10k from the bank as a token of appreciation.",
    "Sports Day Champion! You won the community sports day 3-legged race. Collect $50k.",
    "Green Thumb! Your community garden won an award. Collect $75k for your contribution.",
    "Charity Concert! You performed at a charity concert and raised money for a good cause. Collect $100k.",
    "Community Builder! You volunteered to help build a playground. The community thanks you with $150k."
    // ... add any additional card descriptions here
];



// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to flip the card and show the next instruction
function flipCard(cardElement, cardArray) {
    if (cardElement.classList.contains('flipped')) {
        // Card is already flipped, move instruction to the end of the array
        cardArray.push(cardArray.shift());
    } else {
        // Card is not flipped, show the next instruction
        const cardBack = cardElement.querySelector('.card-back p');
        cardBack.textContent = cardArray[0];
    }

    // Flip the card
    cardElement.classList.toggle('flipped');
}

document.addEventListener('DOMContentLoaded', function() {
    // Shuffle the card arrays when the page loads
    shuffle(chanceCards);
    shuffle(communityChestCards);

    // Event listener for the Chance card click
    const chanceCard = document.getElementById('chance-card');
    chanceCard.addEventListener('click', function() {
        flipCard(chanceCard, chanceCards);
    });

    // Event listener for the Community Chest card click
    const communityCard = document.getElementById('community-card');
    communityCard.addEventListener('click', function() {
        flipCard(communityCard, communityChestCards);
    });
});