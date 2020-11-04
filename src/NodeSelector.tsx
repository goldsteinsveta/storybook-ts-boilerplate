/* eslint-disable no-use-before-define */
import { Grid,Typography } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import InputBase from '@material-ui/core/InputBase';
import Popper from '@material-ui/core/Popper';
import { createStyles,fade, makeStyles, Theme  } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DoneIcon from '@material-ui/icons/Done';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Autocomplete, { AutocompleteCloseReason } from '@material-ui/lab/Autocomplete';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {},
		button: {
			width: '100%',
			textAlign: 'left',
		},
		popper: {
			width: '100%',
		},
		header: {
			paddingLeft: theme.spacing(2) + 'px !important',
			paddingRight: theme.spacing(2) + 'px !important',
			paddingTop: theme.spacing(2) + 'px !important',
		},
		inputBase: {
			width: '100%',
			paddingLeft: theme.spacing(2) + 'px !important',
			paddingRight: theme.spacing(2) + 'px !important',
			'& input': {
				borderRadius: 4,
				padding: theme.spacing(1),
				border: '1px solid',
				'&:focus': {
					boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
					borderColor: theme.palette.primary.main,
				},
			},
		},
		option: {
			padding: theme.spacing(2) + 'px !important',
			'&:hover': {
				backgroundColor: theme.palette.primary.main,
				color: theme.palette.common.white,
			},
		},
		text: {
			flexGrow: 1,
		},
	})
);

export default function NodeSelector() {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [value, setValue] = React.useState<LabelType>(labels[1]);

	const handleOpenDropdown = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (event: React.ChangeEvent<{}>, reason: AutocompleteCloseReason) => {
		if (reason === 'toggleInput') {
			return;
		}
		// setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	return (
		<>
			<ButtonBase
				disableRipple
				className={classes.button}
				onClick={handleOpenDropdown}
			>
				<Grid
					container
					spacing={1}
					alignItems='center'
					wrap='nowrap'
				>
					<Grid item>
						<FiberManualRecordIcon fontSize="small" color='primary'/>
					</Grid>
					<Grid item xs={12}>
						<Typography variant='h4'> {value.network} </Typography>
						<Typography variant='body2' color='textSecondary'>Node provider: {value.providerName} </Typography>
					</Grid>
					<Grid item>
						<ArrowDropDownIcon />
					</Grid>
				</Grid>
			</ButtonBase>

			<Popper
				open={open}
				anchorEl={anchorEl}
				placement="bottom-start"
				className={classes.popper}
			>
				<div className={classes.header}>
					<Typography variant='overline' color='textSecondary'>
						Select node provider
					</Typography>
				</div>

				<Autocomplete
					options={labels}
					getOptionLabel={(option) => option.providerName + option.network}
					open
					classes={{
						option: classes.option,
					}}

					onClose={handleClose}
					onChange={(event, newValue) => {
						if (newValue == null || newValue == value || typeof newValue == 'string') {
							return;
						}
						setValue(newValue);
					}}
					renderOption={(option) => (
						<Grid 
							container
							alignItems='center'
							wrap='nowrap'
						>
							<Grid item xs={12}>
								{option.providerName}
							</Grid>
							<Grid item>
								{ option == value && <DoneIcon/> }
							</Grid>
						</Grid>
					)}
					renderInput={(params) => (
						<InputBase
							ref={params.InputProps.ref}
							inputProps={params.inputProps}
							autoFocus
							className={classes.inputBase}
						/>
					)}

					groupBy={(option) => option.network}
				/>
			</Popper>
		</>
	);
}

interface LabelType {
  providerName: string;
  network?: string;
}

const labels = [
	{
		providerName: 'Parity',
		network: 'Westend',
	},
	{
		providerName: 'Parity',
		network: 'Kusama',
	},
	{
		providerName: 'Web3',
		network: 'Kusama',
	},
	{
		providerName: 'Parity',
		network: 'Polkadot',
	},
	{
		providerName: 'Web3',
		network: 'Polkadot',
	}
];
