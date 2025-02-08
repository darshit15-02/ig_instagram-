import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { IgRequest } from './lg.entity'; // Ensure this is the correct path to your entity file
import { IgController } from './Ig.controller';
import { IgService } from './Ig.service';

@Module({
  imports: [TypeOrmModule.forFeature([IgRequest])], // Register the entity with TypeOrmModule
  controllers: [IgController],
  providers: [IgService],
})
export class IgModule {}
