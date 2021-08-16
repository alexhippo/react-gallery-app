# React Gallery App

This project is a Photo Gallery App made with React, React Router and the [Flickr Photo Search API](https://www.flickr.com). Users can view, filter and search for photos of cats (and other cat-egories) on Flickr using this app. 

## Motivation
This project was created as part of the [Treehouse Full Stack Javascript Techdegree](https://teamtreehouse.com/techdegree/full-stack-javascript).

## Technologies used
- React
- JavaScript
- React Router
- Flickr Photo Search API

## Getting started
### Downloading
Click on the 'Code' button and clone this project via command line or select 'Download Zip.'

### Installing
1. Unzip the zip file if you have downloaded this project as a zip file.
1. Open the folder on the command line, such as Git Bash, Powershell or Terminal.
1. Run `yarn install` to install all dependencies to run this project.
1. An API key to use the Flickr API is required to run this project. Sign up for an account at [Flickr](https://www.flickr.com) and then sign up for a [Non-Commercial API Key](https://www.flickr.com/services/apps/create/apply/).
1. Copy details of your key into new file called `config.js` like so:
    ```
    const apiKey = '<your key here>';
    export default apiKey;
    ```
1. Run `yarn start` to start the portfolio site on your default browser.

## Available Scripts
In the project directory, you can run:

### `yarn` or `yarn install`
To update project dependencies.

### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.