function fetchRandomActivity() {
  fetch('https://www.boredapi.com/api/activity')
    .then(response => response.json())
    .then(data => {
      document.getElementById('bored-output').textContent = `Activity: ${data.activity}`;
    })
    .catch(error => {
      console.error("Error fetching data from Bored API:", error);
      document.getElementById('bored-output').textContent = "Failed to load activity.";
    });
}
