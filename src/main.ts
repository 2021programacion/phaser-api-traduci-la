import 'regenerator-runtime/runtime'
import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import MenuScene from './scenes/MenuScene'
import PlayScene from './scenes/PlayScene';

localStorage.clear();

const config: Phaser.Types.Core.GameConfig = {
    parent: 'gameContainer',
	transparent: true, 
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [HelloWorldScene, MenuScene, PlayScene]
}

export default new Phaser.Game(config)
