# UNit2.FreelancerForum

A visitor enters the website and finds a list of available freelancers. Each freelancer has a name, an occupation, and a starting price for their services. They observe on the list Alice, the writer with a starting price of $30, and Bob, who is a teacher, has a starting price of $50.

The visitor also finds a message that displays the average starting price of all the freelancers. In this example, the average starting price is $40.

A few seconds later, a new listing appears for a freelancer named Carol, who is a programmer and has a starting price of $70. The average starting price is updated to $50.

New freelancers continue to appear every few seconds, and the average starting price is updated accordingly.

// === State ===
// SCREAMING_SNAKE_CASE is used to denote constants: variables that are "hard-coded"
const NAMES = [
"John",
"Lenny",
"Andrew",
"Peter",
"Anna",
"Albert",
"Adam",
"Robert",
];
const OCCUPATIONS = [
"gardener",
"programmer",
"teacher",
"driver",
"designer",
"painter",
"writer",
"actor",
];
const MAX_FREELANCERS = 25;

const freelancers = [
{ name: "Dr. Slice", price: 25, occupation: "gardener" },
{ name: "Dr. Pressure", price: 51, occupation: "programmer" },
{ name: "Prof. Possibility", price: 43, occupation: "teacher" },
{ name: "Prof. Prism", price: 81, occupation: "teacher" },
{ name: "Dr. Impulse", price: 43, occupation: "teacher" },
{ name: "Prof. Spark", price: 76, occupation: "programmer" },
{ name: "Dr. Wire", price: 47, occupation: "teacher" },
{ name: "Prof. Goose", price: 72, occupation: "driver" },
];
let averagePrice = 0;

/\*_ Adds a random freelancer to state _/
function addFreelancer() {
// Pick random name, occupation and price
const name = NAMES[Math.floor(Math.random() * NAMES.length)];
const occupation =
OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
const price = 1 + Math.floor(Math.random() \* 100);

freelancers.push({ name, occupation, price });
}

/\*_ Updates average price according to freelancers in state _/
function updateAveragePrice(state) {
const total = freelancers.reduce(
(acc, freelancer) => acc + freelancer.price,
0
);
averagePrice = total / freelancers.length;
}

// === Render ===
/\*_ Renders freelancers onto the page _/
function renderFreelancers() {
const $freelancers = freelancers.map((freelancer) => {
const $tr = document.createElement("tr");

    $tr.innerHTML = `
    <td>${freelancer.name}</td>
    <td>${freelancer.occupation}</td>
    <td>$${freelancer.price}</td>
    `;

    // NOTE: We can set `innerHTML` directly, but it can be a security risk!
    // You can accomplish the same goal with the code below

    /*
    const $nameTd = document.createElement("td")
    $nameTd.textContent = freelancer.name;

    const $occupationTd = document.createElement("td")
    $occupationTd.textContent = freelancer.occupation;

    const $priceTd = document.createElement("td")
    $priceTd.textContent = freelancer.price;

    $tr.replaceChildren(...[$nameTd, $occupationTd, $priceTd]);
    */

    return $tr;

});

const $tbody = document.querySelector(".freelancers tbody");
  $tbody.replaceChildren(...$freelancers);
}

/\*_ Renders the average price _/
function renderAveragePrice() {
const $price = document.querySelector(".average_price");
  $price.textContent = `$${averagePrice.toFixed(2)}`;
}

/\*_ Renders everything in state _/
function render() {
renderFreelancers();
renderAveragePrice();
}

// === Script ===

// Initial render
updateAveragePrice();
render();

// Add a freelancer every second until max is reached
const freelancerInterval = setInterval(function () {
addFreelancer();
updateAveragePrice();
render();

if (freelancers.length >= MAX_FREELANCERS) {
clearInterval(freelancerInterval);
}
}, 1000);
