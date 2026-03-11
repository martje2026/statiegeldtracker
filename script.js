// Data ophalen uit geheugen of op 0 beginnen
let smallCount = parseInt(localStorage.getItem('smallCount')) || 0;
let largeCount = parseInt(localStorage.getItem('largeCount')) || 0;
let beerCount = parseInt(localStorage.getItem('beerCount')) || 0;
let swingCount = parseInt(localStorage.getItem('swingCount')) || 0;

// Toon de opgeslagen data direct bij het opstarten
updateDisplay();

function updateDisplay() {
    // Cijfers op scherm zetten
    document.getElementById('count-small').innerText = smallCount;
    document.getElementById('count-large').innerText = largeCount;
    document.getElementById('count-beer').innerText = beerCount;
    document.getElementById('count-swing').innerText = swingCount;
    
    // Geld berekenen
    const totalMoney = (smallCount * 0.15) + (largeCount * 0.25) + (beerCount * 0.10) + (swingCount * 0.20);
    document.getElementById('total-amount').innerText = `€ ${totalMoney.toFixed(2)}`;

    // Aantal stuks berekenen
    const totalItems = smallCount + largeCount + beerCount + swingCount;
    document.getElementById('total-items').innerText = `${totalItems} items in huis`;

    // Alles opslaan in de browser van de telefoon
    localStorage.setItem('smallCount', smallCount);
    localStorage.setItem('largeCount', largeCount);
    localStorage.setItem('beerCount', beerCount);
    localStorage.setItem('swingCount', swingCount);
}

function changeCount(type, amount) {
    if (type === 'small') smallCount = Math.max(0, smallCount + amount);
    if (type === 'large') largeCount = Math.max(0, largeCount + amount);
    if (type === 'beer') beerCount = Math.max(0, beerCount + amount);
    if (type === 'swing') swingCount = Math.max(0, swingCount + amount);
    updateDisplay();
}

function resetAll() {
    if(confirm("Weet je zeker dat je alle tellers op nul wilt zetten?")) {
        smallCount = 0;
        largeCount = 0;
        beerCount = 0;
        swingCount = 0;
        updateDisplay();
    }
}