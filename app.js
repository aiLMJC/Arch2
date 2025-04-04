const collectors = {
  "Art Critique Jacques": {
    "Imperial Professionalism": 3,
    "Aesthetic Appreciation": 5
  },
  "Collector Benoit": {
    "Ancient Artifacts": 4,
    "Historical Treasures": 6
  },
  "Professor Alston": {
    "Relic Restoration": 7,
    "Archaeological Wonders": 8
  },
  "Curator Mendel": {
    "Lost Civilizations": 5,
    "Forgotten Legacies": 4
  },
  "Dr. Tobias": {
    "Mystic Relics": 3,
    "Celestial Finds": 5
  }
};

function renderCollectors() {
  const app = document.getElementById('app');
  for (const [collector, collections] of Object.entries(collectors)) {
    const collectorDiv = document.createElement('div');
    collectorDiv.className = 'collector';
    const collectorName = document.createElement('h2');
    collectorName.textContent = collector;
    collectorDiv.appendChild(collectorName);

    for (const [collection, total] of Object.entries(collections)) {
      const collectionDiv = document.createElement('div');
      collectionDiv.className = 'collection';
      collectionDiv.textContent = `${collection} - ${total} required`;
      collectorDiv.appendChild(collectionDiv);
    }

    app.appendChild(collectorDiv);
  }
}

document.addEventListener('DOMContentLoaded', renderCollectors);