import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller.js';
import { MoviesService } from './movies/movies.service.js';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
