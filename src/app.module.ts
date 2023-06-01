import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: `environment/.${process.env.NODE_ENV}.env`,
		}),
	],
	providers: [PrismaService],
})
export class AppModule {}
