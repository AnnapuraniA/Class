function fetchHarryPotterCharacter() {
  fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    .then(data => {
      const randomCharacter = data[Math.floor(Math.random() * data.length)];
      document.getElementById('harry-potter-output').textContent = 
        `Name: ${randomCharacter.name}, House: ${randomCharacter.house}`;
    })
    .catch(error => {
      console.error("Error fetching data from Harry Potter API:", error);
      document.getElementById('harry-potter-output').textContent = 
        "Failed to load character data.";
    });
}
