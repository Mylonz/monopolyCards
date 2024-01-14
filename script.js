// This array contains a list of messages representing chance cards in a game.
// const chanceCards = [
//     "Market Boom! Your stock investments paid off. Collect $2.5 million from the bank.",
//     "Speeding Fine! You've been caught speeding around the board. Pay $1 million in fines.",
//     "Property Tax Rebate! A clerical error in your favor has reduced your taxes. Collect $1.5 million from the bank.",
//     "Insurance Maturity! Your property insurance matures. Collect $1 million from the bank.",
//     "Bank Dividends! The bank pays you dividends of $2.25 million.",
//     "Elected Chairman of the Board! Pay each player $500,000 for your campaign expenses.",
//     "Advance to Go! Collect your salary of $2 million as you pass.",
//     "Get Out of Jail Free! This card may be kept until needed or sold.",
//     "Go Back Three Spaces! Sometimes it's good to look back. Move back and follow the instructions on the space.",
//     "Roadworks! Pay $1.25 million for repairs on all your properties."
//     // ... add any additional card descriptions here
// ];

const chanceCards = [
    "Sheep Shearing Success! Your wool sells at a top price at the auction. Collect $2.5 million from the bank.",
    "Jandal Fine! You've been fined for not wearing proper footwear in public. Pay $1 million.",
    "Rugby Win! Your team takes the championship. Collect $1.5 million in sponsorship deals.",
    "Bungee Jump Bonus! Your daring jump attracts a crowd, and you land a TV spot. Collect $1 million.",
    "Kiwi Fruit Boom! Your kiwifruit orchard has a bumper crop. Bank pays you $2.25 million.",
    "Appointed as Wellington's Welly Boot Tossing Champ! Pay each player $500,000 for your victory party.",
    "Advance to Cape Reinga! Collect your travel vlog earnings of $2 million as you pass.",
    "Find a Moa Feather! It's incredibly rare. You may keep this card for good luck or auction it.",
    "Caught in a Timewarp at Weta Workshop! Go back three spaces and encounter Middle-earth.",
    "Pavlova Debate! Your argument that it's a Kiwi creation costs you. Pay $1.25 million in legal fees.",
    "Lord of the Rings Tour! You guide a celebrity tour and earn $2 million.",
    "All Blacks Autograph! You sell a signed rugby ball for a tidy profit. Collect $750,000.",
    "Win a Tiki Tour! You win a local radio contest and get a free holiday. Skip ahead to the next unowned property.",
    "Hobbiton Garden Party! You host a shindig that's the talk of the Shire. Pay $1 million for catering.",
    "L&P Overload! You bought too much of the good stuff. Pay $500,000 for a dentist visit.",
    "Southern Lights Spectacle! Your photo of the Aurora Australis goes viral. Collect $1.25 million in ad revenue."
    // ... add any additional card descriptions here
];

// This array contains a list of messages representing community chest cards in a game.
const communityChestCardsold = [
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

/**
 * Draws a random card from the provided card array.
 * @param {Array} cardArray - An array of card messages from which to draw.
 * @return {string} - The message from the randomly selected card.
 */
function drawCard(cardArray) {
    const randomIndex = Math.floor(Math.random() * cardArray.length);
    return cardArray[randomIndex];
}

// // Event listener for drawing a chance card. It updates the card display with the drawn card's message.
// document.getElementById('draw-chance').addEventListener('click', function() {
//     const cardText = drawCard(chanceCards);
//     document.getElementById('card-display').textContent = cardText;
// });

// // Event listener for drawing a community chest card. It updates the card display with the drawn card's message.
// document.getElementById('draw-community').addEventListener('click', function() {
//     const cardText = drawCard(communityChestCards);
//     document.getElementById('card-display').textContent = cardText;
// });

// Event listener for drawing a chance card. It updates the card display with the drawn card's message and border color.
document.getElementById('draw-chance').addEventListener('click', function() {
    const cardText = drawCard(chanceCards);
    const cardDisplay = document.getElementById('card-display');
    cardDisplay.textContent = cardText;
    cardDisplay.style.borderColor = '#007bff'; // Blue color for Chance cards
});

// Event listener for drawing a community chest card. It updates the card display with the drawn card's message and border color.
document.getElementById('draw-community').addEventListener('click', function() {
    const cardText = drawCard(communityChestCards);
    const cardDisplay = document.getElementById('card-display');
    cardDisplay.textContent = cardText;
    cardDisplay.style.borderColor = '#ff6f61'; // Orange color for Community Chest cards
});