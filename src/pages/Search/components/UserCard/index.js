import React from 'react';
import {
	Avatar,
	FlexBox,
	TextBlock,
} from 'components/atoms';
import LANGUAGES from 'constants/Languages';

import './styles.scss';

const UserCard = ({
	src,
	name,
	lessons,
	language,
}) =>  (
	<FlexBox align>
		<Avatar src={src} />
		<FlexBox column>
			<TextBlock className="search_user-card-name">
				{name}
			</TextBlock>
			<TextBlock className="search_user-card-secondary-text">
				{lessons} Lessons
			</TextBlock>
			<TextBlock className="search_user-card-secondary-text">
				{LANGUAGES[language]}
			</TextBlock>
		</FlexBox>
	</FlexBox>
);

export default UserCard;
