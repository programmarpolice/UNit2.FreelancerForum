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
  "Psychologist",
  "programmer",
  "teacher",
  "driver",
  "Therapist",
  "painter",
  "writer",
  "actor",
];
const maxFreelancers = 25;

const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
  { name: "Patricia", occupation: "Gardner", price: 65 },
  { name: "Derek", occupation: "Programmer", price: 80 },
  { name: "Beatrice", occupation: "Therapist", price: 120 },
  { name: "Libby", occupation: "Psychologist", price: 110 },
  { name: "Brandon", occupation: "Handyman", price: 45 },
];
let averagePrice = 0;

/** Adds a random freelancer to state */
function addFreelancer() {
  // Pick random name, occupation and price
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const price = 1 + Math.floor(Math.random() * 100);

  freelancers.push({ name, occupation, price });
}

/** Updates average price according to freelancers in state */
function updateAveragePrice(state) {
  const total = freelancers.reduce(
    (acc, freelancer) => acc + freelancer.price,
    0
  );
  averagePrice = total / freelancers.length;
}

// === Render ===
/** Renders freelancers onto the page */
function renderFreelancers() {
  const $freelancers = freelancers.map((freelancer) => {
    const $tr = document.createElement("tr");

    $tr.innerHTML = `
    <td>${freelancer.name}</td>
    <td>${freelancer.occupation}</td>
    <td>$${freelancer.price}</td>
    `;

    return $tr;
  });

  const $tbody = document.querySelector(".freelancers tbody");
  $tbody.replaceChildren(...$freelancers);
}

/** Renders the average price */
function renderAveragePrice() {
  const $price = document.querySelector(".average_price");
  $price.textContent = `$${averagePrice.toFixed(2)}`;
}

/** Renders everything in state */
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
