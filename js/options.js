
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
    * @return {Object} An object with endpoint, debug and headers read from localStorage
    */
  load: function() {
    var endpoint = localStorage['endpoint'],
      debug = localStorage['debug'],
      headers = localStorage['headers'],
      header_json = JSON.parse(headers),
      our_reference = localStorage['our_reference'],
      dhl_service = localStorage['dhl_service'],
      goods_item = localStorage['goods_item'];

    this.setOptionsDOM(endpoint, debug, header_json, our_reference, dhl_service, goods_item);

    return {endpoint: endpoint, debug: debug, headers: headers, our_reference: our_reference, dhl_service: dhl_service, goods_item: goods_item};
  },

  /**
  * @public
  *
    * Store the value of the endpoint field in local storage
    *
    * @param {string} endpoint an url
    * @return {String} Endpoint value from localStorage
    */
  setEndpoint: function(endpoint) {
    localStorage['endpoint'] = endpoint; 
    this.log('Persisted endpoint setting in local localStorage with value ' + endpoint);

    return localStorage['endpoint'];
  },

  /**
  * @public
  *
    * Store the value of the debug field in local storage
    *
    * @param {string} debug a boolean string value
    * @return {String} Debug value from localStorage
    */
  setDebugFlag: function(debug_flag) {
    localStorage['debug'] = debug_flag; 
    this.log('Persisted debug setting in local localStorage with value ' + debug_flag);

    return localStorage['debug'];
  },

  /**
  * @public
  * 
    * Store the value of the headers field in local storage
    *
    * @param {jQueryDOMObjects} jquery compatible array och DOM objects
    * @return {String} Headers value from localStorage
    */
  setHeaders: function(header_fields) {
  
    var header_data = [],
      key, value, i, type, json;

    $(header_fields).each(function() {
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
    localStorage['headers'] = json;

    return localStorage['headers'];
  },

  /**
  * @public
  *
    * Store the value of the our_reference field in local storage
    *
    * @param {string} our reference a string value
    * @return {String} Our reference value from localStorage
    */
  setOurReference: function(our_reference) {
    localStorage['our_reference'] = our_reference; 
    this.log('Persisted our_reference setting in local localStorage with value ' + our_reference);

    return localStorage['our_reference'];
  },

  /**
  * @public
  *
    * Store the value of the dhl service field in local storage
    *
    * @param {string}  dhl service a numeric string value
    * @return {String}  dhl service value from localStorage
    */
  setDefaultService: function(dhl_service) {
    localStorage['dhl_service'] = dhl_service; 
    this.log('Persisted dhl_service setting in local localStorage with value ' + dhl_service);

    return localStorage['dhl_service'];
  },

  /**
  * @public
  *
    * Store the value of the goods item field in local storage
    *
    * @param {string}  goods item string value
    * @return {String}  goods item value from localStorage
    */
  setGoodsItem: function(goods_item) {
    localStorage['goods_item'] = goods_item; 
    this.log('Persisted goods_item setting in local localStorage with value ' + goods_item);

    return localStorage['goods_item'];
  },

  /**
  * @public
  * 
    * Test the connection to the endpoint by sending an XHR
    * Calls this.testData on success
    */ 
  testConnection: function() {
    
    var endpoint = localStorage['endpoint'],
      _this = this,
      request = new XMLHttpRequest(),
      headers = localStorage['headers'],
      json_headers = JSON.parse(headers),
      i;

    this.testResult('');

    request.open("GET", endpoint, true);

    for (i=0; i<json_headers.length; i++){
      request.setRequestHeader(json_headers[i].key,json_headers[i].value);
    }

      request.onreadystatechange = function (oEvent) {  
      if (request.readyState === 4) {  
          if (request.status === 200) {  
            _this.testResult('OK', true);     
          } else {  
             _this.log('XMLHttpRequest threw error '+ request.statusText);  
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
    * @param {string} debug boolean string
    * @param {JSONArray} headers key value array
    */
  setOptionsDOM: function (endpoint, debug, headers, our_reference, dhl_service, goods_item) {
    
    var header_dom = $('.header-input'),
        endpoint_dom = $('#endpoint'),
        debug_dom = $('#debug'),
        our_reference_dom = $('#our_reference'),
        dhl_service_dom = $('#dhl_service'),
        goods_item_dom = $('#goods_item'),
        field_pair, i;

    if (endpoint) {
      endpoint_dom.val(endpoint);
    }

    if (debug !== 'false') {
      debug_dom.attr('checked', true);
    }

    if (headers) {
        field_pair = 0;

        for (i=0; i<headers.length; i++){
          var key = headers[i].key,
              value = headers[i].value;

          header_dom[field_pair].value = key;
          header_dom[field_pair +1].value = value;

          field_pair += 2;
        }
    }

    if (our_reference) {
      our_reference_dom.val(our_reference);
    }

    if (dhl_service) {
      dhl_service_dom.val(dhl_service);
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
  },

  /**
  * @private
  *
    * If the setting Debug is enabled - we pass on the message to 
    * the window.console
    *
    * @param {string} message, the message to be logged
    */   
  log: function(message) {
    debug = localStorage['debug'];

    if (debug === 'true') {
      window.console.log(message);
    }
  }
};



