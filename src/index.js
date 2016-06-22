import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = ''

// create a new component which produces some html
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// take this components generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
