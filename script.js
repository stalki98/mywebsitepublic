// script.js
document.getElementById('yesButton').addEventListener('click', function() {
    updateCounter('yes');
    sendEmail('happy');
});

document.getElementById('noButton').addEventListener('click', function() {
    updateCounter('no');
    sendEmail('mad');
});

document.getElementById('resetButton').addEventListener('click', function() {
    resetCounters();
});

function updateCounter(buttonType) {
    const counterId = buttonType === 'yes' ? 'yesCount' : 'noCount';
    const counterElement = document.getElementById(counterId);
    let count = parseInt(localStorage.getItem(counterId) || 0);
    count++;
    localStorage.setItem(counterId, count);
    counterElement.textContent = `Sreeja was ${buttonType === 'yes' ? 'happy' : 'mad'}: ${count}`;
}

function resetCounters() {
    localStorage.setItem('yesCount', 0);
    localStorage.setItem('noCount', 0);
    document.getElementById('yesCount').textContent = 'Sreeja was happy: 0';
    document.getElementById('noCount').textContent = 'Sreeja was mad: 0';
}

function loadCounters() {
    document.getElementById('yesCount').textContent = `Sreeja was happy: ${localStorage.getItem('yesCount') || 0}`;
    document.getElementById('noCount').textContent = `Sreeja was mad: ${localStorage.getItem('noCount') || 0}`;
}

window.onload = loadCounters; // Load counters when the page is loaded
