# TIILT WEBSITE

this is [this](https://tiilt.northwestern.edu/)

## Setup

- cd to root of repository
- npm install -sass (optionally -g)
- sass --watch scss/styles.scss css/styles.css

## Master -> Live

- ssh into tiilt.northwestern.edu with the webmin account username and password
- cd into public_html
- git pull

## Structure

- #aGroup contains a "page"
- .window is the box that contains a window\_\_header and content
- .hiddenBox contains a window's content that becomes visible onclick
