import React from 'react';
import ReactDOM from 'react-dom';

//Create new component to produce HTML

const App = function(){
	return <div>HI</div>; 
}


//Take the component generated HTML and put it in the DOM(on the page)

ReactDOM.render(<App />, document.querySelector('.container'));