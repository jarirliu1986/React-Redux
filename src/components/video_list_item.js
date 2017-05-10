import React from 'react';

const VideoListItem = ({video}) => { 
//ES6 new feature, mean the props has a property names video, and create a new variable to grap this "video" property
	//equals to const video = props.video;
	const imageUrl = video.snippet.thumbnails.default.url;
	return(
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>

				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div> 
		</li>
	);

}

export default VideoListItem;