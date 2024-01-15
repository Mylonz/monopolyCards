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


const chanceCards = [
    "Sheep Shearing Success! Your wool sells at a top price at the auction. Collect $2.5 million from the bank.",
    "Jandal Fine! You've been fined for not wearing proper footwear in public. Pay $1 million.",
    "Rugby Win! Your team takes the championship. Collect $1.5 million in sponsorship deals.",
    "Bungee Jump Bonus! Your daring jump attracts a crowd, and you land a TV spot. Collect $1 million.",
    "Kiwi Fruit Boom! Your kiwifruit orchard has a bumper crop. Bank pays you $2.25 million.",
    "Appointed as Wellington's Welly Boot Tossing Champ! Pay each player $500,000 for your victory party.",
    "Advance to Cape Reinga! Collect your travel vlog earnings of $2 million as you pass.",
    "Caught in a Timewarp at Weta Workshop! Go back three spaces and encounter Middle-earth.",
    "Pavlova Debate! Your argument that it's a Kiwi creation costs you. Pay $1.25 million in legal fees.",
    "Lord of the Rings Tour! You guide a celebrity tour and earn $2 million.",
    "All Blacks Autograph! You sell a signed rugby ball for a tidy profit. Collect $750,000.",
    "Win a Tiki Tour! You win a local radio contest and get a free holiday. Skip ahead to the next unowned property.",
    "Hobbiton Party Bang! DIY fireworks go astray while Gandalf away, apple harvest destroyed. Pay $1 million to import Bree Cider this year.",
    "L&P Overload! You bought too much of the good stuff. Pay $500,000 for a dentist visit.",
    "Southern Lights Spectacle! Your photo of the Aurora Australis goes viral. Collect $1.25 million in ad revenue."
    // ... add any additional card descriptions here
];

const communityChestCards = [
    "Flat White Spill! You accidentally spill coffee on a celebrity. Pay $500,000 in dry cleaning bills.",
    "Possum in the House! It ate through the wiring. Pay $750,000 for electric repairs.",
    "DIY Disaster! Your attempt to fix the plumbing floods your property. Pay $1 million in damages.",
    "Marmite Mishap! Your viral video about running out of Marmite earns you $1.5 million in ad revenue.",
    "Unexpected Heiress! A distant relative leaves you a fortune in sheep. Herd your way to the bank to collect $2 million.",
    "Gumboot Day Champion! Your impressive throw wins you the grand prize. Collect $500,000.",
    "Haka Performance! Your dance moves impress a talent scout. Collect $1 million for your new gig.",
    "Fush and Chups Feast! Your seafood restaurant is a hit. Collect $2.25 million from happy customers.",
    "Win the Great Kiwi Bake Off! Your pavlova is a national hit. Collect $1 million and a year's supply of whipped cream.",
    "Meteorite Discovery! You find a space rock in your backyard. Collect $2.5 million from the museum.",
    "Lost Tourists! You help a group of lost hobbits find their way. They pay you $750,000 for the guided tour.",
    "Giant Weta Encounter! Your photo with the giant insect goes viral. Collect $1.25 million in licensing fees.",
    "Best Pie Award! Your mince and cheese pie wins a national contest. Collect $500,000 and a trophy.",
    "Geothermal Spa Day! You discover a hot spring on your property. Charge for entry and collect $1.5 million.",
    "Unexpected Earthquake! Your bungee cord snaps (safely). The video goes viral, and you collect $1 million in views.",
    "Fairy Bread Comeback! Your nostalgic treat becomes a trendy dessert. Collect $2 million from a major food chain."
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
    // Create a new instance of SpeechSynthesisUtterance
  var utterance = new SpeechSynthesisUtterance(cardArray[0]);

  // Optionally set some properties
  utterance.pitch = 1; // Range between 0 and 2
  utterance.rate = 1; // Range between 0.1 (slowest) and 10 (fastest)

  // Speak the text
  window.speechSynthesis.speak(utterance);
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