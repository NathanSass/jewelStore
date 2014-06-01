// andrea
(function(){
	
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('JewelController', function(){
		this.ruby = ruby;
	});

	var gems = [

	{
		name: 'Dodecahedron',
		price: 2.95,
		description: '. . .',
		canPurchase: true,
	},
	{
		name: "Pentagonal Gem",
		price: 3.15,
		description: 'pentagons are cool!',
		canPurchase: true
	}

	]

	var ruby = {
		type: 'Ruby!',
		price: 5.75,
		description: 'shiny beautiful and red',
		soldOut: false
	};

})();