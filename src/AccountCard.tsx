import { Grid,Typography } from '@material-ui/core';
import Identicon from '@polkadot/react-identicon';
import React from 'react';
import styled from 'styled-components';

export interface Account {
  address: string;
  name: string;
}

interface Props {
  account: Account;
  addressFormat?: 'Full' | 'Short';
  size?: 'Big' | 'Small';
}

const AccountCard: React.FunctionComponent<Props> = ({ account, addressFormat, size }: Props) => (
	<Grid container spacing={1} alignItems='center'>
		<Grid item>
			<Identicon
				size={size === 'Big' ? 40 : 32}
				theme='polkadot'
				value={account.address}
			/>
		</Grid>
		<Grid item>
			{account.name && account.name !== '' && account.name}
			<Typography variant="subtitle1">
				{addressFormat == 'Full'
					? account.address
					: account.address.slice(0,4) + '...' + account.address.slice(account.address.length - 4, account.address.length)
				}
			</Typography>
		</Grid>
	</Grid>
);

export default React.memo(styled(AccountCard)``);