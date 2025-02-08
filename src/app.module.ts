// import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';
// import { IgModule } from './instagram/Ig.module';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true, // Makes the configuration globally available
//     }),
//     MongooseModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: async (configService: ConfigService) => ({
//         uri: configService.get<string>('MONGO_URI'),
//         // useNewUrlParser: true,
//         // useUnifiedTopology: true,
//       }),
//       inject: [ConfigService],
//     }),
    
//     IgModule,
//   ],
// })
// export class AppModule {}
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IgModule } from './instagram/Ig.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mongodb', // Replace with your database type, e.g., 'mysql', 'postgres'
        url: configService.get<string>('MONGO_URI'), // Ensure this is correctly set
        autoLoadEntities: true, // Automatically load entities
        synchronize: true, // Set to false in production
      }),
      inject: [ConfigService],
    }),
    IgModule,
  ],
})
export class AppModule {}