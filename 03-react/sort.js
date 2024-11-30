let persons = ["Zahid", "Muneeb", "Ali"];

function testSort() {
  persons.sort();
  populatePersons();
}

function populatePersons() {
  const personsList = document.getElementById("persons");
  personsList.innerHTML = ""; // Clear the existing list
  for (let i = 0; i < persons.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = persons[i];
    personsList.appendChild(listItem);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  populatePersons();
});
