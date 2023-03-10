import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Chicken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  birthday: Date;

  @Column()
  weight: number;

  @Column()
  steps: number;

  @Column()
  isRunning: boolean;
}
