---
index: 2
title: Dictionary Browser Add-On
description: n/a
imgFilename: dictionary-addon-screenshot.png
---
### Dictionary Browser Add-On

A Chrome/Firefox dictionary add-on for the Merriam-Webster's Learner's Dictionary. Users can look up any word while browsing online, and bookmark search results in a designated folder. It has over 600 average dailly users.


* This JavaScript extension fetches data through AJAX and an AWS Lambda proxy. It then recursively maps XML data to HTML DOM elements for display. 
* Search results are injected into the webpage using shadow DOM to prevent CSS leakage.
* It creates a bookmark folder for saved entries, and scans the folder to avoid duplicates. 

[Product listing for Firefox](https://addons.mozilla.org/en-US/firefox/addon/learners-dictionary/)

[Product listing for Chrome](https://chrome.google.com/webstore/detail/merriam-websters-learners/bibagmeonfmaeiicmgbngjdjahaaejll?fbclid=IwAR2la6FKDgBVsxUAEtmn4T_5p-mrWmjP7zUeWCq9b4rVtzC2badUZ9QhKMs)

[Repo](https://github.com/vic2019/dictionary-firefox-extension)