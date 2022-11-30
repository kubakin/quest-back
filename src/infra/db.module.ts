import { DynamicModule, Module, Type } from '@nestjs/common';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export interface DbModuleOptions {
  prefix: string;
  entities: Type[];
  repositories: any[];
  synchronize?: boolean;
  logging?: boolean;
}

@Module({})
export class DbModule {
  static forRoot(options: DbModuleOptions): DynamicModule {
    return {
      module: DbModule,
      imports: [
        TypeOrmModule.forRootAsync({
          inject: [ConfigService],
          name: options.prefix,
          useFactory: async (configService: ConfigService) => ({
            type: 'postgres',
            host: configService.get<string>('DB_HOST'),
            port: configService.get<number>('DB_PORT'),
            username: 'app',
            password: 'secret',
            database: 'app',
            synchronize: options.synchronize,
            logging: options.logging,
            namingStrategy: new SnakeNamingStrategy(),
            entities: [...options.entities],
            entityPrefix: `${options.prefix}_`,
          }),
        }),
        TypeOrmModule.forFeature([...options.repositories], options.prefix),
      ],
      providers: options.repositories.map((it) => ({
        provide: it,
        useFactory: (it) => it,
        inject: [getRepositoryToken(it, options.prefix)],
      })),
      exports: [TypeOrmModule, ...options.repositories],
    };
  }
}
