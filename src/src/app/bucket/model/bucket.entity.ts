import { 
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Bucket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
  })
  bucket;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
