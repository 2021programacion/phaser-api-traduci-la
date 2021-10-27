import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'

export default class PlayScene extends Phaser.Scene{
    private buttonSpanish
    private buttonGerman
    private buttonEnglish
    private buttonPortuguese

    constructor () {
        super('play');
    }

    create() {
        const { width, height } = this.scale
		var div = document.getElementById('gameContainer');
		if (div) {
			div.style.backgroundColor = "#4488AA";
		}

		this.add.text(width * 0.5, height * 0.15, getPhrase("Hola mundo"), {
			color: '#000000'
		})
		.setOrigin(0.5)

		this.add.text(width * 0.5, height * 0.35, getPhrase("Soy un texto"), {
			color: '#000000'
		})
		.setOrigin(0.5)


		this.add.text(width * 0.5, height * 0.55, getPhrase("Un largo viaje acaba de comenzar"), {
			color: '#000000'
		})
		.setOrigin(0.5)
    }

}