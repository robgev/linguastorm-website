import React from 'react';
import {
	Avatar,
	FlexBox,
	TextBlock,
} from 'components/atoms';
import { PrimaryLink } from 'components/molecules';
import LANGUAGES from 'constants/Languages';

import './styles.scss';

const UserCard = ({
	src,
	lessons,
	language,
	userName,
}) =>  (
	<FlexBox align className="search_user-card_container">
		<Avatar className="search_user-avatar" src={src} />
		<FlexBox column>
			<PrimaryLink to="#" className="search_user-card-name">
				{userName}
			</PrimaryLink>
			<TextBlock className="search_user-card-secondary-text">
				{lessons} Lessons
			</TextBlock>
			<TextBlock className="search_user-card-secondary-text language-text">
				{LANGUAGES[language]}
			</TextBlock>
		</FlexBox>
	</FlexBox>
);

export default UserCard;
