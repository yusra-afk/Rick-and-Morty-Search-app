// ✅ Event listener for form submission
document.getElementById("searchForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const input = document.getElementById("searchInput");
    const name = input.value.trim();
  
    // ✅ JavaScript validation: input must not be empty
    if (name === "") {
      alert("Please enter a character name.");
      return;
    }
  
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
  
    try {
      // ✅ Fetch call to Rick and Morty API
      const res = await fetch(url);
      const data = await res.json();
  
      // ✅ Displaying Web API data on page in user-friendly format
      if (data.results && data.results.length > 0) {
        const character = data.results[0]; // show first matching result
        document.getElementById("result").innerHTML = `
          <div class="card">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
            <p><strong>Species:</strong> ${character.species}</p>
            <p><strong>Status:</strong> ${character.status}</p>
            <p><strong>Gender:</strong> ${character.gender}</p>
            <p><strong>Origin:</strong> ${character.origin.name}</p>
          </div>
        `;
      } else {
        document.getElementById("result").innerHTML = `<p>No character found. Try again.</p>`;
      }
    } catch (error) {
      document.getElementById("result").innerHTML = `<p>Error fetching data. Please try again later.</p>`;
      console.error("Error:", error);
    }
  });