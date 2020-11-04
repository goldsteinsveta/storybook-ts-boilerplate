import { IconButton, Typography } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CachedIcon from '@material-ui/icons/Cached';
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';
import React from 'react';

interface Props {
  status: 0 | 1 | 2;
}

const useStyles = makeStyles((theme: Theme) => ({
	popover: {
		pointerEvents: 'none',
	},
	paper: {
		padding: theme.spacing(1),
		marginTop: theme.spacing(-0.5),
	},
})
);

const ExtrinsicStatus: React.FunctionComponent<Props> = ({ status }: Props) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

	const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	return (
		<>
			<IconButton
				onMouseEnter={handlePopoverOpen}
				onMouseLeave={handlePopoverClose}
				aria-owns={open ? 'mouse-over-popover' : undefined}
			>
				{status === 0 && <CachedIcon />}
				{status === 1 && <CheckIcon color='primary' />}
				{status === 2 && <ErrorIcon color='error' />}

			</IconButton>
			<Popover
				elevation={2}
				transitionDuration={0}
				id="mouse-over-popover"
				className={classes.popover}
				classes={{
					paper: classes.paper,
				}}
				open={open}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				onClose={handlePopoverClose}
				disableRestoreFocus
			>
				<Typography variant='body2'>
          The content of the Popover, link to BlockExplorers
				</Typography>
			</Popover>
		</>
	);
};

export default React.memo(ExtrinsicStatus);
