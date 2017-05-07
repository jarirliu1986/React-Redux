import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAA7kbDSntFiPyO4yV0rJzR7vOswshnebg';

//Create new component to produce HTML
YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
	console.log(data);
});
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}


//Take the component generated HTML and put it in the DOM(on the page)

ReactDOM.render(<App />, document.querySelector('.container'));