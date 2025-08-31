function Node(pos, path) {
    
    if (pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7) {
        return null;
    }
    return { pos, path };
}

function knightMoves([x, y], [a, b]) {
    let q = [Node([x, y], [[x, y]])];
    
    let visited = new Set();

    visited.add(`${x},${y}`);

    let currentNode = q.shift();

    while (currentNode.pos[0] !== a || currentNode.pos[1] !== b) {
        let moves = [
      [currentNode.pos[0] + 2, currentNode.pos[1] - 1], // 
      [currentNode.pos[0] + 2, currentNode.pos[1] + 1], // 
      [currentNode.pos[0] - 2, currentNode.pos[1] - 1], // 
      [currentNode.pos[0] - 2, currentNode.pos[1] + 1], // 
      [currentNode.pos[0] + 1, currentNode.pos[1] - 2], // 
      [currentNode.pos[0] + 1, currentNode.pos[1] + 2], // 
      [currentNode.pos[0] - 1, currentNode.pos[1] - 2], // 
      [currentNode.pos[0] - 1, currentNode.pos[1] + 2], // 
        ];
        
        moves.forEach((move) => {
            let positionKey = `${move[0]},${move[1]}`;

            if (!visited.has(positionKey)) {
                let node = Node(move, currentNode.path.concat([move]));

                if (node) {
                    
                    visited.add(positionKey);

                    q.push(node);
                }
            }
        });

        currentNode = q.shift();
    }
    console.log(
        `=> You made it in ${currentNode.path.length - 1} moves!  Here's your path:`);
    currentNode.path.forEach((pos) => {
        console.log(pos);
    });

    return {
        moves: currentNode.path.length - 1,
        path: currentNode.path
    };
}

console.log("Test 1: from [3,3] to [4,3]");
knightMoves([3, 3], [4, 3]);
