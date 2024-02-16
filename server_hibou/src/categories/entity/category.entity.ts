import { Task } from './../../tasks/entity/task.entity';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToMany
  } from 'typeorm';

@Entity({ name: 'category' })
export class Category {
    
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'NOW()' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  archived_at?: Date;

  @OneToMany(() => Task, (task) => task.category)
  tasks: Task[];
}