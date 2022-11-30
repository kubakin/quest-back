import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './index';
import { TeamInstance } from '../team-instance';

export class TaskToInstance {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne((type) => Task, { onDelete: 'CASCADE' })
  task: Task;
  @Column('uuid', { nullable: true })
  taskId: string;
  @ManyToOne((type) => TeamInstance, { onDelete: 'CASCADE' })
  instance: TeamInstance;
  @Column('uuid', { nullable: true })
  instanceId: string;
  @Column({ default: false })
  is_completed: boolean;
  @Column({ default: 0 })
  order: number;
}
