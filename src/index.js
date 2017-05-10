import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAA7kbDSntFiPyO4yV0rJzR7vOswshnebg';

//Create new component to produce HTML

class App extends Component{
	constructor(props){
		super(props);

		this.state = { videos : [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
			console.log(this.state.videos);
		});
	}

	render(){
		return (
			<div>
				<SearchBar />
				<VideoList videos = {this.state.videos}/>
			</div>
		);
	}
}


//Take the component generated HTML and put it in the DOM(on the page)

ReactDOM.render(<App />, document.querySelector('.container'));