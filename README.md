# lightbox

React-redux re-implementation of our 'vanilla' lightbox demo, using webpack etc.

(insert link)

- simplest option to hosting a React app. on Heroku with webpack is just to include bundle.js (minified, using webpack -p) with the source pushed to github and Heroku. Instead, we're using a post-build step (defined in package.json) to re-build the bundle on Heroku. This requires defining babel and webpack references to be regular dependencies instead of dev-dependencies.

- image data retrieved via Google's 'Custom Search Engine' (CSE) API.

 
