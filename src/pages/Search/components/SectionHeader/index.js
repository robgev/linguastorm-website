import React from 'react';
import {
	Stars,
	FlexBox,
	Container,
	HorizontalDivider,
} from 'components/atoms';
import {
	LanguageChip
} from 'components/molecules';

import {
	SectionTitle,
	SectionSubtitle,
} from '../../components';
import './styles.scss';

const SectionHeader = ({
	title,
	stars,
	subTitle,
	language,
}) => (
	<>
		<FlexBox align className="search_section-header_container">
			<Container className="search_section-header_title-container">
				<SectionTitle>{title}</SectionTitle>
				{ subTitle &&
					<SectionSubtitle>{subTitle}</SectionSubtitle>
				}
			</Container>
			{ language &&
				<LanguageChip language={language} />
			}
			{ stars &&
				<Stars rating={stars} />
			}
		</FlexBox>
		<HorizontalDivider className="search_divider" />
	</>
);

export default SectionHeader;
