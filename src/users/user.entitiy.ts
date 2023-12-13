import {
  AfterRemove,
  AfterUpdate,
  AfterInsert,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted user with id', this.id);
  }
  @AfterUpdate()
  logUpdate() {
    console.log('updated', this.id);
  }
  @AfterRemove()
  logRemove() {
    console.log('removed user with id', this.id);
  }
}
