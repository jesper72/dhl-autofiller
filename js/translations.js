/*
 *  replace the text attributes with strings from the translation resources
 *
 **/
$('[data-resource]').each(function() {
  var el = $(this);
  var resourceName = el.data('resource');
  var resourceText = chrome.i18n.getMessage(resourceName);
  el.text(resourceText);
});


/*
 *  replace the placeholder values with strings from the translation resources
 *
 **/
$('[data-placeholder]').each(function() {
  var el = $(this);
  var resourceName = el.data('placeholder');
  var resourceText = chrome.i18n.getMessage(resourceName);
  el.data('placeholder', resourceText);
});


/*
 *  replace the options values with text strings from the translation resources
 *
 **/
$('[data-option]').each(function() {
  var el = $(this);
  var resourceName = el.data('option');
  var resourceText = chrome.i18n.getMessage(resourceName);
  el.text(resourceText);
});