# DHL Autofiller Chrome extension

The Chrome plugin auto populates the customer form on dhlmultishipping (http://www.dhlmultishipping.se/) based upon a JSON feed provided by your REST-endpoint.

## Installation

1. Download and unzip the complete source code
2. Visit chrome://extensions in Chrome
3. Ensure that the Developer mode checkbox in the top right-hand corner is checked
4. Click Load unpacked extension… to pop up a file-selection dialog
5. Navigate to the directory in which your extension files live, and select it

The extension is now installed. Click Options to enter the URL to your enpoint

## Usage

After a successful installation - a yellow icon with a red plus will show up next to the URL field.

While on the DHL Multishippings create customer view - click the extension icon.
The extension will now load all customers available and populate a select
Selecting one of the customers will populate the extensions input fields allowing you to alter the information
Click Skicka till formuläret to populate the DHL form

## Required JSON feed

On the specified endpoint a JSON array of customers must be available through GET in the following structure:
```json
[
  {
    "id": "1",
    "name": "Jesper Svensson",
    "address": "Street address",
    "zipcode": "12345",
    "city": "Växjö",
    "email": "svejes@gmail.com",
    "phone": "1029384746"
  },
  {
    "id": "2",
    "name": "Bengt Bengtsson",
    "address": "Bengtsvägen 790",
    "zipcode": "12345",
    "city": "Knäckebrödhult",
    "email": "",
    "phone": "012345678"
  }
]
```
The extension currently does not support any authentication when calling the endpoint

