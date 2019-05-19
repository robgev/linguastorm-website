import React from 'react';

const YouTubeVideo = ({ src, ...props }) => {
	const youtubeIdRegex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/i;
	const videoId = src.match(youtubeIdRegex)[1];
	const query = `version=3&loop=1&playlist=${videoId}&autoplay=1&autohide=1&disablekb=1&controls=0&fs=0&iv_load_policy=3&modestbranding=1&rel=0`;
	return (
		<iframe
			width="560"
			height="315"
			title={props.src}
			frameBorder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			src={`${src}?${query}`}
			{...props}
		/>
	);
};

YouTubeVideo.defaultProps = {
	src: 'https://www.youtube.com/embed/38wIJdOguqI',
};

export default YouTubeVideo;
