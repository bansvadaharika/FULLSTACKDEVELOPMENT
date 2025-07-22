// 1. Create the footballTeam object
const footballTeam = {
  team: "Legends United",
  year: 1990,
  headCoach: "Carlo Ancelotti",
  players: [
    {
      name: "David Torres",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Luka Romero",
      position: "midfielder",
      isCaptain: true
    },
    {
      name: "Marco Silva",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Ethan Brooks",
      position: "goalkeeper",
      isCaptain: false
    }
  ]
};

// 2. Display coach, team, and year
document.getElementById("head-coach").textContent = footballTeam.headCoach;
document.getElementById("team").textContent = footballTeam.team;
document.getElementById("year").textContent = footballTeam.year;

// 3. Function to render player cards
function renderPlayers(playersArray) {
  const container = document.getElementById("player-cards");
  container.innerHTML = ""; // Clear previous cards

  playersArray.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";

    const h2 = document.createElement("h2");
    h2.textContent = player.isCaptain
      ? `(Captain) ${player.name}`
      : player.name;

    const p = document.createElement("p");
    p.textContent = `Position: ${player.position}`;

    card.appendChild(h2);
    card.appendChild(p);
    container.appendChild(card);
  });
}

// 4. Initial render - show all players
renderPlayers(footballTeam.players);

// 5. Filter on dropdown change
const select = document.getElementById("players");
select.addEventListener("change", () => {
  const selected = select.value;

  if (selected === "all") {
    renderPlayers(footballTeam.players);
  } else {
    const filtered = footballTeam.players.filter(
      player => player.position === selected
    );
    renderPlayers(filtered);
  }
});
