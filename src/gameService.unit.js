const { gameStatus, lineStatus, rowsStatus, colsStatus, mainDiagonalStatus, subDiagonalStatus } = require('./gameService');

describe('gameStatus', () => {
	it('X should win', () => {

	})
});

describe('lineStatus', () => {
	it('X should win', () => {
		const row = ['X', 'X', 'X'];

		const actual = lineStatus(row);
		const expected = 'X';

		expect(actual).toEqual(expected);
	});

	it('O should win', () => {
		const row = ['O', 'O', 'O'];

		const actual = lineStatus(row);
		const expected = 'O';

		expect(actual).toEqual(expected);
	});

	it('No one wins', () => {
		const row = ['X', 'O', 'X'];

		const actual = lineStatus(row);
		const expected = undefined;

		expect(actual).toEqual(expected);
	})
});

const rowSpec = (index, symbol) => it(`${symbol} should win on ${index} row`, () => {
	const board = [['', '', ''], ['', '', ''], ['', '', '']];
	board[index] = board[index].map(x => symbol);

	const actual = rowsStatus(board);
	const expected = symbol;

	expect(actual).toEqual(expected);
});

describe('rowsStatus', () => {
	rowSpec(0, 'X');
	rowSpec(1, 'X');
	rowSpec(2, 'X');
	rowSpec(0, 'O');
	rowSpec(1, 'O');
	rowSpec(2, 'O');

	it('No one wins', () => {
		const board = [['O', 'X', ''], ['X', '', ''], ['X', 'O', 'X']];

		const actual = rowsStatus(board);
		const expected = undefined;

		expect(actual).toEqual(expected);
	});
});

const colSpec = (index, symbol) => it(`${symbol} should win on ${index} col`, () => {
	let board = [['', '', ''], ['', '', ''], ['', '', '']];


	board = board.map(row => row.map((col, i) => i === index ? symbol : col));

	const actual = colsStatus(board);
	const expected = symbol;

	expect(actual).toEqual(expected);
});

describe('colsStatus', () => {
	colSpec(0, 'X');
	colSpec(1, 'X');
	colSpec(2, 'X');
	colSpec(0, 'O');
	colSpec(1, 'O');
	colSpec(2, 'O');

	it('No one wins', () => {
		const board = [['O', 'X', ''], ['X', '', ''], ['X', 'O', 'X']];

		const actual = colsStatus(board);
		const expected = undefined;

		expect(actual).toEqual(expected);
	});
});

describe('mainDiagonalStatus', () => {
	it('X should win', () => {
		const board = [['X', '', ''], ['', 'X', ''], ['', '', 'X']];

		const actual = mainDiagonalStatus(board);
		const expected = 'X';

		expect(actual).toEqual(expected);
	});

	it('O should win', () => {
		const board = [['O', '', ''], ['', 'O', ''], ['', '', 'O']];

		const actual = mainDiagonalStatus(board);
		const expected = 'O';

		expect(actual).toEqual(expected);
	});

	it('No one wins', () => {
		const board = [['X', '', ''], ['', 'O', ''], ['', '', 'O']];

		const actual = mainDiagonalStatus(board);
		const expected = undefined;

		expect(actual).toEqual(expected);
	});
});

describe('subDiagonalStatus', () => {
	it('X should win', () => {
		const board = [['', '', 'X'], ['', 'X', ''], ['X', '', '']];

		const actual = subDiagonalStatus(board);
		const expected = 'X';

		expect(actual).toEqual(expected);
	});

	it('O should win', () => {
		const board = [['', '', 'O'], ['', 'O', ''], ['O', '', '']];

		const actual = subDiagonalStatus(board);
		const expected = 'O';

		expect(actual).toEqual(expected);
	});

	it('No one wins', () => {
		const board = [['', '', 'O'], ['', 'O', ''], ['X', '', '']];

		const actual = subDiagonalStatus(board);
		const expected = undefined;

		expect(actual).toEqual(expected);
	});
});
