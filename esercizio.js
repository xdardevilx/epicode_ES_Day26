const petNameInput = document.getElementById("petName");
const ownerNameInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");

const pets = [];
let sameOwner = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  compareOwnerName(otherOwnerName) {
    return this.ownerName === otherOwnerName;
  }
}

const fillRowWithCards = function () {
  const row = document.getElementById("pet");

  row.innerHTML = "";

  pets.forEach((pet, index) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col");

    const messageParagraph = document.createElement("p");

    if (sameOwner[index] === true) {
      messageParagraph.textContent = "Hanno lo stesso padrone";
    } else if (sameOwner[index] === false) {
      messageParagraph.textContent = "Non hanno lo stesso padrone";
    }

    newCol.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${pet.petName} di ${pet.ownerName}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${pet.species}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">${pet.breed}</h6>
            </div>
        </div>
    `;

    newCol.querySelector(".card-body").appendChild(messageParagraph);

    row.appendChild(newCol);
  });

  petNameInput.value = "";
  ownerNameInput.value = "";
  speciesInput.value = "";
  breedInput.value = "";
};

const formReference = document.getElementsByTagName("form")[0];
formReference.addEventListener("submit", function (e) {
  e.preventDefault();

  const newPet = new Pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  );

  const hasSameOwner = pets.some((pet) =>
    pet.compareOwnerName(newPet.ownerName)
  );

  sameOwner.push(hasSameOwner);

  pets.push(newPet);

  fillRowWithCards();
});
