# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. 
As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. 
The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## Final Product
![🐍🐍 Snake! 🐍🐍 ](https://github.com/TayrineSoares/snake-client/blob/dd4815fbebd39d18de4acd6ea088dde50cf4c7ca/Snake-Screenshot.png)


## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.

## Game Instructions 

- Use the keys (`'w', 'a', 's', 'd'`) to navigate the snake up, left, down, or right (in respective order).
- Eat the red dot to gain points. 
- If the snake collides with the wall or its own tail, it's game over.
- Use the keys (`'p', 'o', 'i'`) to send the following messages: 
  `'p'`: Level Up!
  `'o'`: Thank you, next!
  `'i'`: Well done!

- Press `CTRL` + `C` to quit the game.