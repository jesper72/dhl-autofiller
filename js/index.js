
var popup = {

  /**
    * Variable to hold the JSONArray of customers
    *
    * @private
    */
  customers: null,


  /**
    * Variable to hold the current URL of the active tab
    *
    * @private
    */
  current_url: null,


  /**
    * Variable to hold the two URLs we need to identify which form we are filling
    *
    * @private
    */
  target_urls: {register_shipment: 'http://www.dhlmultishipping.se/transnet/register.do?method=view', add_address: 'http://www.dhlmultishipping.se/transnet/organisation.jsp?organisation=new'},


  /**
    * Init the component
    *
    * @public
    */
  init: function () {
    this.getTabUrl();
    this.loadCustomers();
  },


  /**
  * Sends an XHR GET request to grab customers. The XHR's 'onload'
  * event is hooks up to the 'createCustomerOptions' method through bind.
  *
  * @public
  */
  loadCustomers: function () {

    var request = new XMLHttpRequest(),
        headers = localStorage['headers'],
        json_headers = JSON.parse(headers),
        i;

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
        var msg = chrome.i18n.getMessage("noEndpointConfiguredText");
        this.error(msg);
        return;
    }

    this.log("Endpoint is " + endpoint + " opening XMLHttpRequest");

    request.open("GET", endpoint, true);

    this.log("Adding headers " + headers);

    for (i=0; i<json_headers.length; i++){
      request.setRequestHeader(json_headers[i].key,json_headers[i].value);
    }

    request.onload = this.createCustomerOptions.bind(this);
    request.send(null);
  },


  /**
  * Populate the customer data in the related fields
  *
  * @public
  */
  populateCustomerData: function () {

        this.log("Entering showCustomerData");
        var selectorObject = document.getElementById('customers'),
            customerId = selectorObject.options[selectorObject.selectedIndex].value,
            customer = this.getCustomerById(customerId);

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
      this.getTabUrl();

      var id = document.getElementById('id').value,
          name = document.getElementById('name').value,
          address = document.getElementById('address').value,
          zipcode = document.getElementById('zipcode').value,
          city = document.getElementById('city').value,
          phone = document.getElementById('phone').value,
          email = document.getElementById('email').value;

      this.log("fillDhlForm data is: ");
      this.log("id: " + id);
      this.log("name: " + name);
      this.log("address: " + address);
      this.log("zipcode: " + zipcode);
      this.log("city: " + city);
      this.log("phone: " + phone);
      this.log("email: " + email);

    
      if (this.target_urls.register_shipment === this.current_url) {

        var code = 'var evt = document.createEvent("MouseEvents");'+
          'evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); '+
          'var cb = document.getElementById("consignee_mode_other"); '+
          'cb.dispatchEvent(evt);'+
          'document.getElementById("consignee_temp.id").value = "' + id +'";'+
          'document.getElementById("consignee_temp.name").value = "' + name +'";'+
          'document.getElementById("consignee_temp.addressline[0]").value = "' + address +'";'+
          'document.getElementById("consignee_temp.postcode").value = "' + zipcode +'";'+
          'document.getElementById("consignee_temp.city").value = "' + city +'";'+
          'document.getElementById("consignee_temp.contactPerson").value = "' + name +'";'+
          'document.getElementById("consignee_temp.mobile").value = "' + phone +'";'+
          'document.getElementById("consignee_temp.phone").value = "' + phone +'";'+
          'document.getElementById("consignee_temp.email").value = "' + email +'";'+
          'document.getElementsByName("consignee_temp_save")[0].checked = true;';

      } else {

        var code = 'document.getElementById("id").value = "' + id +'";'+
          'document.getElementById("name").value = "' + name +'";'+
          'document.getElementById("addressline.0").value = "' + address +'";'+
          'document.getElementById("postcode").value = "' + zipcode +'";'+
          'document.getElementById("city").value = "' + city +'";'+
          'document.getElementById("contactPerson").value = "' + name +'";'+
          'document.getElementById("phone").value = "' + phone +'";'+
          'document.getElementById("mobile").value = "' + phone +'";'+
          'document.getElementById("email").value = "' + email +'";'+
          'document.getElementById("type.consignee").checked = true;'+
          'document.getElementById("type.notify").checked = true;';

      }
      

      this.log("target_url: " + this.current_url + ", code: " + code);

      chrome.tabs.executeScript(null, {code: code}, function() {
          this.log("executeScript response received");
      });
  },


  /**
    * Go get the current tab URL and store it in this.current_url;
    *
    * @private
    */
  getTabUrl: function () {
    var _this = this;

    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        _this.current_url = tabs[0].url;
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
    var length, options, customer, select_customer_msg = chrome.i18n.getMessage("selectCustomerText");

    options = '<option value="">'+ select_customer_msg +'</option>';
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


