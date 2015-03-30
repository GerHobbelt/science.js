require("../science");

require("util").puts(JSON.stringify({
  "name": "science.js",
  "version": science.version,
  "description": "Scientific and statistical computing in JavaScript.",
  "keywords": ["science", "statistics", "mathematics"],
  "homepage": "https://github.com/jasondavies/science.js",
  "author": {"name": "Jason Davies", "url": "http://www.jasondavies.com/"},
  "repository": {"type": "git", "url": "http://github.com/jasondavies/science.js.git"},
  "devDependencies": {
    "uglify-js": "2.4.19",
    "vows": "0.8.1"
  }
}, null, 2));
