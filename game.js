//Denne JS-koden er laget klar for deg. Den trenger du ikke endre på.

//Stats for heroes
let heroesArray = [
  {
    id: 0,
    name: "Henriette Healer",
    maxHP: 400,
    currentHP: 400,
    damage: 10, //original value is 100
    alive: true,
  },
  {
    id: 1,
    name: "Ariana archer",
    maxHP: 500,
    currentHP: 500,
    damage: 10, //original value is 400
    alive: true,
  },
  {
    id: 2,
    name: "Wyona Warrior",
    maxHP: 600,
    currentHP: 600,
    damage: 10, //original value is 400
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
const ArcherHealth = document.querySelector("#archer-health-txt");

const WarriorImage = document.querySelector(".warrior");
const WarriorHealthbar = document.querySelector(".warrior-health");
const WarriorName = document.querySelector("#warrior-name-txt");
const WarriorHealth = document.querySelector("#warrior-health-txt");

const DragonImage = document.querySelector(".dragon");
const DragonHealthbar = document.querySelector(".dragon-health");
const DragonName = document.querySelector("#dragon-name-txt");
const DragonHealth = document.querySelector(".dragon-health-txt");

//event listeners for the heroes. Click event
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
  // this function attacks the dragon.
  displayMessage(
    `${attacker.name} has done ${attacker.damage} damage to ${dragonObject.name}!`
  );

  dragonObject.currentHP -= attacker.damage;

  defeatedDragon();
  updateDragonHealth();
}

function updateDragonHealth() {
  // updates the dragon health after the attack.
  DragonHealth.innerText = `${dragonObject.currentHP} / ${dragonObject.maxHP} HP`;

  heroesAlive();
}

function defeatedDragon() {
  // this displays when the dragon has been defeated.
  if (dragonObject.currentHP <= 0) {
    displayMessage(`Congratulations, you have won!!`);

    DragonImage.remove();
    dragonObject.alive = false;
    dragonObject.currentHP = 0;
  }
}



function updateHeroHealth(hero, healthTextElement) { //Updating the Hero Health
  healthTextElement.innerText = `${hero.currentHP} / ${hero.maxHP}`;
}

// checks which heroes are alive then the dragon attack
function heroesAlive() {
  const randomAttack = Math.floor(Math.random() * heroesArray.length);
  const Hero = heroesArray[randomAttack]; //Reference to the object (not a new object or variable)

  if (Hero.alive == true) {
    displayMessage(
      `${dragonObject.name} has attacked ${heroesArray[randomAttack].name}`
    );

    switch (randomAttack) {
      case Heroes.healer: //0
        Hero.currentHP -= dragonObject.damage;
        updateHeroHealth(Hero, HealerHealth);
        break;

      case Heroes.archer: //1
        Hero.currentHP -= dragonObject.damage;
        updateHeroHealth(Hero, ArcherHealth);
        break;

      case Heroes.warrior: //2
        Hero.currentHP -= dragonObject.damage;
        updateHeroHealth(Hero, WarriorHealth);
        break;
    }

    
  } else {
    heroesArray[randomAttack].alive = false;
  }
}

function defeatedHero() { 
  if()
}

function displayMessage(message) {
  //Change to alert once testing is done
  alert(message);
}


