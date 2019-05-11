import React from 'react';
import { Query as RAQuery } from 'react-apollo';
import { TextBlock } from 'components/atoms';
import { EmptyCard } from 'components/molecules';

const Query = ({ children, ...props }) => {
	return (
		<RAQuery {...props}>
			{({ data, loading, error }) => {
				if (loading) return <EmptyCard loading />;
				if (error) return <TextBlock>Something went wrong</TextBlock>;

				return (
          <>
            {children(data)}
          </>
				);
			}}
		</RAQuery>
	);
};

export default Query;
