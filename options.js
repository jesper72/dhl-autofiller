
var options =  {

	/**
    * Get the values from loacal storage and display the values
    * in the input fields
    *
    * @public
    */
	loadOptions: function() {
		var endpoint = localStorage['endpoint'],
			debug = localStorage['debug'];

		document.getElementById('endpoint').value = endpoint;
		if (debug !== 'false') {
			document.getElementById('debug').checked = true;
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

		this.log('Persisted endpoint in local localStorage with value ' + endpoint);
	},


	/**
    * Store the value of the debug field in local storage
    *
    * @public
    */
	persistDebugFlag: function() {
		var debugFlag = (document.getElementById('debug').checked);
		localStorage['debug'] = debugFlag; 

		this.log('Persisted debug in local localStorage with value ' + debugFlag);
	},



	/**
    * Test the connection to the endpoint by sending an XHR
    * Calls this.testData on success
    *
    * @public
    */
	testConnection: function() {
		this.testResult('');
		var endpoint = localStorage['endpoint'];

		var _this = this;	
		var req = new XMLHttpRequest();
	    req.open("GET", endpoint, true);
	    req.onreadystatechange = function (oEvent) {  
		    if (req.readyState === 4) {  
		        if (req.status === 200) {  
		          _this.testData(req.responseText);  
		          _this.testResult('Anslutningen lyckades<br>', true);	    
		        } else {  
		           _this.log('XMLHttpRequest threw error '+ req.statusText);	
		           _this.testResult('Anslutningen misslyckades: ' + req.statusText +'<br>', true);	         
		        }  
		    }  
		};  
	    req.send(null);	
	},


	/**
    * Tests the data against the required JSON structure
    *
    * @param {string} data, a JSON formatted string containing an array of customers
    * @public
    */
	testData: function(data) {
		
		try {
			var customers = JSON.parse(data);
			var errors = [];

			for (var i = 0; i<customers.length; i++) {
				var id = customers[i].id,
					name = customers[i].name,
					address = customers[i].address,
					zipcode = customers[i].zipcode,
					city = customers[i].citsy,
					phone = customers[i].phone,
					email = customers[i].email;

				if (typeof id == undefined) {
					errors.push('id');
				}
				if (typeof name == undefined) {
					errors.push('name');
				}
				if (typeof address == undefined) {
					errors.push('address');
				}
				if (typeof zipcode == undefined) {
					errors.push('zipcode');
				}
				if (typeof city == undefined) {
					errors.push('city');
				}
				if (typeof phone == undefined) {
					errors.push('phone');
				}
				if (typeof email == undefined) {
					errors.push('email');
				}

			}

			if (errors.length > 0) {
				this.testResult('Datastukturen är inkorrekt<br>' + errors.join(',') +'<br>', true);
			} else {
				this.testResult('Datastukturen är korrekt<br>', true);
			}

				      
		} catch (err) {
			this.log('testData threw error '+ err.message);
			this.testResult('Datastukturen är inte valid json<br>' + err.message, true);
		}

		var _this = this;
		
		setTimeout(function() { _this.testResult(''); }, 2000);
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
  options.loadOptions();
});

document.getElementById('endpoint').addEventListener('keyup', function () {
  options.setEndpoint();
});

document.getElementById('debug').addEventListener('click', function () {
  options.setDebugFlag();
});

document.getElementById('test_connection').addEventListener('click', function () {
  options.testConnection();
});
