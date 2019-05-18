import React from 'react';

import {
	Popup,
	PopupContent,
	PopupTitle,
	YouTubeVideo,
} from 'components/atoms';
import './styles.scss';

const VideoPopup = ({ src, open, onClose }) => (
	<Popup open={open} onClose={onClose} >
		<PopupTitle onClose={onClose} />
		<PopupContent className="molecule_video-popup-container">
			<YouTubeVideo src={src} />
		</PopupContent>
	</Popup>
);

export default VideoPopup;
