// app.js
// Alt1 config
if (!window.alt1) {
    alert("This app requires Alt1 to run!");
}

// Collection data structure
const collections = {
    // ... (maintain your existing collector/collection structure)
};

// Scanner logic
async function scanCollections() {
    if (!alt1.overlayLockscreen()) return;
    
    try {
        const win = alt1.getActiveWindow();
        if (!win || !win.title.includes("Archaeology Collector")) {
            showError("Open collector interface first!");
            return;
        }

        const collectorName = alt1.getRegionText(win, [50, 80, 300, 30]);
        const collections = detectCollections(win);
        
        updateUI(collectorName, collections);
    } finally {
        alt1.overlayUnlockscreen();
    }
}

function detectCollections(win) {
    const results = [];
    const progressRects = [
        [50, 120, 100, 30],  // Collection 1 position
        [50, 160, 100, 30],  // Collection 2 position
        // ... add more positions as needed
    ];

    for (const rect of progressRects) {
        const text = alt1.getRegionText(win, rect);
        const match = text.match(/(\d+)\/(\d+)/);
        if (match) {
            results.push({
                current: parseInt(match[1]),
                required: parseInt(match[2])
            });
        }
    }
    return results;
}

function updateUI(collectorName, collections) {
    const container = document.getElementById("collector-list");
    container.innerHTML = "";

    const card = document.createElement("div");
    card.className = "collector-card";
    
    const title = document.createElement("h2");
    title.className = "collector-name";
    title.textContent = collectorName;
    card.appendChild(title);

    collections.forEach((col, index) => {
        const div = document.createElement("div");
        div.className = "collection-item";
        
        const nameSpan = document.createElement("span");
        nameSpan.textContent = `Collection ${index + 1}`;
        
        const progressSpan = document.createElement("span");
        progressSpan.className = "progress-text";
        progressSpan.textContent = `${col.current}/${col.required}`;
        
        div.appendChild(nameSpan);
        div.appendChild(progressSpan);
        card.appendChild(div);
    });

    container.appendChild(card);
}

// Event listeners
document.getElementById("scan-btn").addEventListener("click", scanCollections);
alt1.events.on("alt1pressed", scanCollections);

// Initial setup
if (alt1.permissionPixel) {
    alt1.requestPermission();
}
