import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Game } from '../game';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ nullable: true })
  text: string;
  @Column('simple-array')
  possible_answer: string[];
  @ManyToOne((type) => Game)
  game: Game;
  @Column({ nullable: false })
  gameId: string;

  static create(text: string, possible_answer: string[], gameId: string) {
    const task = new Task();
    task.text = text;
    task.possible_answer = possible_answer.map((answer) =>
      answer.trim().toLowerCase(),
    );
    task.gameId = gameId;
  }

  answer(answer: string) {
    if (this.possible_answer.includes(answer)) return 'ok';
    return 'bal';
  }
}
