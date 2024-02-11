// Define the container and petals
const container = document.querySelector('.container');
const rosePetals = document.querySelector('.rose-petals');

// Function to create rose petals
function createPetals() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    rosePetals.appendChild(petal);
}

// Add more petals (5 in total)
for (let i = 0; i < 5; i++) {
    createPetals();
}
