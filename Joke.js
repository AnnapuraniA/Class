function fetchJoke() {
  const url = 'https://v2.jokeapi.dev/joke/Any'; 

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const outputDiv = document.getElementById('joke-output');
      if (data.type === 'single') {
        outputDiv.innerHTML = `<p>${data.joke}</p>`;
      } else if (data.type === 'twopart') {
        outputDiv.innerHTML = `
          <p><strong>Setup:</strong> ${data.setup}</p>
          <p><strong>Punchline:</strong> ${data.delivery}</p>
        `;
      }
    })
    .catch(error => {
      console.error("Error fetching joke:", error);
      document.getElementById('joke-output').textContent = "Failed to load joke.";
    });
}
