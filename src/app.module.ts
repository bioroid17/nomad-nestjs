import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller.js';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
