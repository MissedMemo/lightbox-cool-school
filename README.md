# lightbox

Re-implementation of earlier 'vanilla' lightbox demo, using current javascript stack elements.

(insert Heroku app link)

Tech Stack:

- Javascript ES6
- ReactJS & Redux
- webpack
- CSS modules, PostCSS (via plug-in)
- testing using tape & Enzyme
- remote comms via Axios & redux-thunk
- node.js server
- hosted on Heroku
- image data retrieved via Google's 'Custom Search Engine' (CSE) API

Notes:

- simplest option to hosting a React app. on Heroku with webpack is just to include bundle.js (minified, using webpack -p) with the source pushed to github and Heroku. Instead, we're using a post-build step (defined in package.json) to re-build the bundle on Heroku. This requires defining babel and webpack references to be regular dependencies instead of dev-dependencies.

 
