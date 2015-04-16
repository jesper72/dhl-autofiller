
module('popup');


test('target_urls', function() {
	var urls = popup.target_urls;
	var test_urls = {register_shipment: 'http://www.dhlmultishipping.se/transnet/register.do?method=view', add_address: 'http://www.dhlmultishipping.se/transnet/organisation.jsp?organisation=new'};

	deepEqual(urls, test_urls, 'DHL URLs setup defined correctly');
});


test('parseResposetextToCustomers', function() {
	var test_data = [
	  {
	    "id": "1",
	    "name": "Jesper Svensson",
	    "address": "Street address",
	    "zipcode": "12345",
	    "city": "Växjö",
	    "email": "svejes@gmail.com",
	    "phone": "1029384746",
	    "shipping": "DHL Servicepoint"
	  },
	  {
	    "id": "2",
	    "name": "Bengt Bengtsson",
	    "address": "Bengtsvägen 790",
	    "zipcode": "12345",
	    "city": "Knäckebrödhult",
	    "email": "",
	    "phone": "012345678",
	    "shipping": "DHL Paket"
	  }
	];

	var test_string = JSON.stringify(test_data);
	var expected_response = {};
		expected_response[1] = test_data[0];
		expected_response[2] = test_data[1];

	var response = popup.parseResposetextToCustomers(test_string);

	deepEqual(response, expected_response, 'JSON string is formatted into an expected object structure with id as index');
});


test('getCustomerById', function() {

	var test_data = [
	  {
	    "id": "1",
	    "name": "Jesper Svensson",
	    "address": "Street address",
	    "zipcode": "12345",
	    "city": "Växjö",
	    "email": "svejes@gmail.com",
	    "phone": "1029384746",
	    "shipping": "DHL Servicepoint"
	  },
	  {
	    "id": "2",
	    "name": "Bengt Bengtsson",
	    "address": "Bengtsvägen 790",
	    "zipcode": "12345",
	    "city": "Knäckebrödhult",
	    "email": "",
	    "phone": "012345678",
	    "shipping": "DHL Servicepoint"
	  }
	];

	var test_string = JSON.stringify(test_data);
	var expected_response = test_data[1];
			
	/* populate popup.customers with our test data */
	popup.customers = popup.parseResposetextToCustomers(test_string);
	
  var response = popup.getCustomerById(2);
	deepEqual(expected_response, response, 'Customer with ID 2 is returned');
});


test('getShippingServiecByNameDHLPaket', function() {

	var shipping_name = 'DHL Paket', expected_response = 182875;
	var response = popup.getShippingServiecByName(shipping_name);		

	equal(expected_response, response, 'Shipping service for DHL Paket was returned');	
});

test('getShippingServiecByNameDHLServicepoint', function() {

	var shipping_name = 'DHL Servicepoint', expected_response = 182880;
	var response = popup.getShippingServiecByName(shipping_name);		

	equal(expected_response, response, 'Shipping service for DHL Servicepoint was returned');	
});
