import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfig from './../../typeorm.config';


export interface IAppConfig {
    name: string;
    version: string;
    port: number;
    uptime: () => number;
  }
  
const config: IAppConfig = {
    name: process.env.npm_package_name,
    version: process.env.npm_package_version,
    port: parseInt(process.env.PORT) || 8080,
    uptime: process.uptime,
};

export const appConfig = () => ({
    app: config,
});


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
    TypeOrmModule.forRoot(typeormConfig),
  ],
  controllers: [],
  providers: [],
})
export class ConfigOrmModule {}


  
