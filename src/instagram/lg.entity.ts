import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('lg')
export class IgRequest {
    @PrimaryGeneratedColumn('uuid') // Changed ID type to UUID
    id: string; // UUID should be a string, not a number
  
    @Column()
    url: string; // Stores the URL of the media
  
    @Column({ nullable: true }) // Allows downloadPath to be null
    downloadPathURL: string; // Path where the file is saved
  
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) // Auto-set timestamp
    createdAt: Date; // Record creation timestamp
}