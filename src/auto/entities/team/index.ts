import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TeamInstance } from '../team-instance';
import { Expose } from 'class-transformer';

@Entity()
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @OneToMany((type) => TeamInstance, (instance) => instance.team, {
    eager: true,
  })
  instances: TeamInstance[];

  @Expose()
  get totalScore() {
    return this.instances.reduce((partialSum, a) => partialSum + a.score, 0);
  }
}
