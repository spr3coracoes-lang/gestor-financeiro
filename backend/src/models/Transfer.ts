import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Account } from './Account';

@Entity('transfers')
export class Transfer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal', precision: 15, scale: 2 })
  amount: number; // Valor transferido

  @Column({ type: 'date' })
  transferDate: Date; // Data da transferência

  @Column({ nullable: true })
  referenceNumber: string; // Número de referência/comprovante

  @Column({ nullable: true })
  status: string; // 'pending', 'completed', 'cancelled'

  @Column({ type: 'text', nullable: true })
  description: string; // Descrição/motivo da transferência

  @Column({ type: 'text', nullable: true })
  notes: string; // Observações

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Conta de origem (sai dinheiro)
  @ManyToOne(() => Account, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'fromAccountId' })
  fromAccount: Account;

  // Conta de destino (entra dinheiro)
  @ManyToOne(() => Account, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'toAccountId' })
  toAccount: Account;
}
