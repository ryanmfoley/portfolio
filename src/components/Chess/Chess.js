import React from 'react'
import { Board, chessBoard } from './board.js'
import { placePiecesOnBoard } from './pieces.js'
import { whitePlayer, blackPlayer } from './players.js'
import './Chess.css'

const Chess = () => {
	let startGame = false

	let squareSelected = false

	// Start Button
	const startGameButton = document.querySelector('#start-game')

	// Grab squares
	const squares = document.querySelector('.board')

	// Grab check display
	const check = document.querySelector('.check-text')

	let turn = 'white'
	let selectedPiece
	let landingSquare
	let validMove

	// Listen for Start-Game event
	startGameButton.addEventListener('click', () => {
		chessBoard.clearBoard()
		placePiecesOnBoard(chessBoard)
		chessBoard.displayPieces()

		startGame = true

		// Get position of kings on board
		whitePlayer.getKingsPosition()
		blackPlayer.getKingsPosition()
	})

	// Listen for cell clicks
	squares.addEventListener('click', (event) => {
		const player = turn === 'white' ? whitePlayer : blackPlayer
		const opponent = turn === 'white' ? blackPlayer : whitePlayer
		Board.player = turn === 'white' ? whitePlayer : blackPlayer
		Board.opponent = turn === 'white' ? blackPlayer : whitePlayer
		player.chessBoard = chessBoard

		if (startGame) {
			if (!selectedPiece) {
				const selectedSquare = chessBoard.selectSquare(event.path)

				// Check if a piece was selected and it's their turn
				if (selectedSquare.color === turn) {
					selectedPiece = selectedSquare.piece
				}
			} else if (!validMove) {
				landingSquare = chessBoard.selectSquare(event.path)

				// Check the timing on this code
				validMove = selectedPiece.checkForValidMove(
					player,
					chessBoard,
					landingSquare
				)

				// Get available moves
				// player.getAvailableMoves(chessBoard)

				if (validMove) {
					// Check if king is in check

					// Mark enemy squares
					chessBoard.markEnemySquares(whitePlayer, blackPlayer)

					selectedPiece.movePiece(chessBoard.board, landingSquare, opponent)
					chessBoard.displayPieces()

					// Mark enemy squares
					chessBoard.markEnemySquares(whitePlayer, blackPlayer)

					player.isKingInCheck(chessBoard)
					opponent.isKingInCheck(chessBoard)

					if (player.inCheck || opponent.inCheck) {
						check.innerHTML = 'CHECK!'
					} else {
						check.innerHTML = ''
					}

					console.log(
						'player',
						player.checkMate,
						'opponent',
						opponent.checkMate
					)

					// Reset turn variables
					selectedPiece = false
					validMove = false
					turn = turn === 'white' ? 'black' : 'white'
				} else selectedPiece = null
			}
		}
	})

	return (
		<div class='container'>
			<header>
				<h1>Chess</h1>
				<div id='start-game'></div>
			</header>
			<div class='board'>
				<div class='row-0 col-0'></div>
				<div class='row-0 col-1'></div>
				<div class='row-0 col-2'></div>
				<div class='row-0 col-3'></div>
				<div class='row-0 col-4'></div>
				<div class='row-0 col-5'></div>
				<div class='row-0 col-6'></div>
				<div class='row-0 col-7'></div>

				<div class='row-1 col-0'></div>
				<div class='row-1 col-1'></div>
				<div class='row-1 col-2'></div>
				<div class='row-1 col-3'></div>
				<div class='row-1 col-4'></div>
				<div class='row-1 col-5'></div>
				<div class='row-1 col-6'></div>
				<div class='row-1 col-7'></div>

				<div class='row-2 col-0'></div>
				<div class='row-2 col-1'></div>
				<div class='row-2 col-2'></div>
				<div class='row-2 col-3'></div>
				<div class='row-2 col-4'></div>
				<div class='row-2 col-5'></div>
				<div class='row-2 col-6'></div>
				<div class='row-2 col-7'></div>

				<div class='row-3 col-0'></div>
				<div class='row-3 col-1'></div>
				<div class='row-3 col-2'></div>
				<div class='row-3 col-3'></div>
				<div class='row-3 col-4'></div>
				<div class='row-3 col-5'></div>
				<div class='row-3 col-6'></div>
				<div class='row-3 col-7'></div>

				<div class='row-4 col-0'></div>
				<div class='row-4 col-1'></div>
				<div class='row-4 col-2'></div>
				<div class='row-4 col-3'></div>
				<div class='row-4 col-4'></div>
				<div class='row-4 col-5'></div>
				<div class='row-4 col-6'></div>
				<div class='row-4 col-7'></div>

				<div class='row-5 col-0'></div>
				<div class='row-5 col-1'></div>
				<div class='row-5 col-2'></div>
				<div class='row-5 col-3'></div>
				<div class='row-5 col-4'></div>
				<div class='row-5 col-5'></div>
				<div class='row-5 col-6'></div>
				<div class='row-5 col-7'></div>

				<div class='row-6 col-0'></div>
				<div class='row-6 col-1'></div>
				<div class='row-6 col-2'></div>
				<div class='row-6 col-3'></div>
				<div class='row-6 col-4'></div>
				<div class='row-6 col-5'></div>
				<div class='row-6 col-6'></div>
				<div class='row-6 col-7'></div>

				<div class='row-7 col-0'></div>
				<div class='row-7 col-1'></div>
				<div class='row-7 col-2'></div>
				<div class='row-7 col-3'></div>
				<div class='row-7 col-4'></div>
				<div class='row-7 col-5'></div>
				<div class='row-7 col-6'></div>
				<div class='row-7 col-7'></div>
			</div>
			<h2 class='check-text'></h2>
		</div>
	)
}

export default Chess
