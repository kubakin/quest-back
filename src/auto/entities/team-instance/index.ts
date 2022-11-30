import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Team } from '../team';
import { Game } from '../game';
import { TaskToInstance } from '../task/task-to-instance.entity';

@Entity()
export class TeamInstance {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ default: false })
  initialized: boolean;
  @ManyToOne((type) => Team)
  team: Team;
  @ManyToOne((type) => Game)
  game: Game;
  @OneToMany((type) => TaskToInstance, (task) => task.instance)
  tasks: TaskToInstance[];
  @Column({ default: 0 })
  score: number;
}
