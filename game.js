const opts = require('./constants');
const InGame = require('./in-game');

const game = new Phaser.Game(opts.width, opts.height, Phaser.AUTO, '');

game.state.add('in-game', InGame);
game.state.start('in-game');
