const poemLines = [
    "¿Que si me gustas? ¡Qué va!",
    "Solo que cada neurona mía guarda en su memoria<br>el brillo de tus pupilas.",
    "Cuando estoy a tu lado soy como un ángulo<br>que no sabe de tangentes;",
    "tan vulnerable como los átomos<br>que se rompen en silencio",
    "cada vez que tus ojos atraviesan mi existencia."
];

const figures = [
    "❤️", // para la primera línea
    "✨", // para el brillo de pupilas
    "📐", // ángulo
    "⚛️", // átomos
    "👁️"  // ojos
];

let currentLine = 0;

const poemLineEl = document.getElementById('poem-line');
const poemContainer = document.getElementById('poem-container');

function showLine(index) {
    poemLineEl.innerHTML = poemLines[index];
    createFallingFigures(figures[index]);
}

function createFallingFigures(figure) {
    for (let i = 0; i < 15; i++) {
        const span = document.createElement('span');
        span.className = 'falling-figure';
        span.innerText = figure;
        span.style.left = Math.random() * 90 + '%';
        span.style.animationDelay = (Math.random() * 1.5) + 's';
        poemContainer.appendChild(span);
        setTimeout(() => span.remove(), 2500);
    }
}

function nextLine() {
    currentLine = (currentLine + 1) % poemLines.length;
    showLine(currentLine);
}

poemContainer.addEventListener('click', nextLine);
poemContainer.addEventListener('touchstart', nextLine);

showLine(currentLine);
