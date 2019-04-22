import React from 'react';
import PropTypes from 'prop-types';
import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	ContentText,
	TextBlock,
} from 'components/atoms';

import './styles.scss';

const BlogPost = ({ post }) => (
	<Card>
		<CardActionArea>
			<CardMedia
				image={ post.imageUrl }
				title={ post.title }
			/>
			<CardContent>
				<ContentText color="secondary">
					{post.date}
				</ContentText>
				<TextBlock
					gutterBottom
					variant="h5"
					component="h2"
				>
					{post.title}
				</TextBlock>
				<ContentText className="molecule_blog-post_desc">
					{post.shortDesc}
				</ContentText>
			</CardContent>
		</CardActionArea>
		<CardActions>
			<Button className="molecule_blog-post_button" color="secondary">
          Learn More
			</Button>
		</CardActions>
	</Card>
);

BlogPost.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.number,
		date: PropTypes.string,
		title: PropTypes.string,
		shortDesc: PropTypes.string,
		imageUrl: PropTypes.string,
	})
};

export default BlogPost;
