import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = ''

// create a new component which produces some html
const App = () => {
	return <div>Hi!</div>;
}

// take this components generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));