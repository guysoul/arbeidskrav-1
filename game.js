//Denne JS-koden er laget klar for deg. Den trenger du ikke endre på.

//Stats for heroes
let heroesArray = [
  {
    id: 0,
    name: "Henriette Healer",
    maxHP: 400,
    currentHP: 400,
    damage: 100, //original value is 100
    alive: true,
  },
  {
    id: 1,
    name: "Ariana archer",
    maxHP: 500,
    currentHP: 500,
    damage: 400, //original value is 400
    alive: true,
  },
  {
    id: 2,
    name: "Wyona Warrior",
    maxHP: 600,
    currentHP: 600,
    damage: 400, //original value is 400
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

//Enum - used as a reference to the array index. https://www.sohamkamani.com/javascript/enums/#defining-enums-as-object-keys
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

//anonymous function on eventlisteners.
const attack = function () {
  attackDragon(heroesArray[Heroes.warrior]);
};

//event listeners for the heroes. Click/eventListener which calls the function attackDragon through "attack" variable with anonymous function.
HealerImage.addEventListener("click", attack);
ArcherImage.addEventListener("click", attack);
WarriorImage.addEventListener("click", attack);

//passing the object of the attackers/Hero to the dragon - using the attacker parameter - 1st requirement
function attackDragon(attacker) {
  // this function attacks the dragon.
  displayMessage(
    `${attacker.name} has done ${attacker.damage} damage to ${dragonObject.name}!`
  );

  dragonObject.currentHP -= attacker.damage; //updates Dragon's current HP after it has been attacked by one of the Heroes.

  if (isDragonDefeated()) {
    dragonObject.alive = false;
    dragonObject.currentHP = 0;
    DragonImage.remove();
    updateDragonHealth();
    displayMessage(`Congratulations, you have won!!`);

    //disable all other onclick.
    disableHeroes(this);
  } else {
    updateDragonHealth();
    heroesAlive(); // proceed with the heroesAlive function
  }

  //statement to check all dead heroes - calls the function allDead within Heroes Alive function
  if (allDead()) {
    displayMessage(`You have lost the game! ${dragonObject.name} has won!`);
  }
}

function updateDragonHealth() {
  DragonName.innerText = `${dragonObject.name}`; // display the dragon name during the attack
  DragonHealth.innerText = `${dragonObject.currentHP} / ${dragonObject.maxHP} HP`; // updates the dragon health after the attack.
}

function isDragonDefeated() {
  // this displays when the dragon has been defeated. 5th requirement
  const dragonDefeated = dragonObject.currentHP <= 0;
  return dragonDefeated;
}

function updateHeroHealth(hero, healthTextElement) {
  //Updating the Hero Health
  healthTextElement.innerText = `${hero.currentHP} / ${hero.maxHP}`;
}

// checks which heroes are alive then the dragon attacks - 2nd requirement and 3rd requirement
function heroesAlive() {
  const randomAttack = Math.floor(Math.random() * heroesArray.length);
  const Hero = heroesArray[randomAttack]; //Reference to the object (not a new object or variable)

  if (Hero.alive) {
    displayMessage(
      `${dragonObject.name} has attacked ${heroesArray[randomAttack].name}`
    );

    switch (randomAttack) {
      case Heroes.healer: //0
        HealerName.innerText = `${Hero.name}`;
        Hero.currentHP -= dragonObject.damage;
        if (Hero.currentHP <= 0) {
          Hero.alive = false;
          Hero.currentHP = 0;
          HealerImage.remove();
        }
        updateHeroHealth(Hero, HealerHealth); // updates the current HP of the healer in the div tag
        break;

      case Heroes.archer: //1
        ArcherName.innerText = `${Hero.name}`;
        Hero.currentHP -= dragonObject.damage;
        if (Hero.currentHP <= 0) {
          Hero.alive = false;
          Hero.currentHP = 0;
          ArcherImage.remove();
        }
        updateHeroHealth(Hero, ArcherHealth); // updates the current HP of the archer in the div tag
        break;

      case Heroes.warrior: //2
        WarriorName.innerText = `${Hero.name}`;
        Hero.currentHP -= dragonObject.damage;
        if (Hero.currentHP <= 0) {
          Hero.alive = false;
          Hero.currentHP = 0;
          WarriorImage.remove();
        }
        updateHeroHealth(Hero, WarriorHealth); // updates the current HP of the warrior in the div tag
        break;
    }
  } else {
    heroesAlive();
  }
}

// function for allDead heroes - 4th requirement
function allDead() {
  var counterDead = 0;
  for (var i = 0; i < heroesArray.length; i++) {
    if (!heroesArray[i].alive) {
      counterDead++;
    }
  }
  return counterDead == heroesArray.length;
}

function disableHeroes() {
  // function to disable the clicking of heroes after it has won the game.
  HealerImage.removeEventListener("click", attack);
  ArcherImage.removeEventListener("click", attack);
  WarriorImage.removeEventListener("click", attack);
}

function displayMessage(message) {
  //function to display message.
  alert(message);
}
