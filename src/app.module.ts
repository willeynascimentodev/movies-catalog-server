import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './movies/movies.modules';
import config from './config/keys'

@Module({
  imports: [HttpModule, MoviesModule, MongooseModule.forRoot(config.mongoUri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

