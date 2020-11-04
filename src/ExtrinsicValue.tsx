import { Box, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

interface Props {
  size?: 'Small' | 'Big';
  value?: number | string;
}
interface StyleProps {
  colored?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'inline-flex',
		borderRadius: 4,
		paddingLeft: 4,
		paddingRight: 4,
		paddingTop: 2,
		paddingBottom: 2,
		backgroundColor: (props: StyleProps) =>
			props.colored
				? theme.palette.primary.main
				: '',
		color: (props: StyleProps) =>
			props.colored
				? theme.palette.common.white
				: theme.palette.common.black,
	},
}));

const ExtrinsicValue: React.FunctionComponent<Props> = ({ value, size }: Props) => {
	const colored = typeof value == 'number' && value >= 0 ? true : false;
	const classes = useStyles({ colored: colored });

	const TypographyVariant = size == 'Big' ? 'subtitle1' : 'subtitle2';

	return  (
		<Box component='span' className={classes.root}>
			<Typography variant={TypographyVariant}>{value}</Typography>
		</Box>
	);
};

export default React.memo(ExtrinsicValue);
