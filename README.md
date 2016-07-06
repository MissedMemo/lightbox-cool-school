# lightbox

React-redux re-implementation of earlier 'vanilla' lightbox demo, using ES6, webpack, CSS modules, unit testing with tape & enzyme, running on a node.js server hosted on Heroku.

(insert Heroku app link)

Notes:

- simplest option to hosting a React app. on Heroku with webpack is just to include bundle.js (minified, using webpack -p) with the source pushed to github and Heroku. Instead, we're using a post-build step (defined in package.json) to re-build the bundle on Heroku. This requires defining babel and webpack references to be regular dependencies instead of dev-dependencies.

- image data retrieved via Google's 'Custom Search Engine' (CSE) API.

 
