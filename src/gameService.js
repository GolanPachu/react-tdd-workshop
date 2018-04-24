export const gameStatus = board => {
  const isWin = symbol => board[0].every(cell => cell === symbol);
  if (isWin('X')) {
    return 'X';
  }
  if (isWin('O')) {
    return 'O';
  }
};

export const lineStatus = line => {
	const isWin = symbol => line.every(cell => cell === symbol);

	if (isWin('X')) {
    return 'X';
  } else if (isWin('O')) {
		return 'O';
	}

	return undefined;
};

export const rowsStatus = board => {
	const isWin = symbol => board.some(row => lineStatus(row) === symbol);

	if (isWin('X')) {
		return 'X';
	} else if (isWin('O')) {
		return 'O';
	}

	return undefined;
};

export const colsStatus = board => {
	const colsAsRows = board[0].map((col, i) => board.map(row => row[i]));

	const isWin = symbol => colsAsRows.some(col => lineStatus(col) === symbol);

	if (isWin('X')) {
		return 'X';
	} else if (isWin('O')) {
		return 'O';
	}

	return undefined;
}

export const mainDiagonalStatus = board => {
	const diagonalAsRow = board.map((row, rowI) => row.filter((col, colI) => rowI === colI)[0]);

	return lineStatus(diagonalAsRow);
}

export const subDiagonalStatus = board => {
	const diagonalAsRow = board.map((row, rowI) => row.filter((col, colI) => rowI === (board[rowI].length - 1 - colI))[0]);

	return lineStatus(diagonalAsRow);
}
