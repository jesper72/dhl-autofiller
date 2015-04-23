/*global QUnit: false, options: false, localStorage: false */
module('options');

QUnit.test('loadOptions', function (assert) {
  /* Set test data in local storage */
  var endpoint = 'a',
    our_reference = 'c',
    goods_item = 'e',
    headers = '{"a": "b"}';

  localStorage.endpoint = endpoint;
  localStorage.our_reference = our_reference;
  localStorage.goods_item = goods_item;
  localStorage.headers = headers;

  /* Get our test data */
  var response = options.load();
  var expected_response = {endpoint: endpoint, headers: headers, our_reference: our_reference, goods_item: goods_item};

  assert.deepEqual(response, expected_response, 'Local storage data is loaded correctly');
});

QUnit.test('setEndpoint', function (assert) {
  var endpoint = 'a';
  var response = options.setEndpoint(endpoint);
  assert.equal(endpoint, response, 'Endpoint is stored correctly in Local storage');
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

