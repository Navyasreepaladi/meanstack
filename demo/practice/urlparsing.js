// Node program to demonstrate the
//https://www.geeksforgeeks.org/node-js-url-parseurlstring-parsequerystring-slashesdenotehost-api/
// url.parse() method
	
// Importing the module 'url'
// const url = require('url');

// // URL address
// const address = 'https://geeksforgeeks.org/projects?sort=newest&lang=nodejs';

// // Call parse() method using url module
// let urlObject = url.parse(address, true);

// console.log('URL Object returned after parsing');

// // Returns an URL Object
// console.log(urlObject)
// Node program to demonstrate the
// url object properties

// Get different parts of the URL
// using object properties
const url = require('url');

// URL address
const address =
'https://geeksforgeeks.org/projects?sort=newest&lang=nodejs';

// Call parse() method using url module
let urlObject = url.parse(address, true);

console.log('Url host');

// Returns 'geeksforgeeks.org'
console.log(urlObject.host);
console.log('Url pathname');

// Returns '/projects'
console.log(urlObject.pathname);
console.log('Url search');

// Returns '?sort=newest&lang=nodejs'
console.log(urlObject.search);

// Get query data as an object
// Returns an object:
// { sort: 'newest', lang: 'nodejs' }
let queryData = urlObject.query;
console.log(queryData);
console.log('Url query object');

// Returns 'nodejs'
console.log(queryData.lang);
