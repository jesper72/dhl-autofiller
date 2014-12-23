
module('options');


test('loadOptions', function(){
	/* Set test data in local storage */
	var endpoint = 'a',
		debug = 'b',
		headers = '{"a": "b"}';

	localStorage['endpoint'] = endpoint;
	localStorage['debug'] = debug;
	localStorage['headers'] = headers;

	var response = options.load();
	var expected_response = {endpoint: endpoint, debug: debug, headers: headers};

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


