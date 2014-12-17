
var popup = {

  /**
    * Variable to hold the JSONArray of customers
    *
    * @private
    */
  customers: null,


    /**
    * Sends an XHR GET request to grab customers. The XHR's 'onload'
    * event is hooks up to the 'createCustomerOptions' method through bind.
    *
    * @public
    */
  loadCustomers: function () {

        this.log("Entering loadCustomers");

        // Reset the input fields
        document.getElementById('id').value = '';
        document.getElementById('name').value = '';
        document.getElementById('address').value = '';
        document.getElementById('zipcode').value = '';
        document.getElementById('city').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';

        var endpoint = localStorage['endpoint'];


        if (endpoint.length === 0) {
            this.error("<br>Woppwopp, det verkar inte finnas någon endpoint konfigurerad. Gör det först och försök sedan igen!<br><br>");
            return;
        }

        this.log("Endpoint is " + endpoint + " initiating XMLHttpRequest");

    var req = new XMLHttpRequest();
      req.open("GET", endpoint, true);
      req.onload = this.createCustomerOptions.bind(this);
      req.send(null);
  },


    /**
    * Populate the customer data in the related fields
    *
    * @public
    */
  populateCustomerData: function () {

        this.log("Entering showCustomerData");
        var selectorObject = document.getElementById('customers');
        var customerId = selectorObject.options[selectorObject.selectedIndex].value;

        var customer = this.getCustomerById(customerId);

        document.getElementById('id').value = customer.id;
        document.getElementById('name').value = customer.name;
        document.getElementById('address').value = customer.address;
        document.getElementById('zipcode').value = customer.zipcode;
        document.getElementById('city').value = customer.city;
        document.getElementById('phone').value = customer.phone;
        document.getElementById('email').value = customer.email;

  },


    /**
    * Get the data from the input fields, build a javascript string
    * and send them through chrome.tab.executeScript to the current
    * active tab
    *
    * @public
    */
    fillDhlForm: function () {

        this.log("Entering fillDhlForm");

        var id = document.getElementById('id').value,
            name = document.getElementById('name').value,
            address = document.getElementById('address').value,
            zipcode = document.getElementById('zipcode').value,
            city = document.getElementById('city').value,
            phone = document.getElementById('phone').value,
            email = document.getElementById('email').value
            dhl_form = localStorage['form'];

        this.log("fillDhlForm data is: ");
        this.log("id: " + id);
        this.log("name: " + name);
        this.log("address: " + address);
        this.log("zipcode: " + zipcode);
        this.log("city: " + city);
        this.log("phone: " + phone);
        this.log("email: " + email);


        if (dhl_form === 'add_address') {

             var code = 'document.getElementById("id").value = "' + id +'";'+
                'document.getElementById("consignee_temp.id").value = "' + id +'";'+
                'document.getElementById("name").value = "' + name +'";'+
                'document.getElementById("consignee_temp.name").value = "' + name +'";'+
                'document.getElementById("addressline.0").value = "' + address +'";'+
                'document.getElementById("consignee_temp.addressline[0]").value = "' + address +'";'+
                'document.getElementById("postcode").value = "' + zipcode +'";'+
                'document.getElementById("consignee_temp.postcode").value = "' + zipcode +'";'+
                'document.getElementById("city").value = "' + city +'";'+
                'document.getElementById("consignee_temp.city").value = "' + city +'";'+
                'document.getElementById("contactPerson").value = "' + name +'";'+
                'document.getElementById("consignee_temp.contactPerson").value = "' + name +'";'+
                'document.getElementById("mobile").value = "' + phone +'";'+
                'document.getElementById("consignee_temp.mobile").value = "' + phone +'";'+
                'document.getElementById("phone").value = "' + phone +'";'+
                'document.getElementById("consignee_temp.phone").value = "' + phone +'";'+
                'document.getElementById("email").value = "' + email +'";'+
                'document.getElementById("consignee_temp.email").value = "' + email +'";'+
                'document.getElementById("type.consignee").checked = true;'+
                'document.getElementById("type.notify").checked = true;'+
                'document.getElementByName("consignee_temp_save")[0].checked = true;';
        } else {
            
            var code = 'document.getElementById("consignee_temp.id").value = "' + id +'";'+
                    'document.getElementById("consignee_temp.name").value = "' + name +'";'+
                    'document.getElementById("consignee_temp.addressline[0]").value = "' + address +'";'+
                    'document.getElementById("consignee_temp.postcode").value = "' + zipcode +'";'+
                    'document.getElementById("consignee_temp.city").value = "' + city +'";'+
                    'document.getElementById("consignee_temp.contactPerson").value = "' + name +'";'+
                    'document.getElementById("consignee_temp.mobile").value = "' + phone +'";'+
                    'document.getElementById("consignee_temp.phone").value = "' + phone +'";'+
                    'document.getElementById("consignee_temp.email").value = "' + email +'";'+
                    'document.getElementsByName("consignee_temp_save")[0].checked = true;';
        }   
       
        this.log("code: " + code);

        chrome.tabs.executeScript(null, {code: code}, function() {
            this.log("executeScript response received");
        });
    },


  /**
    * Search the 'customers' array for a customer with the passed customerId as id
    *
    * @param {number} customerId, a customer ID
    * @return {JSONobject} customer
    * @private
    */
  getCustomerById: function( id ){
    this.log("Entering getCustomerById", id );

    return this.customers[ id ];
  },

  /**
   * @private
   *
   * Updates the #customers select input with new values based on the passed
   * customers object.
   *
   * @param {Object} customers, Customers objects with customer ids as keys
   * and the corresponding customer as value.
   * @param {Number|String} customers.id
   * @param {String} customers.name
   */
  updateCustomerOptionsDOM: function( customers ){
    var length, options, customer;

    options = '<option value="">V&auml;lj kund</option>';
    length = customers.length;

    Object.keys( customers ).forEach( function( key ){
      customer = customers[ key ];
      options += '<option value="'+ customer.id +'">'+ customer.name +'</option>';
    });

    this.log( 'options are', options );

    document.getElementById( 'customers' ).innerHTML = options;
  },

  /**
   * @private
   *
   * Parses event responseText into a customer object.
   *
   * @param {responseText} responseText, JSON encoded Array of customer objects.
   * @return {Object} An object with customer ids as keys and the corresponding
   * customer as value.
   */
  parseResposetextToCustomers: function( responseText ){
    var customerArray, customers;

    customerArray = JSON.parse( responseText );
    customers = {}

    customerArray.forEach( function( customer ){
      customers[ customer.id ] = customer;
    });

    return customers;
  },

  /**
   * Create the customer options in the 'customers' select object
   *
   * @param {ProgressEvent} e The XHR ProgressEvent.
   * @private
   */
  createCustomerOptions: function( event ){
    this.log("Entering createCustomerOptions");
    var responseText, customers;

    responseText = event.target.responseText;
    customers = this.parseResposetextToCustomers( responseText );
    this.updateCustomerOptionsDOM( customers );
    this.customers = customers;
  },


    /**
    * Display an error message in the error container
    *
    * @param {string} message, the message to be displayed
    *
    * @private
    */
    error: function(message) {
        this.log("Error: " + message);
        var errorContainer = document.getElementById('error');

        errorContainer.innerHTML = message;
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
  popup.loadCustomers();
});

document.getElementById('reload').addEventListener('click', function () {
  popup.loadCustomers();
});

document.getElementById('customers').addEventListener('change', function () {
  popup.populateCustomerData();
});

document.getElementById('send_info').addEventListener('click', function () {
  popup.fillDhlForm();
});
