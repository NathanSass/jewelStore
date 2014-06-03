// andrea
(function(){
	
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('JewelController', function(){
		this.ruby = ruby;
	});

	app.controller('TabController', function(){
		this.tab = 1;

		this.setTab = function(newValue){
			this.tab = newValue
		};

		this.isSet = function(tabName){
			return this.tab === tabName;
		};
	});

	var gems = [

	{
		name: 'Dodecahedron',
		price: 2.95,
		description: '. . .',
		canPurchase: true,
		images: [
		{
			full: 'http://icongal.com/gallery/image/179533/blue_gem_diamond_jewel.png',
			thumb:'',
		}
		]
	},
	{
		name: "Pentagonal Gem",
		price: 3.1,
		description: 'pentagons are cool!',
		canPurchase: true,
		images: [
		{
			full: 'http://icongal.com/gallery/image/179491/sapphire_jewel_gem_faceted_blue.png',
			thumb:'',
		}
		]
	}

	]

	var ruby = {
		type: 'Ruby!',
		price: 5.75,
		description: 'shiny beautiful and red',
		soldOut: false,
		image: 'http://icons.iconarchive.com/icons/aha-soft/jewelry/256/Gem-icon.png'
	};

})();



//NOTES
//ng-show
//ng-hide
//format with filters