/*global localStorage: false, console: false, $: false, chrome: false, XMLHttpRequest: false, window: false, options: false, popup: false */
/* Event listeners for popup.js from index.html */

$('document').ready(function () {
  popup.init();
});

$('#reload').on('click', function () {
  popup.loadCustomers();
});

$('#customers').on('change', function () {
  popup.populateCustomerData();
});

$('#send_info').on('click', function () {
  popup.fillDhlForm();
});
