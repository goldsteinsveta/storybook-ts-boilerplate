/* eslint-disable no-use-before-define */
import ButtonBase from '@material-ui/core/ButtonBase';
import InputBase from '@material-ui/core/InputBase';
import Popper from '@material-ui/core/Popper';
import { createStyles,fade, makeStyles, Theme  } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DoneIcon from '@material-ui/icons/Done';
import Autocomplete, { AutocompleteCloseReason } from '@material-ui/lab/Autocomplete';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {},
		button: {
			width: '100%',
			textAlign: 'left',
			'& span': {
				width: '100%',
			},
		},
		popper: {
			width: '100%',
			backgroundColor: theme.palette.common.white,
		},
		header: {
			padding: theme.spacing(1),
		},
		inputBase: {
			padding: theme.spacing(1),
			width: '100%',
			'& input': {
				borderRadius: 4,
				backgroundColor: theme.palette.common.white,
				padding: theme.spacing(1),
				border: '1px solid',
				'&:focus': {
					boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
					borderColor: theme.palette.primary.main,
				},
			},
		},
		option: {
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
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	return (
		<>
			<ButtonBase
				disableRipple
				className={classes.button}
				onClick={handleOpenDropdown}
			>
				<span>
					{value.network}
					<br/>
					{value.providerName}
				</span>
				<ArrowDropDownIcon />
			</ButtonBase>

			<Popper
				open={open}
				anchorEl={anchorEl}

				placement="bottom-start"
				className={classes.popper}
			>
				<div className={classes.header}>Select node provider</div>

				<Autocomplete
					options={labels}
					getOptionLabel={(option) => option.providerName + option.network}
					open
					classes={{
						option: classes.option,
					}}

					onClose={handleClose}
					onChange={(event, newValue) => {
						if (newValue == null || newValue == value) {
							return;
						}
						setValue(newValue);
					}}

					renderOption={(option) => (
						<>
							<div className={classes.text}>
								{option.providerName}
							</div>
							{ option == value && <DoneIcon/> }
						</>
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
