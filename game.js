//Denne JS-koden er laget klar for deg. Den trenger du ikke endre på.

//Stats for heroes
let heroesArray = [
  {
    id: 0,
    name: "Henriette Healer",
    maxHP: 400,
    currentHP: 400,
    damage: 800, //original value is 100
    alive: true,
  },
  {
    id: 1,
    name: "Ariana archer",
    maxHP: 500,
    currentHP: 500,
    damage: 400,
    alive: true,
  },
  {
    id: 2,
    name: "Wyona Warrior",
    maxHP: 600,
    currentHP: 600,
    damage: 400,
    alive: true,
  },
];

let dragonObject = {
  name: "Daar Dragon",
  maxHP: 2000,
  currentHP: 2000,
  damage: 200,
  alive: true,
};

//Enum - used as a reference to the array index.
const Heroes = {
  healer: 0,
  archer: 1,
  warrior: 2,
};

const HealerImage = document.querySelector(".healer");
const HealerHealthbar = document.querySelector(".healer-health");
const HealerName = document.querySelector("#healer-name-txt");
const HealerHealth = document.querySelector("#healer-health-txt");

const ArcherImage = document.querySelector(".archer");
const ArcherHealthbar = document.querySelector(".archer-health");
const ArcherName = document.querySelector("#archer-name-txt");
const ArcherHealth = document.querySelector(".archer-health-txt");

const WarriorImage = document.querySelector(".warrior");
const WarriorHealthbar = document.querySelector(".warrior-health");
const WarriorName = document.querySelector("#warrior-name-txt");
const WarriorHealth = document.querySelector("#warrior-health-txt");

const DragonImage = document.querySelector(".dragon");
const DragonHealthbar = document.querySelector(".dragon-health");
const DragonName = document.querySelector("#dragon-name-txt");
const DragonHealth = document.querySelector(".dragon-health-txt");

//event listeners
HealerImage.addEventListener("click", function () {
  attackDragon(heroesArray[Heroes.healer]);
});

ArcherImage.addEventListener("click", function () {
  attackDragon(heroesArray[Heroes.archer]);
});

WarriorImage.addEventListener("click", function () {
  attackDragon(heroesArray[Heroes.warrior]);
});

//passing the object of the attackers/Hero to the dragon - using the attacker parameter
function attackDragon(attacker) {
  alert(
    `${attacker.name} har gjort ${attacker.damage} skade på ${dragonObject.name}!`
  );

  dragonObject.currentHP -= attacker.damage;

  defeatedDragon();
  updateDragonHealth();
}

function updateDragonHealth() {
  DragonHealth.innerText = `${dragonObject.currentHP} / ${dragonObject.maxHP} HP`;
}

function defeatedDragon() {
  if (dragonObject.currentHP <= 0) {
    alert(`Congratulations, you have won!!`);

    DragonImage.remove();
    dragonObject.alive = false;
    dragonObject.currentHP = 0;
  }
}

// checks which heroes are alive
function heroesAlive() {
  dragonAttack();
  if (heroesArray[randomAttack].alive == true) {
  } else {
    heroesArray[randomAttack].alive = false;
  }
}

function dragonAttack() {
  const randomAttack = Math.floor(Math.random() * 3);
}
