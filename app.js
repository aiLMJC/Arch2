const collectors = {
  "Art Critic Jacques": {
    "Anarchic Abstraction": 5,
    "Radiant Renaissance": 4,
    "Imperial Impressionism": 3
  },
  "Chief Tess": {
    "Blingy Fings": 4,
    "Smoky Fings": 3,
    "Hitty Fings": 5,
    "Showy Fings": 4
  },
  "Eblis": {
    "Finery of the Inquisition": 6,
    "Religious Iconography": 4,
    "Urns of the Empire": 5,
    "Entertaining the Masses": 4,
    "Imperial Sorcery": 3
  },
  "General Bentnoze": {
    "Red Rum Relics I": 4,
    "Red Rum Relics II": 5,
    "Red Rum Relics III": 6
  },
  "General Wartface": {
    "Green Gobbo Goodies I": 5,
    "Green Gobbo Goodies II": 4,
    "Green Gobbo Goodies III": 3
  },
  "Giles": {
    "Desperate for Artefacts": 4
  },
  "Isaura": {
    "Zamorakian I": 3,
    "Zamorakian II": 4,
    "Zamorakian III": 5,
    "Zamorakian IV": 6
  },
  "Lowse": {
    "Armadylean I": 4,
    "Armadylean II": 5,
    "Armadylean III": 6
  },
  "Sharrigan": {
    "Dragonkin I": 3,
    "Dragonkin II": 4,
    "Dragonkin III": 5,
    "Dragonkin IV": 6,
    "Dragonkin V": 7,
    "Dragonkin VI": 8,
    "Dragonkin VII": 9
  },
  "Sir Atcha": {
    "Saradominist I": 4,
    "Saradominist II": 5,
    "Saradominist III": 6,
    "Saradominist IV": 7
  },
  "Soran": {
    "Zarosian I": 3,
    "Zarosian II": 4,
    "Zarosian III": 5,
    "Zarosian IV": 6
  },
  "Velucia": {
    "Armadylean collection": 4,
    "Bandosian collection": 5,
    "Dragonkin collection": 6,
    "Saradominist collection": 7,
    "Zamorakian collection": 8,
    "Zarosian collection": 9
  },
  "Wise Old Man": {
    "Wise Am the Music Man": 3,
    "Hat Problem": 4,
    "Hat Hoarder": 5,
    "Magic Man": 6,
    "Knowledge is Power": 7
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