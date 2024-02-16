import { Category } from './../../categories/entity/category.entity';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne
  } from 'typeorm';

@Entity({ name: 'task' })
export class Task {
    
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  category_id: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'NOW()' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  archived_at?: Date;

  @ManyToOne(() => Category, (category) => category.tasks)
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category: Category;
}