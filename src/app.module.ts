import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module.js';
import { AppController } from './app.controller.js';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
