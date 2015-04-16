
module('options');


test('loadOptions', function(){
	/* Set test data in local storage */
	var endpoint = 'a',
		debug = 'b',
		our_reference = 'c',
		dhl_service = 'd',
		goods_item = 'e',
		headers = '{"a": "b"}';

	localStorage['endpoint'] = endpoint;
	localStorage['debug'] = debug;
	localStorage['headers'] = headers;
	localStorage['our_reference'] = our_reference;
	localStorage['dhl_service'] = dhl_service;
	localStorage['goods_item'] = goods_item;

	var response = options.load();
	var expected_response = {endpoint: endpoint, debug: debug, headers: headers, our_reference: our_reference, dhl_service: dhl_service, goods_item: goods_item};

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

test('setGoodsItem', function(){
	var expected = 'Nerf';
	var response = options.setGoodsItem('Nerf');
	equal(expected, response, 'Goods item is stored correctly in Local storage');
});

