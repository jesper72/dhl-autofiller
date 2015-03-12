/*global localStorage: false, console: false, $: false, chrome: false, XMLHttpRequest: false, window: false, options: false, popup: false */
/* Event listeners  for options.js from options.html */

$('document').ready(function () {
options.init();
});

$('#endpoint').on('keyup', function () {
var endpoint = $(this).val();
options.setEndpoint(endpoint);
});

$('#debug').on('click', function () {
var debug = document.getElementById('debug').checked;
options.setDebugFlag(debug);
});

$('#our_reference').on('keyup', function () {
var our_reference = $(this).val();
options.setOurReference(our_reference);
});

$('#dhl_service').on('change', function () {
var dhl_service = $(this).val();
options.setDefaultService(dhl_service);
});

$('#goods_item').on('keyup', function () {
var goods_item = $(this).val();
options.setGoodsItem(goods_item);
});

$('#test_connection').on('click', function () {
options.testConnection();
});

$('.header-input').on('keyup', function () {
var header_fields = $('.header-input');
options.setHeaders(header_fields);
});

