
var options =  {

	init: function () {

		var header_fields = document.getElementsByClassName('header-input')
			_this = this;

		for (var i=0; i<header_fields.length; i++) {
			header_fields[i].addEventListener('keyup', function () {
				_this.setHeaders();
			});	
		}
		
		this.loadOptions();
	},


	/**
    * Get the values from loacal storage and display the values
    * in the input fields
    *
    * @public
    */
	loadOptions: function() {
		var endpoint = localStorage['endpoint'],
			debug = localStorage['debug'],
			headers = localStorage['headers'],
			form = localStorage['form'];

		if (endpoint) {
		  document.getElementById('endpoint').value = endpoint;
		}
		
		if (debug !== 'false') {
			document.getElementById('debug').checked = true;
		}

		if (headers) {
			var json = JSON.parse(headers),
					header_fields = document.getElementsByClassName('header-input'),
					field_pair = 0;

					for (var i=0; i<json.length; i++){
						var key = json[i].key,
								value = json[i].value;

						header_fields[field_pair].value = key;
						header_fields[field_pair +1].value = value;

						field_pair += 2;
					}
		}

		if (form) {
			document.getElementById('form').value = form;
		}
	},


	/**
    * Store the value of the endpoint field in local storage
    *
    * @public
    */
	setEndpoint: function() {
		var endpoint = document.getElementById('endpoint').value;
		localStorage['endpoint'] = endpoint; 

		this.log('Persisted endpoint setting in local localStorage with value ' + endpoint);
	},


	/**
    * Store the value of the debug field in local storage
    *
    * @public
    */
	setDebugFlag: function() {
		var debugFlag = (document.getElementById('debug').checked);
		localStorage['debug'] = debugFlag; 

		this.log('Persisted debug setting in local localStorage with value ' + debugFlag);
	},


	/**
    * Store the value of the headers field in local storage
    *
    * @public
    */
	setHeaders: function() {
	
		var header_fields = document.getElementsByClassName('header-input'),
			header_data = [],
			key, value;
	
		for (var i=0; i<header_fields.length; i++){
			var type = header_fields[i].getAttribute('data-type');

			if (type === 'key'){
				key = header_fields[i].value;
			} else {
				value = header_fields[i].value;

				if (key.length > 0 && value.length > 0) {
					header_data.push({key: key, value: value});
				}
			}
		}

		var json = JSON.stringify(header_data);

		localStorage['headers'] = json;
	},


	/**
    * Store the value of the form field in local storage
    *
    * @public
    */
	setForm: function() {
		var form = (document.getElementById('form').value);
		localStorage['form'] = form; 

		this.log('Persisted form setting in local localStorage with value ' + form);
	},


	/**
    * Test the connection to the endpoint by sending an XHR
    * Calls this.testData on success
    *
    * @public
    */
	testConnection: function() {
		
		var endpoint = localStorage['endpoint'],
			_this = this,
			req = new XMLHttpRequest(),
			headers = localStorage['headers'],
			json_headers = JSON.parse(headers);

		this.testResult('');

		req.open("GET", endpoint, true);

		for (var i=0; i<json_headers.length; i++){
			req.setRequestHeader(json_headers[i].key,json_headers[i].value);
		}

    req.onreadystatechange = function (oEvent) {  
	    if (req.readyState === 4) {  
	        if (req.status === 200) {  
	          _this.testResult('OK', true);	    
	        } else {  
	           _this.log('XMLHttpRequest threw error '+ req.statusText);	
	           _this.testResult('Fail', true);	         
	        }  
	    }  
		};  
	    req.send(null);	
	},



	/**
    * Display the test result in the test_result object
    *
    * @param {string} message, a message to display
    * @param {boolean} append, should the message be appended to the existing message or not
    * @public
    */
	testResult: function (message, append) {
		if (append) {
			message = document.getElementById('test_result').innerHTML + message;
		}
		document.getElementById('test_result').innerHTML = message;
	},


	/**
    * If the setting Debug is enabled - we pass on the message to 
    * the window.console
    *
    * @param {string} message, the message to be logged
    *
    * @private
    */   
	log: function(message) {
		debug = localStorage['debug'];

		if (debug === 'true') {
			window.console.log(message);
		}
	}

};


document.addEventListener('DOMContentLoaded', function () {
  options.init();
});

document.getElementById('endpoint').addEventListener('keyup', function () {
  options.setEndpoint();
});

document.getElementById('debug').addEventListener('click', function () {
  options.setDebugFlag();
});

document.getElementById('form').addEventListener('change', function () {
  options.setForm();
});

document.getElementById('test_connection').addEventListener('click', function () {
  options.testConnection();
});

