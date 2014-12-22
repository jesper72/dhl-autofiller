
/* Event listeners  for options.js */

if (typeof options !== 'undefined') {
	$('document').ready( function() {
	 options.init();
	});

	$('#endpoint').on('keyup', function() {
		var endpoint = $(this).val();
		options.setEndpoint(endpoint);
	});

	$('#debug').on('click', function() {
		var debug = document.getElementById('debug').checked;
		options.setDebugFlag(debug);
	});

	$('#test_connection').on('click', function() {
		options.testConnection();
	});

	$('.header-input').on('keyup', function() {
		var header_fields = $('.header-input');
		options.setHeaders(header_fields);
	});
}


/* Event listeners for index.js */

if (typeof popup !== 'undefined') {
	$('document').ready(function() {
	  popup.init();
	});

	$('#reload').on('click', function() {
	  popup.loadCustomers();
	});

	$('#customers').on('change', function() {
	  popup.populateCustomerData();
	});

	$('#send_info').on('click', function() {
	  popup.fillDhlForm();
	});

}