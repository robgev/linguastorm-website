import React from 'react';
import './styles.scss';

const Video = ({ className, ...props }) => (
	<video
		loop
		muted
		className={`atom_video ${className}`}
		autoplay="autoplay"
		{...props}
	/>
)

export default Video;
