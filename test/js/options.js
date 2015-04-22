/*global QUnit: false, options: false, localStorage: false */
module('options');

QUnit.test('loadOptions', function (assert) {
  /* Set test data in local storage */
  var endpoint = 'a',
    debug = 'b',
    our_reference = 'c',
    dhl_service = 'd',
    goods_item = 'e',
    headers = '{"a": "b"}';

  localStorage.endpoint = endpoint;
  localStorage.debug = debug;
  localStorage.headers = headers;
  localStorage.our_reference = our_reference;
  localStorage.dhl_service = dhl_service;
  localStorage.goods_item = goods_item;

  var response = options.load();
  var expected_response = {endpoint: endpoint, debug: debug, headers: headers, our_reference: our_reference, dhl_service: dhl_service, goods_item: goods_item};

  assert.deepEqual(response, expected_response, 'Local storage data is loaded correctly');
});


QUnit.test('setEndpoint', function (assert) {
  var endpoint = 'a';
  var response = options.setEndpoint(endpoint);
  assert.equal(endpoint, response, 'Endpoint is stored correctly in Local storage');
});


QUnit.test('setDebug', function (assert) {
  var expected = 'true';
  var response = options.setDebugFlag(true);
  assert.equal(expected, response, 'Debug flag is stored correctly in Local storage');
});

QUnit.test('setOurReference', function (assert) {
  var expected = 'dave';
  var response = options.setOurReference('dave');
  assert.equal(expected, response, 'Our reference is stored correctly in Local storage');
});

QUnit.test('setGoodsItem', function (assert) {
  var expected = 'Nerf';
  var response = options.setGoodsItem('Nerf');
  assert.equal(expected, response, 'Goods item is stored correctly in Local storage');
});

