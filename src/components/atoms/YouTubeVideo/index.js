import React from 'react';

const YouTubeVideo = (props) => (
	<iframe
		width="560"
		height="315"
		title={props.src}
		frameBorder="0"
		allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		allowFullScreen
		{...props}
	/>
);

YouTubeVideo.defaultProps = {
	src: 'https://www.youtube.com/embed/eEzD-Y97ges',
};

export default YouTubeVideo;
