import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import { UserModule } from './user/user.module';
import { AlbumModule } from './album/album.module';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot({
    cache: true,
    isGlobal: true,
  }),MongooseModule.forRoot(process.env.DATABASE_URL), UserModule, AlbumModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
