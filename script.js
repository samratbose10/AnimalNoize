const animals = [
    {
        name: "chiken",
        image: "images/chiken.png",
        sound: "sounds/chiken.mp3"
    },
    {
        name: "cow",
        image: "images/cow.png",
        sound: "sounds/cow.mp3"
    },
    {
        name: "elephant",
        image: "images/elephant.png",
        sound: "sounds/elephant.mp3"
    },
    {
        name: "lion",
        image: "images/lion.png",
        sound: "sounds/lion.mp3"
    },
    {
        name: "rhino",
        image: "images/rhino.png",
        sound: "sounds/rhino.mp3"
    },
    {
        name: "sheep",
        image: "images/sheep.png",
        sound: "sounds/sheep.mp3"
    },
    {
        name: "tiger",
        image: "images/tiger.png",
        sound: "sounds/tiger.mp3"
    },
    {
        name: "wolf",
        image: "images/wolf.png",
        sound: "sounds/wolf.mp3"
    }
];

const animalImage = document.getElementById("animalImage");
const animalSound = document.getElementById("animalSound");

function playRandomAnimal() {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    animalImage.src = randomAnimal.image;
    animalSound.src = randomAnimal.sound;
    animalSound.play();
}

setInterval(playRandomAnimal, 10000);
window.onload = playRandomAnimal;
