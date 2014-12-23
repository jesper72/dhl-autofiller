
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
      header_json = JSON.parse(headers);

    this.setOptionsDOM(endpoint, debug, header_json);

    return {endpoint: endpoint, debug: debug, headers: headers};
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
  setDebugFlag: function(debugFlag) {
    localStorage['debug'] = debugFlag; 
    this.log('Persisted debug setting in local localStorage with value ' + debugFlag);

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
  setOptionsDOM: function (endpoint, debug, headers) {
    
    var header_dom = $('.header-input'),
        endpoint_dom = $('#endpoint'),
        debug_dom = $('#debug'),
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



