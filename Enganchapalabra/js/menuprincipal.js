var menuprincipal = function(game){};
var musica;
menuprincipal.prototype = {

	init: function (){

		var me = this;
		musica = this.game.add.audio('musicaMenu');
		musica.play();
		this.background = this.game.add.sprite(0, 0, 'fondo');
		
		this.title = this.game.add.sprite(100,30,'titulo');
		//this.title.animations.add('flap');  
		//this.title.animations.play('flap', 12, true);  
		
		this.game.add.tween(this.title).to({y:15}, 850, Phaser.Easing.Linear.NONE, true, 0, 1000, true);  

		var botonJuega = this.game.add.button(280, 220, 'botonJuega', this.iniciaJuego, this, 1, 0);
		this.game.add.button(280, 300, 'botonInstrucc', this.iniciaJuego, this, 1, 0);
		this.game.add.button(280, 380, 'botonRank', this.iniciaJuego, this, 1, 0);
		
		//botonJuega.anchor.setTo(0.5,0.5);	
	},

	preload: function(){ 
		//this.game.load.text('dictionary', 'assets/dictionary.txt');
	},

	iniciaJuego: function(){
		musica.stop();
		this.game.state.start("juego");
	}

}