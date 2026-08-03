const chessboard = document.getElementById('chessboard');

// Génération des 64 cases de l'échiquier
function createBoard() {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            
            // Alternance des couleurs des cases
            if ((row + col) % 2 === 0) {
                square.classList.add('light');
            } else {
                square.classList.add('dark');
            }
            
            chessboard.appendChild(square);
        }
    }
}

createBoard();
