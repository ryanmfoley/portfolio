import { Board } from './board.js'
import { whitePieces, blackPieces } from './pieces.js'

class Player {
	constructor(color, pieces) {
		this.color = color
		this.pieces = pieces
		this.inCheck = false
		this.checkMate = false
	}

	get board() {
		return Board.board
	}

	get player() {
		return Board.player
	}

	get opponent() {
		return Board.opponent
	}

	// markEnemySquares(whitePlayer, blackPlayer) {
	// 	// Clear enemy squares
	// 	whitePlayer.pieces.forEach((piece) => piece.clearTargetSquares())
	// 	blackPlayer.pieces.forEach((piece) => piece.clearTargetSquares())

	// 	// Mark enemy squares
	// 	whitePlayer.pieces.forEach((piece) =>
	// 		piece.markEnemySquares(this.board, whitePlayer, blackPlayer)
	// 	)
	// 	blackPlayer.pieces.forEach((piece) =>
	// 		piece.markEnemySquares(this.board, whitePlayer, blackPlayer)
	// 	)

	// 	// Assign marked squares to board
	// 	this.whiteSquares = whitePlayer.pieces.map((piece) => piece.targets)
	// 	this.blackSquares = blackPlayer.pieces.map((piece) => piece.targets)
	// 	Board.whiteSquares = whitePlayer.pieces.map((piece) => piece.targets)
	// 	Board.blackSquares = blackPlayer.pieces.map((piece) => piece.targets)
	// }

	getAvailableMoves(chessBoard) {
		// Create a copy of board and player for testing moves for check
		// const board = [...this.chessBoard.board]
		let playerCopy = Object.assign(
			Object.create(Object.getPrototypeOf(this.player)),
			this.player
		)

		let opponentCopy = Object.assign(
			Object.create(Object.getPrototypeOf(this.opponent)),
			this.opponent
		)

		const whitePlayer = playerCopy.color === 'white' ? playerCopy : opponentCopy
		const blackPlayer = playerCopy.color === 'black' ? playerCopy : opponentCopy

		this.checkMate = true

		playerCopy.pieces.forEach((piece) => {
			piece.targets.forEach((target) => {
				let chessBoardCopy = Object.assign(
					Object.create(Object.getPrototypeOf(chessBoard)),
					chessBoard
				)
				// chessBoardCopy.board = [
				// 	[...chessBoard.board[0]],
				// 	[...chessBoard.board[1]],
				// 	[...chessBoard.board[2]],
				// 	[...chessBoard.board[3]],
				// 	[...chessBoard.board[4]],
				// 	[...chessBoard.board[5]],
				// 	[...chessBoard.board[6]],
				// 	[...chessBoard.board[7]],
				// ]
				// const board = [...chessBoardCopy.board]

				const validMove = piece.checkForValidMove(
					playerCopy,
					chessBoardCopy,
					target
				)
				// console.log(chessBoardCopy.board)
				if (validMove) {
					piece.movePiece(chessBoardCopy.board, target, opponentCopy)
					chessBoardCopy.markEnemySquares(whitePlayer, blackPlayer)
				}
				// if (!player.isKingInCheck(board)) {
				// 	this.checkMate = false
				// } else this.checkMate = true
			})
		})
		// selectedPiece.movePiece(landingSquare, opponent)

		// this.player.pieces.forEach((piece) => console.log(piece.currentSquare))

		// console.log('player', this.player)
		// console.log('opponent', this.opponent)
	}

	removePieceFromGame(enemyPiece) {
		this.pieces = this.pieces.filter((piece) => piece !== enemyPiece)
	}

	getKingsPosition() {
		this.kingsPosition = this.pieces.find((piece) => piece.name === 'king')
	}

	isKingInCheck(chessBoard) {
		this.getKingsPosition()

		let enemySquares = []

		enemySquares =
			this.color === 'white'
				? chessBoard.blackSquares.flat()
				: chessBoard.whiteSquares.flat()

		if (
			this.kingsPosition &&
			enemySquares.find(
				(square) =>
					this.kingsPosition.row === square.row &&
					this.kingsPosition.col === square.col
			)
		) {
			this.inCheck = true
			return true
		} else {
			this.inCheck = false
			return false
		}
	}

	// escapeCheckMoves() {
	// 	console.log(chessBoard)
	// }
}

const whitePlayer = new Player('white', whitePieces)
const blackPlayer = new Player('black', blackPieces)

export { whitePlayer, blackPlayer }
