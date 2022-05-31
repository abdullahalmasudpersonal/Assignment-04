// Problem 1: anaToVori
function anaToVori(ana) {
var ana = ana / 16;
if (ana <= 0) {
console.log('Type a valid number')
}
else {
console.log(ana);
}
}
const vori = anaToVori(0);
// Problem 2: pandaCost
function pandaCost(singaraQuantity, samuchaQuantity, gilapiQuantity) {
const perSingaraPrice = 7;
const perSamuchaPrice = 10;
const perGilapiPrice = 15;
const singaraPriceQuantity = singaraQuantity * perSingaraPrice;
const samuchaPriceQuantity = samuchaQuantity * perSamuchaPrice;
const gilapiPriceQuantity = gilapiQuantity * perGilapiPrice;
const totalPrice = singaraPriceQuantity + samuchaPriceQuantity + gilapiPriceQuantity;
const totalPrices = samuchaPriceQuantity + gilapiPriceQuantity;
if (singaraQuantity <= 0) {
console.log('Please give of singara Quantity minimum 1')
}
return totalPrice;
}
const totalPandaCost = pandaCost(0, 15, 18);
console.log(totalPandaCost);
// Problem 3: picnicBudget
function picnicBudget(peopleCount) {
const first100PersonBudget = 5000;
const second100PersonBudget = 4000;
const restPersonBudget = 3000;
if (peopleCount <= 0) {
return 'Please give of people Quantity minimum 1';
}
else if (peopleCount <= 100) {
const budget = peopleCount * first100PersonBudget;
return budget;
}
else if (peopleCount <= 200) {
const first100Person = 100 * first100PersonBudget;
const restPersonCount = peopleCount - 100;
const second100Person = restPersonCount * second100PersonBudget;
const totalBudget = first100Person + second100Person;
return totalBudget;
}
else {
const first100Person = 100 * first100PersonBudget;
const second100Person = 100 * second100PersonBudget;
const restPersonCount = peopleCount - 200;
const restPerson = restPersonCount * restPersonBudget;
const totalBudget = first100Person + second100Person + restPerson;
return totalBudget;
}
}
const totalPeoples = picnicBudget(0);
console.log(totalPeoples);
// Problem 4: oddFriend
const friendNames = ["maksud", "mahmud", "halal", "munira", "mansura", "mariam", 'naima', 'mustakim'];
function oddFriend(friendNames) {
for (let i = 0; i < friendNames.length; i++) {
if (friendNames[i].length % 2 != 0) {
return friendNames[i];
}
}
}
const myFriend = oddFriend(friendNames);
console.log(myFriend);