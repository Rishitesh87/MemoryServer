import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import  { Player, Game} from './entities';


function identicalSquares(board) {
  const openedSquares=board.filter((Square) => {
      Square.value === 2
    })

  if (openedSquares[0].name === openedSquares[1].name) {
     return true;
   } else
     return false;
   }



function totalOpenedSquares (board){
  return board
    .map((Square)=> {
      return Square.value
    })
    .filter(value => value === 2)
    .length

}

export const movesBoard  = (board, player) => {
  if (totalOpenedSquares(board)===2) {
    if (identicalSquares){
      //Change Square value to 0 and update player pairs
      board.map((Square)=> {
      switch (Square.value){
        case 2: 0;
        case 1: 1;
        case 0: 0
      }
      return player.pair ++
    })}
    else {
      board.map((Square)=> {
      switch (Square.value){
        case 2: 0;
        case 1: 1;
        case 0: 0
      }
      return (game.turn === 1 ? 2: 1)
  })
}
}}


export const calculateWinner = () => {
  if (player.pairs > 6)
  return player.token
}


export const finished = (board) : boolean =>
  board
    .map((Square)=> {
      return Square.value
    })
    .filter(value => value === 0)
    .length === 0
