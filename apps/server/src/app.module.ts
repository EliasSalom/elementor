import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import { UserModule } from './user/user.module';
import { AlbumModule } from './album/album.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://test:123@cluster0.id10m.mongodb.net/?retryWrites=true&w=majority'), UserModule, AlbumModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
