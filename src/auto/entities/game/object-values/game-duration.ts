import { Column } from 'typeorm';

export class GameDuration {
  @Column()
  start: Date;
  @Column()
  end: Date;
}
