import { Module } from '@nestjs/common';
import { UsersController } from './api/users.controller';
import { UsersService } from './application/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './domain/entity/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
