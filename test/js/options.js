
module('options');


test('loadOptions', function(){
	/* Set test data in local storage */
	var endpoint = 'a',
		debug = 'b',
		our_reference = 'c',
		dhl_service = 'd',
		headers = '{"a": "b"}';

	localStorage['endpoint'] = endpoint;
	localStorage['debug'] = debug;
	localStorage['headers'] = headers;
	localStorage['our_reference'] = our_reference;
	localStorage['dhl_service'] = dhl_service;

	var response = options.load();
	var expected_response = {endpoint: endpoint, debug: debug, headers: headers, our_reference: our_reference, dhl_service: dhl_service};

	deepEqual(response, expected_response, 'Local storage data is loaded correctly');
});


test('setEndpoint', function(){
	var endpoint = 'a';
	var response = options.setEndpoint(endpoint);
	equal(endpoint, response, 'Endpoint is stored correctly in Local storage');
});


test('setDebug', function(){
	var expected = 'true';
	var response = options.setDebugFlag(true);
	equal(expected, response, 'Debug flag is stored correctly in Local storage');
});

test('setOurReference', function(){
	var expected = 'dave';
	var response = options.setOurReference('dave');
	equal(expected, response, 'Our reference is stored correctly in Local storage');
});

test('setDefaultService', function(){
	var expected = '12345';
	var response = options.setDefaultService('12345');
	equal(expected, response, 'Default service is stored correctly in Local storage');
});

