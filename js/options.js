/*global localStorage: false, console: false, $: false, chrome: false, XMLHttpRequest: false, window: false */

var options =  {

  /**
    * @public
    *
    * Init the component
    */
  init: function () {
    this.load();
  },

  /**
  * @public
    *
    * Get the values from loacal storage and send them to setOptionsDOM
    *
    * @return {Object} An object with endpoint, headers, our reference and goods item read from localStorage
    */
  load: function () {
    var endpoint = localStorage.endpoint, headers = localStorage.headers, header_json = JSON.parse(headers), our_reference = localStorage.our_reference, goods_item = localStorage.goods_item;
    this.setOptionsDOM(endpoint, header_json, our_reference, goods_item);
    return {endpoint: endpoint, headers: headers, our_reference: our_reference, goods_item: goods_item};
  },

  /**
  * @public
  *
    * Store the value of the endpoint field in local storage
    *
    * @param {string} endpoint an url
    * @return {String} Endpoint value from localStorage
    */
  setEndpoint: function (endpoint) {
    localStorage.endpoint = endpoint;
    return localStorage.endpoint;
  },

  /**
  * @public
  *
    * Store the value of the headers field in local storage
    *
    * @param {jQueryDOMObjects} jquery compatible array och DOM objects
    * @return {String} Headers value from localStorage
    */
  setHeaders: function (header_fields) {
    var header_data = [], key, value, type, json;

    $(header_fields).each(function () {
      type = $(this).data('type');

      if (type === 'key') {
        key = $(this).val();
      } else {
        value = $(this).val();

        if (key.length > 0 && value.length > 0) {
          header_data.push({key: key, value: value});
        }
      }
    });

    json = JSON.stringify(header_data);
    localStorage.headers = json;

    return localStorage.headers;
  },

  /**
  * @public
  *
    * Store the value of the our_reference field in local storage
    *
    * @param {string} our reference a string value
    * @return {String} Our reference value from localStorage
    */
  setOurReference: function (our_reference) {
    localStorage.our_reference = our_reference;
    return localStorage.our_reference;
  },

  /**
  * @public
  *
    * Store the value of the goods item field in local storage
    *
    * @param {string}  goods item string value
    * @return {String}  goods item value from localStorage
    */
  setGoodsItem: function (goods_item) {
    localStorage.goods_item = goods_item;
    return localStorage.goods_item;
  },

  /**
  * @public
  *
    * Test the connection to the endpoint by sending an XHR
    * Calls this.testData on success
    */
  testConnection: function () {
    var endpoint = localStorage.endpoint, _this = this, request = new XMLHttpRequest(), headers = localStorage.headers, json_headers = JSON.parse(headers), i;
    this.testResult('');
    request.open("GET", endpoint, true);

    for (i = 0; i < json_headers.length; i++) {
      request.setRequestHeader(json_headers[i].key, json_headers[i].value);
    }

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          _this.testResult('OK', true);
        } else {
          _this.testResult('Fail', true);
        }
      }
    };

    request.send(null);
  },

  /**
  * @private
  *
    * Set values in the DOM input fields
    *
    * @param {string} endpoint an url
    * @param {JSONArray} headers key value array
    * @param {string} name to be defaulted in the Our reference field
    * @param {string} type of goods that will be defaulted in the Type of goods field
    */
  setOptionsDOM: function (endpoint, headers, our_reference, goods_item) {

    var header_dom = $('.header-input'), endpoint_dom = $('#endpoint'), our_reference_dom = $('#our_reference'), goods_item_dom = $('#goods_item'), field_pair, i, key, value;

    if (endpoint) {
      endpoint_dom.val(endpoint);
    }

    if (headers) {
      field_pair = 0;

      for (i = 0; i < headers.length; i++) {
        key = headers[i].key;
        value = headers[i].value;

        header_dom[field_pair].value = key;
        header_dom[field_pair + 1].value = value;

        field_pair += 2;
      }
    }

    if (our_reference) {
      our_reference_dom.val(our_reference);
    }

    if (goods_item) {
      goods_item_dom.val(goods_item);
    }
  },

  /**
  * @private
  *
    * Display the test result in the test_result object
    *
    * @param {string} message, a message to display
    * @param {boolean} append, determines if the message shall be appended to the existing message or not
    */
  testResult: function (message, append) {
    if (append) {
      $('#test_result').append(message);
    } else {
      $('#test_result').html(message);
    }
  }

};



