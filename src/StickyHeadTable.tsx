import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';

import AccountCard from './AccountCard';
import ExtrinsicStatus from './ExtrinsicStatus';
import ExtrinsicValue from './ExtrinsicValue';

interface Column {
  id: 'withWho' | 'extrinsic' | 'value' | 'status';
  label: string;
  minWidth?: number;
  maxWidth?: number;
  width?: number;
  align?: 'right';
}

const columns: Column[] = [
	{ id: 'withWho', label: '', width: 160 },
	{ id: 'extrinsic', label: 'Extrinsic', width: 120 },
	{ id: 'value', label: 'Value', minWidth: 170, align: 'right' },
	{ id: 'status', label: 'Status', width: 40, align: 'right' }
];

interface Data {
  withWho: string;
  extrinsic: string;
  value: string | number;
  status: 0 | 1 | 2 | 3;
}

function createData(withWho: string, extrinsic: string, value: string |number, status: number): Data {
	return { withWho, extrinsic, value, status };
}

const rows = [
	createData('F7BeW4g5ViG8xGJQAzguGPxiX9QNdoPNc3YqF1bV8d9XkVV', 'balances.transfer', -132417.1354, 0),
	createData('Gt6HqWBhdu4Sy1u8ASTbS1qf2Ac5gwdegwr8tWN8saMxPt5', 'balances.transfer', 140350.0365, 1),
	createData('Czugcaso8uTUyA5ptvpZp1jthoWSESrR6aFPCh7DnswH7TQ', 'balances.transfer', 6048.3973, 2),
	createData('Eodfj4xjkw8ZFLLSS5RfP6vCMw8aM6qfM7BfeQMf6ivFWHy', 'balances.transfer', 32716.7434, 0),
	createData('GxxV8DAcHCSzBbspu83AK9UoTYxzSQ6VVfdopjnkXfPtE8d', 'claims.attest', '[...]', 1),
	createData('F7Wa1su7NRSr6LWuhPWdXcQALDyzm8Vmev7WtV5jVPtJELs', 'democracy.vote', 2547.5400, 1),
	createData('FApDgUYw47GJMfwFaa7xPeR5FGtMkPWSoozW7n5tTPWwrNv', 'democracy.vote', 8301.9200, 1),
	createData('GLVeryFRbg5hEKvQZcAnLvXZEXhiYaBjzSDwrXBXrfPF7wj', 'balances.transfer', 485.7000, 1),
	createData('EK8veMNH6sVtvhSRo4q1ZRh6huCDm69gxK4eN5MFoZzo3G7', 'balances.transfer', 12657.7691, 1),
	createData('DksmawBXTCnFQhVzsVqFhLDRA67S8SJNLADT9aJ36Lrb7kT', 'balances.transfer', 12631.7000, 1),
	createData('H9eSvWe34vQDJAWckeTHWSqSChRat8bgKHG39GC1fjvEm7y', 'balances.transfer', 6702.2000, 1),
	createData('EK8veMNH6sVtvhSRo4q1ZRh6huCDm69gxK4eN5MFoZzo3G7', 'balances.transfer', 6754.5757, 1),
	createData('J9nD3s7zssCX7bion1xctAF6xcVexcpy2uwy4jTm9JL8yuK', 'balances.transfer', 14679.3744, 1),
	createData('GxxV8DAcHCSzBbspu83AK9UoTYxzSQ6VVfdopjnkXfPtE8d', 'balances.transfer', 20096.2417, 1),
	createData('J9nD3s7zssCX7bion1xctAF6xcVexcpy2uwy4jTm9JL8yuK', 'balances.transfer', 21014.7125, 1)
];

const useStyles = makeStyles({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: 600,
	},
});

export default function StickyHeadTable() {
	const classes = useStyles();
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper className={classes.root}>
			<TableContainer className={classes.container}>
				<Table size="small" stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ width: column.width, minWidth: column.minWidth, maxWidth: column.maxWidth }}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => {
							return (
								<TableRow hover role="checkbox" tabIndex={-1} key={row.extrinsic + i}>
									{columns.map((column) => {
										const value = row[column.id];
										return (
											<TableCell key={column.id} align={column.align}>
												{column.id === 'withWho' &&
                          <AccountCard
                          	account={{ address: value }}
                          />
												}

												{column.id === 'extrinsic' && value}
												{column.id === 'value' &&
                          <ExtrinsicValue value={value} />
												}
												{column.id === 'status' && <ExtrinsicStatus status={value} />}
											</TableCell>
										);
									})}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}
