import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule, DbModuleOptions } from './db.module';

interface GenericModuleOptions {
  db: DbModuleOptions;
}

@Module({})
export class GenericModule {
  static forRoot(options: GenericModuleOptions): DynamicModule {
    return {
      module: GenericModule,
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: process.env.DEV === 'true' ? ['.env.dev'] : [],
          ignoreEnvFile: process.env.DEV !== 'true',
        }),
        DbModule.forRoot(options.db),
      ],
      exports: [DbModule],
    };
  }
}
