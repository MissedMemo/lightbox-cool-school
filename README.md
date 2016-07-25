# lightbox

Re-implementation of earlier 'vanilla' lightbox demo, using current javascript stack elements, accessible online at [lightbox-react.herokuapp.com](http://lightbox-react.herokuapp.com)

Tech Stack:

- Javascript ES6
- ReactJS & Redux
- webpack
- CSS modules, PostCSS (via plug-in)
- testing using Mocha, Chai, and Enzyme
- remote comms via Axios & redux-thunk
- node.js server
- hosted on Heroku
- image data retrieved via Google's 'Custom Search Engine' (CSE) API

Notes:

- simplest option to hosting a React app. on Heroku with webpack is just to include bundle.js (minified, using webpack -p) with the source pushed to github and Heroku. Instead, we're using a post-build step (defined in package.json) to re-build the bundle on Heroku. This requires defining babel and webpack references to be regular dependencies instead of dev-dependencies.
- image data retrieved via Google's 'Custom Search Engine' (CSE) API, which has a hard limit of 100 queries per day (it resets at midnight). They have an additional limit of 10 items per query, so we issue multiple paged queries for every search in order to fill the view with images.
- Note that CSE search results will NOT match those returned by an actual Google search, an issue [Google has addressed online](https://support.google.com/customsearch/answer/70392)
 
