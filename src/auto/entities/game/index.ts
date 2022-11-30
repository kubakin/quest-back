import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { GameDuration } from './object-values/game-duration';

@Entity()
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column(() => GameDuration)
  duration: GameDuration;
  @Column({ default: false })
  mixedTask: boolean;
}
