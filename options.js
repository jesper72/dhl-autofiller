
var options =  {


	/**
    * Init the component
    *
    * @public
    */
	init: function () {

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
			form = localStorage['form'],
			header_fields = document.getElementsByClassName('header-input'),
			_this = this,
			json, i;


		for (var i=0; i<header_fields.length; i++) {
			header_fields[i].addEventListener('keyup', function () {
				_this.setHeaders();
			});	
		}

		if (endpoint) {
		  document.getElementById('endpoint').value = endpoint;
		}
		
		if (debug !== 'false') {
			document.getElementById('debug').checked = true;
		}

		if (headers) {
			json = JSON.parse(headers),
					field_pair = 0;

					for (i=0; i<json.length; i++){
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
			key, value, i, type, json;
	
		for (i=0; i<header_fields.length; i++){
			type = header_fields[i].getAttribute('data-type');

			if (type === 'key'){
				key = header_fields[i].value;
			} else {
				value = header_fields[i].value;

				if (key.length > 0 && value.length > 0) {
					header_data.push({key: key, value: value});
				}
			}
		}

		json = JSON.stringify(header_data);

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


/* Event listeners */

$('document').ready( function() {
 options.init();
});

$('#endpoint').on('keyup', function() {
	options.setEndpoint();
});

$('#debug').on('click', function() {
	options.setDebugFlag();
});

$('#form').on('change', function() {
	options.setForm();
});

$('#test_connection').on('click', function() {
	options.testConnection();
});


