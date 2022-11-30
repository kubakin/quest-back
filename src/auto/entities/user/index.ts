import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Team } from '../team';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne((type) => Team)
  team: Team;
  @Column({ nullable: false })
  name: string;
}
