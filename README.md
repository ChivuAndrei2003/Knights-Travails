# Knights Travails

A JavaScript implementation of the classic Knight's Tour problem that finds the shortest path for a chess knight to move from one position to another on a standard 8x8 chessboard.

## Overview

This project solves the Knight's shortest path problem using the Breadth-First Search (BFS) algorithm. Given two positions on a chessboard, it calculates the minimum number of moves required for a knight to travel from the starting position to the destination position.

## How it Works

The algorithm uses BFS to explore all possible knight moves level by level, ensuring that the first path found to the destination is the shortest possible path.

### Knight Movement Pattern

A chess knight moves in an L-shape: 2 squares in one direction and 1 square perpendicular to that, or 1 square in one direction and 2 squares perpendicular. This gives 8 possible moves from any position:
- (+2, -1), (+2, +1), (-2, -1), (-2, +1)
- (+1, -2), (+1, +2), (-1, -2), (-1, +2)

## Code Structure

### Functions

#### `Node(pos, path)`
Creates a node object representing a position on the chessboard.
- **Parameters:**
  - `pos`: Array `[x, y]` representing coordinates (0-7)
  - `path`: Array containing the sequence of moves to reach this position
- **Returns:** Node object `{pos, path}` or `null` if position is invalid

#### `knightMoves([x, y], [a, b])`
Main function that calculates the shortest path between two positions.
- **Parameters:**
  - `[x, y]`: Starting position coordinates
  - `[a, b]`: Destination position coordinates
- **Returns:** Object containing:
  - `moves`: Number of moves required
  - `path`: Array of coordinates showing the complete path

### Algorithm Details

1. **Initialization**: Creates a queue with the starting position and a visited set
2. **BFS Loop**: Continues until the destination is reached
3. **Move Generation**: For each position, generates all 8 possible knight moves
4. **Validation**: Checks if moves are within board bounds and not previously visited
5. **Path Tracking**: Maintains the complete path from start to each visited position

## Usage

```javascript
// Example: Move knight from position [3,3] to [4,3]
const result = knightMoves([3, 3], [4, 3]);
console.log(`Moves required: ${result.moves}`);
console.log('Path:', result.path);
```

## Example Output

```
Test 1: from [3,3] to [4,3]
=> You made it in 3 moves!  Here's your path:
[3, 3]
[1, 2]
[2, 4]
[4, 3]
```

## Installation and Running

1. Clone the repository:
```bash
git clone https://github.com/ChivuAndrei2003/Knights-Travails.git
cd Knights-Travails
```

2. Run the code:
```bash
node src/index.js
```

## Technical Requirements

- **Node.js**: Any modern version
- **Board Size**: 8x8 standard chessboard (coordinates 0-7)
- **Algorithm**: Breadth-First Search for guaranteed shortest path
- **Time Complexity**: O(N²) where N is the board size
- **Space Complexity**: O(N²) for the visited set and queue

## Features

- ✅ Finds the shortest possible path
- ✅ Validates board boundaries
- ✅ Handles edge cases (same start/end position)
- ✅ Tracks complete move sequence
- ✅ Console output with move count and path visualization

## License

ISC