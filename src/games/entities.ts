import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Index, OneToMany, ManyToOne, ManyToMany,JoinTable } from 'typeorm'
import User from '../users/entity'

export type Token= 1|2
type Status = 'pending' | 'started' | 'finished'
type Value= 1 | 2 | 0


@Entity()
export class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @OneToMany(_ => Square, square => square.game, {eager:true})
  board: Square[]

  // @ManyToMany(_ => Square, {eager:true})
  // @JoinTable()
  // board:Square[]

  @Column('int',{nullable:true})
  winner: Token

  @Column('int',{default:1})
  turn: Token

  @Column('text', {default: 'pending'})
  status: Status

  // this is a relation, read more about them here:
  // http://typeorm.io/#/many-to-one-one-to-many-relations
  @OneToMany(_ => Player, player => player.game, {eager:true})
  players: Player[]
}

@Entity()
@Index(['game', 'user', 'pairs', 'token'], {unique:true})
export class Player extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(_ => User, user => user.players)
  user: User

  @ManyToOne(_ => Game, game => game.players)
  game: Game

  @Column()
  userId: number

  @Column({default:0})
  pairs: number

  @Column()
  token: number

}

@Entity()
export class Square extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text')
  name: string

  @Column({default:1})
  value: Value

  // this is a relation, read more about them here:
  // http://typeorm.io/#/many-to-one-one-to-many-relations
  @ManyToOne(_ => Game, game => game.board)
  game: Game
}
