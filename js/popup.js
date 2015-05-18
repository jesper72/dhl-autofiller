/*global localStorage: false, alert: false, console: false, $: false, chrome: false, XMLHttpRequest: false, window: false, JSON: false */

var popup = {

  /**
    * @private
    *
    * Variable to hold the JSONArray of customers
    */
  customers: null,

  /**
    * @private
    *
    * Variable to hold the current URL of the active tab
    */
  current_url: null,

  /** 
    * @private
    *
    * Variable to hold the two URLs we need to identify which form we are filling
    */
  target_urls: {register_shipment: 'http://www.dhlmultishipping.se/transnet/register.do?method=view', add_address: 'http://www.dhlmultishipping.se/transnet/organisation.jsp?organisation=new'},

  /**
    * @private
    *
    * Variable to hold the congiguration for the different shippment types received from the json feed and
    * match them to DHL-ID:s
    */
  shippment_services: [{'name': 'DHL Paket', 'id': '182875'}, {'name': 'DHL Servicepoint', 'id': '182880'}],

  /**
    * @public
    *
    * Init the component
    */
  init: function () {
    this.getCustomerCache();
    this.getTabUrl();
    if (this.customers) {
      this.updateCustomerOptionsDOM(this.customers);
    } else {
      this.loadCustomers();
    }
  },

  /**
  * @public
  *
  * Select service type in the DHL form
  * 
  */
  selectShippment: function (shippment_service) {

    var service = this.getShippingServiecByName(shippment_service);
    var code = 'if (document.getElementsByName("templatePK")[0].value != "' + service + '") {' +
        'document.getElementsByName("templatePK")[0].value = "' + service + '";' +
        'document.forms[0].submit();document.forms[0].templatePK.disabled=true;' +
        '}';

    chrome.tabs.executeScript(null, {code: code});
  },

  /**
  * @public
  *
  * Sends an XHR GET request to grab customers. The XHR's 'onload'
  * event is hooks up to the 'createCustomerOptions' method through bind.
  */
  loadCustomers: function () {

    var request = new XMLHttpRequest(), headers = localStorage.headers, json_headers = JSON.parse(headers), i;
    var loading_label = chrome.i18n.getMessage("loadingCustomerText");
    var endpoint = localStorage.endpoint;
    var msg;
    // Reset the input fields
    $('#id').val('');
    $('#name').val('');
    $('#address').val('');
    $('#zipcode').val('');
    $('#city').val('');
    $('#phone').val('');
    $('#email').val('');
    $('#order_id').val('');

    // Reset the drop down
    $('#customers').html('<option value="">' + loading_label + '</option>');

    if (endpoint.length === 0) {
      msg = chrome.i18n.getMessage("noEndpointConfiguredText");
      this.error(msg);
      return;
    }
    request.open("GET", endpoint, true);

    for (i = 0; i < json_headers.length; i++) {
      request.setRequestHeader(json_headers[i].key, json_headers[i].value);
    }

    request.onload = this.createCustomerOptions.bind(this);
    request.send(null);
  },

  /**
  * @public
  *
  * Populate the customer data in the related fields
  */
  populateCustomerData: function () {
    var customerId = $('#customers').val(), customer = this.getCustomerById(customerId);
    console.log(customer);

    this.selectShippment(customer.shipping);
    $('#id').val(customer.id);
    $('#name').val(customer.name);
    $('#address').val(customer.address);
    $('#zipcode').val(customer.zipcode);
    $('#city').val(customer.city);
    $('#phone').val(customer.phone);
    $('#email').val(customer.email);
    $('#order_id').val(customer.order_id);

    this.updateCustomerOptionsDOM(this.customers);
  },

  /**
  * public
  *
  * Get the data from the input fields, build a javascript string
  * and send them through chrome.tab.executeScript to the current
  * active tab
  */
  fillDhlForm: function () {

    var id = $('#id').val(), name = $('#name').val(), address = $('#address').val(), zipcode = $('#zipcode').val(), city = $('#city').val(), phone = $('#phone').val(), email = $('#email').val(), our_reference = localStorage.our_reference, goods_item = localStorage.goods_item, code, order_id = $('#order_id').val();
    this.getTabUrl();

    if (this.target_urls.register_shipment === this.current_url) {
      code = 'var evt = document.createEvent("MouseEvents");' +
        'evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); ' +
        'var cb = document.getElementById("consignee_mode_other"); ' +
        'cb.dispatchEvent(evt);' +
        'document.getElementById("consignee_temp.id").value = "' + id + '";' +
        'document.getElementById("consignee_temp.name").value = "' + name + '";' +
        'document.getElementById("consignee_temp.addressline[0]").value = "' + address + '";' +
        'document.getElementById("consignee_temp.postcode").value = "' + zipcode + '";' +
        'document.getElementById("consignee_temp.city").value = "' + city + '";' +
        'document.getElementById("consignee_temp.contactPerson").value = "' + name + '";' +
        'document.getElementById("consignee_temp.mobile").value = "' + phone + '";' +
        'document.getElementById("consignee_temp.phone").value = "' + phone + '";' +
        'document.getElementById("consignee_temp.email").value = "' + email + '";' +
        'document.getElementsByName("consignee_temp_save")[0].checked = true;' +
        'document.getElementById("orderNo").value = "' + our_reference + ': ' + order_id + '";' +
        'document.getElementById("consigneeReference").value = "' + name + '";' +
        'document.getElementById("goodsItemList.goodsItems[0].goodsItemReferences[1].value").value="' + goods_item + '";' +
        'var evt2 = document.createEvent("MouseEvents");' +
        'evt2.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); ' +
        'document.getElementsByName("notify")[0].dispatchEvent(evt2);' +
        'document.getElementById("notifySmsValue").value = "' + phone + '";';
    } else {
      code = 'document.getElementById("id").value = "' + id + '";' +
        'document.getElementById("name").value = "' + name + '";' +
        'document.getElementById("addressline.0").value = "' + address + '";' +
        'document.getElementById("postcode").value = "' + zipcode + '";' +
        'document.getElementById("city").value = "' + city + '";' +
        'document.getElementById("contactPerson").value = "' + name + '";' +
        'document.getElementById("phone").value = "' + phone + '";' +
        'document.getElementById("mobile").value = "' + phone + '";' +
        'document.getElementById("email").value = "' + email + '";' +
        'document.getElementById("type.consignee").checked = true;' +
        'document.getElementById("type.notify").checked = true;';
    }
    chrome.tabs.executeScript(null, {code: code});
    this.setCustomerAsHandled(id);
    this.updateCustomerOptionsDOM(this.customers);
  },

  /**
    * @private
    *
    * Get the Shipping Service ID based upon the name service name
    */
  getShippingServiecByName: function (shippment_service_name) {
    var service = '', i;
    for (i = 0; i < this.shippment_services.length; i++) {
      if (this.shippment_services[i].name === shippment_service_name) {
        service = this.shippment_services[i].id;
        break;
      }
    }
    return service;
  },

  /**
    * @private
    *
    * Go get the current tab URL and store it in this.current_url;
    */
  getTabUrl: function () {
    var _this = this;

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
      _this.current_url = tabs[0].url;
    });
  },

  /**
    * @private
    *
    * Search the 'customers' array for a customer with the passed customerId as id
    *
    * @param {number} customerId, a customer ID
    * @return {JSONobject} customer
    */
  getCustomerById: function (id) {
    return this.customers[id];
  },

  /**
    * @private
    *
    * Set this customer as handled
    *
    * @param {number} customerId, a customer ID
    */
  setCustomerAsHandled: function (id) {
    this.customers[id].handled = true;
    this.setCustomerCache(this.customers);
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
  updateCustomerOptionsDOM: function (customers) {
    var options, customer, handled, select_customer_msg = chrome.i18n.getMessage("selectCustomerText");

    options = '<option value="">' + select_customer_msg + '</option>';

    Object.keys(customers).forEach(function (key) {
      customer = customers[key];
      handled = (customer.handled) ? 'OK: ' : '';
      options += '<option value="' + customer.id + '">' + handled + customer.order_id + ': ' + customer.name + '</option>';
    });

    $('#customers').html(options);
  },

  /**
   * @private
   *
   * Transform the customer array into a string and store it in localStorage with key customers
   * Returns nothing
   *
   * @param {Object} customers, Customers objects with customer ids as keys
   * and the corresponding customer as value.
   */
  setCustomerCache: function (customers) {
    localStorage.customers = JSON.stringify(customers);
    this.customers = customers;
  },

  /**
   * @private
   *
   * Return an array parsed from the customers string from localStorage
   */
  getCustomerCache: function () {
    this.customers = JSON.parse(localStorage.customers);
    return this.customers;
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
  parseResposetextToCustomers: function (responseText) {
    var customerArray, customers;

    customerArray = JSON.parse(responseText);
    customers = {};

    customerArray.forEach(function (customer) {
      customers[customer.id] = customer;
    });

    return customers;
  },

  /**
   * @private
   *
   * Create the customer options in the 'customers' select object and persist a cached version to localeStorage
   *
   * @param {ProgressEvent} The XHR ProgressEvent.
   */
  createCustomerOptions: function (event) {
    var responseText, customers;

    responseText = event.target.responseText;
    customers = this.parseResposetextToCustomers(responseText);
    this.updateCustomerOptionsDOM(customers);
    this.setCustomerCache(customers);
  },

  /**
  * @private
  *
  * Display an error message in the error container
  *
  * @param {string} message, the message to be displayed
  */
  error: function (message) {
    var errorContainer = $('#error');
    errorContainer.html(message);
  }

};


