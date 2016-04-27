var preload = function(game){};

preload.prototype = {

	init: function (){

		var me = this;
		var style = {
			font: "32px Arial",
			fill: "white",
			align: "center" 
		};

		this.text = this.add.text(me.game.world.centerX, me.game.world.centerY, "Loading: 0%", style);
		this.text.anchor.x = 0.5;
	},

	preload: function(){ 
		this.load.image('fondo', 'assets/fondo.png');
		this.load.image('titulo','assets/titulo2.png');
		this.load.spritesheet('botonJuega','assets/sprite_boton_juega.png',241,62);
		this.load.spritesheet('botonInstrucc','assets/sprite_boton_instr.png',241,62);
		this.load.spritesheet('botonRank','assets/sprite_boton_rank.png',241,62);
		
		this.load.audio('musicaMenu', ['assets/Get_Outside.mp3']);
		//this.game.load.text('dictionary', 'assets/dictionary.txt');
	},

	create: function(){
		this.game.state.start("menuprincipal");
	}

}