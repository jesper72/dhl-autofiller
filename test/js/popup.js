
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
	    "phone": "1029384746"
	  },
	  {
	    "id": "2",
	    "name": "Bengt Bengtsson",
	    "address": "Bengtsvägen 790",
	    "zipcode": "12345",
	    "city": "Knäckebrödhult",
	    "email": "",
	    "phone": "012345678"
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
	    "phone": "1029384746"
	  },
	  {
	    "id": "2",
	    "name": "Bengt Bengtsson",
	    "address": "Bengtsvägen 790",
	    "zipcode": "12345",
	    "city": "Knäckebrödhult",
	    "email": "",
	    "phone": "012345678"
	  }
	];

	var test_string = JSON.stringify(test_data);
	var expected_response = test_data[1];
			
	/* populate popup.customers with our test data */
	popup.customers = popup.parseResposetextToCustomers(test_string);
	
  var response = popup.getCustomerById(2);
	deepEqual(expected_response, response, 'Customer with ID 2 is returned');
});
