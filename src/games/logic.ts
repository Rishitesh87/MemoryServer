import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { board} from './entities';


export const identicalSquares= (board)=> {
  const openedSquares=board.filter((Square) => {
      Square.value === 2
    })

  if (openedSquares[0].name === openedSquares[1].name) {
     return true;
   } else {
     return false;
   }
}


function totalOpenedSquares (board){
  return board
    .map((Square)=> {
      return Square.value
    })
    .filter(value => value === 2)
    .length

}

export const check = () => {
  if (totalOpenedSquares(board)===2) {
    if (identicalSquares){
      //Change Square value to
      board.filter
    }
    else {
      //Change Square values to default
    }
  }

export const finished = (board) : boolean =>
  board
    .map((Square)=> {
      return Square.value
    })
    .filter(value => value === 0)
    .length === 0
