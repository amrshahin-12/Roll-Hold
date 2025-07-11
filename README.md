# 🎲 Pig Game

A classic dice game built with HTML, CSS, and JavaScript where two players take turns rolling dice to accumulate points.

## 🎮 How to Play

### Objective
Be the first player to reach **100 points** or more by rolling dice and accumulating points.

### Rules
1. **Rolling the Dice:**
   - Click the "🎲 Roll dice" button to roll a single die
   - If you roll a **1**, you lose all points from your current turn and your turn ends
   - If you roll **2-6**, the number is added to your current turn score

2. **Holding:**
   - Click the "📥 Hold" button to add your current turn score to your total score
   - Your turn ends and the other player takes over

3. **Winning:**
   - The first player to reach **100 points** or more wins the game
   - The winner's section will be highlighted

4. **New Game:**
   - Click the "🔄 New game" button to start a fresh game
   - All scores are reset and Player 1 starts

## 🚀 Features

- **Two-player gameplay** with alternating turns
- **Visual dice rolling** with realistic dice images
- **Real-time score tracking** for both current turn and total scores
- **Active player highlighting** to show whose turn it is
- **Winner detection** with visual feedback
- **Responsive design** that works on different screen sizes
- **Game state management** with proper reset functionality

## 🛠️ Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Game logic and interactivity
- **DOM Manipulation** - Dynamic UI updates

## 📁 Project Structure

```
pig-game/
├── index.html          # Main HTML file
├── style.css           # CSS styles
├── script.js           # JavaScript game logic
├── dice-1.png          # Dice image for value 1
├── dice-2.png          # Dice image for value 2
├── dice-3.png          # Dice image for value 3
├── dice-4.png          # Dice image for value 4
├── dice-5.png          # Dice image for value 5
├── dice-6.png          # Dice image for value 6
├── pig-game-flowchart.png  # Game flow diagram
└── README.md           # This file
```

## 🎯 Game Logic

### Core Functions
- **`playerChange()`** - Handles switching between players
- **Roll dice event** - Generates random dice roll and updates scores
- **Hold event** - Adds current score to total and checks for winner
- **New game event** - Resets all game state and UI

### Key Variables
- `activePlayer` - Tracks current player (0 or 1)
- `currentScore` - Points accumulated in current turn
- `total0`, `total1` - Total scores for each player
- `isWin` - Boolean flag for game completion

## 🎨 UI Features

- **Player sections** with distinct styling for active/inactive states
- **Dice display** that shows the current roll
- **Score displays** for both current turn and total scores
- **Button states** that disable when game ends
- **Winner highlighting** with special styling

## 🚀 How to Run

1. **Clone or download** the project files
2. **Open** `index.html` in your web browser
3. **Start playing!** No additional setup required

### Local Development
If you want to modify the game:
1. Open the project in your preferred code editor
2. Make changes to `script.js`, `style.css`, or `index.html`
3. Refresh your browser to see changes

## 🎯 Future Enhancements

Potential improvements for the game:
- [ ] Add sound effects for dice rolling
- [ ] Implement player names input
- [ ] Add customizable winning score
- [ ] Include game statistics and history
- [ ] Add animations for dice rolling
- [ ] Implement mobile touch controls
- [ ] Add multiplayer support over network

## 📝 Game Strategy Tips

- **Risk vs. Reward:** The more you roll, the higher your potential score, but also the higher risk of rolling a 1
- **Hold early:** If you have a decent current score (15+ points), consider holding to avoid losing it
- **Watch your opponent:** If they're close to winning, you might need to take more risks
- **Start conservatively:** Early in the game, it's often better to hold with smaller scores

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements or bug fixes!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Enjoy playing Pig Game! 🎲**
