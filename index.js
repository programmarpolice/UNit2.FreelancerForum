const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
  { name: "Patricia", occupation: "Teacher", price: 65 },
  { name: "Derek", occupation: "Programmer", price: 80 },
  { name: "Beatrice", occupation: "Therapist", price: 120 },
  { name: "Libby", occupation: "Psychologist", price: 110 },
  { name: "Brandon", occupation: "Handyman", price: 45 },
];
// Setting up the containers
const freelancerList = document.getElementById("freelancerList");
const averagePrice = document.getElementById("averagePrice");

// Calculate the average price
function getAveragePrice() {
  const totalPrice = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  return totalPrice / freelancers.length;
}
// Making it render
function render() {
  const $freelancers = freelancers.map((freelancer) => {
    const NameElement = document.createElement("li");
    const nameText = document.createTextNode(freelancer.name);
    NameElement.appendChild(nameText);

    const OccupationElement = document.createElement("li");
    const occText = document.createTextNode(freelancer.occupation);
    OccupationElement.appendChild(occText);

    const PriceElement = document.createElement("li");
    const priceText = document.createTextNode(freelancer.price);
    PriceElement.appendChild(priceText);

    return NameElement;
  });

  freelancerList.replaceChildren(...$freelancers);
}
render();
// Doing the interval
