import { PrismaClient } from '@prisma/client';
import { INestMicroservice, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
	public async onModuleInit(): Promise<void> {
		await this.$connect();
	}

	public async onModuleDestroy(): Promise<void> {
		this.$disconnect();
	}

	public async enableShutdownHooks(app: INestMicroservice): Promise<void> {
		this.$on('beforeExit', async () => await app.close());
	}
}
