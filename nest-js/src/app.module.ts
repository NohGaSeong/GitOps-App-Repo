import { Module } from '@nestjs/common';
import { MoviesController } from './movie/movies.controller';
import { MoviesService } from './movie/movies.service'

@Module({ 
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
