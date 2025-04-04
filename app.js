if (!window.alt1) {
    alert("This app requires Alt1 to run!");
}

const collections = {
    "Art Critic Jacques": {
        "Anarchic Abstraction": 5,
        "Radiant Renaissance": 4,
        "Imperial Impressionism": 3
    },
    // ... (keep your existing collection structure)
};

let collectedData = JSON.parse(localStorage.getItem('arch-collections')) || {};

async function scanCollections() {
    if (!alt1.overlayLockscreen()) return;
    
    try {
        const win = alt1.getActiveWindow();
        if (!win?.title.includes("Archaeology Collector")) {
            alert("Open collector interface first!");
            return;
        }

        const collector = getCollectorName(win);
        const progress = detectCollections(win);
        
        collectedData[collector] = progress;
        localStorage.setItem('arch-collections', JSON.stringify(collectedData));
        updateUI();
    } finally {
        alt1.overlayUnlockscreen();
    }
}

function getCollectorName(win) {
    return alt1.getRegionText(win, [50, 80, 300, 30]).trim();
}

function detectCollections(win) {
    return [
        [50, 120, 100, 30],
        [50, 160, 100, 30]
    ].map(rect => {
        const text = alt1.getRegionText(win, rect);
        const match = text?.match(/(\d+)\/(\d+)/);
        return match ? {
            current: parseInt(match[1]),
            required: parseInt(match[2])
        } : null;
    }).filter(Boolean);
}

function updateUI() {
    const container = document.getElementById("collector-list");
    container.innerHTML = "";
    
    Object.entries(collectedData).forEach(([collector, entries]) => {
        const card = document.createElement("div");
        card.className = "collector-card";
        card.innerHTML = `
            <h2 class="collector-name">${collector}</h2>
            ${entries.map((e, i) => `
                <div class="collection-item">
                    <span>Collection ${i+1}</span>
                    <span class="progress-text">${e.current}/${e.required}</span>
                </div>
            `).join("")}
        `;
        container.appendChild(card);
    });
}

document.getElementById("scan-btn").addEventListener("click", scanCollections);
document.getElementById("reset-btn").addEventListener("click", () => {
    localStorage.removeItem('arch-collections');
    collectedData = {};
    updateUI();
});

if (alt1.permissionPixel) alt1.requestPermission();
