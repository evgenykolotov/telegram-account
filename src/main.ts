import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { getRMQConfig } from '@config/rmq.config';
import { PrismaService } from '../prisma/prisma.service';
import { MicroserviceOptions } from '@nestjs/microservices';

/** Создание микросервиса Account */
async function bootstrap(): Promise<void> {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, getRMQConfig());
	await app.listen();
	const prismaService = app.get(PrismaService);
	await prismaService.enableShutdownHooks(app);
}
bootstrap().then(() => Logger.log('🚀 Telegram-account microservice is running!!!'));
