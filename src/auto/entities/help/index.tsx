import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Help {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  text: string;
  @Column({ default: 3 })
  price: number;
}
