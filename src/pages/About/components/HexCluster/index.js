import React from 'react';
import { Container, Hexagon } from 'components/atoms';

import './styles.scss';

const HexCluster = ({ images }) => (
	<Container className="hex-cluster_hexes-container">
		<Hexagon className="hex-cluster_image-hex image-hex1" src={images[0]} />
		<Hexagon className="hex-cluster_image-hex image-hex2" src={images[1]} />
		<Hexagon className="hex-cluster_image-hex image-hex3" src={images[2]} />
	</Container>
);

export default HexCluster;
