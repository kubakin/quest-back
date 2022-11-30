import { Module } from '@nestjs/common';
import { Game } from './auto/entities/game';
import { GenericModule } from './infra/generic.module';

@Module({
  imports: [
    GenericModule.forRoot({
      db: {
        entities: [Game],
        prefix: 'quest',
        synchronize: true,
        repositories: [],
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
