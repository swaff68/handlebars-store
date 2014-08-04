$(document).on('ready', function() {



	var productsData = {
  productsList: [
    {
      title: "Super Mario World",
      cost: 11.25,
      image: "http://ecx.images-amazon.com/images/I/31QRKPQ24FL._AA160_.jpg",
      details: {
        players: "1-2",
        levels: "74 different areas in 7 different castles"
      }
    },
    {
      title: "Donkey Kong Country",
      cost: 12.45,
      image: "http://ecx.images-amazon.com/images/I/31ACJPWHBVL._AA160_.jpg",
      sale: 5.00,
      details: {
        characters: "Donkey Kong and Diddy Kong",
        enemies: "Kremlings"
      }
    },
    {
      title: "Street Fighter II",
      cost: 4.94,
      image: "http://ecx.images-amazon.com/images/I/51aqQ0RJtxL._AA160_.jpg",
      details: {
        description: 'Get dirty with the nasty street fighters in the multi-player Street Fighter II.'
      }
    }
  ]
}

	var templateSource = $('#item-template').html();
	console.log('TemplateSource:', templateSource);

	// Compile a handlebars template, handlebars.com takes in a string of HTML and gives back a function 
	var myTemplate = Handlebars.compile(templateSource);
	console.log('MyTemplate:', myTemplate);


	// Generate a context (lookup table) for handlebars to Use

	$('#product-container').append(myTemplate(
		{productsData: productsData.productsList}

	));	

	var wishTemplateSource = $('#wish-template').html();


	// Compile a handlebars template, handlebars.com takes in a string of HTML and gives back a function 
	var myWishTemplate = Handlebars.compile(wishTemplateSource);



	// Generate a context (lookup table) for handlebars to Use

	$('#wish-list').append(myWishTemplate(
		{productsData: productsData.productsList}

	));
  
});