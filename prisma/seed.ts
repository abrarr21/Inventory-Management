import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createDummyProducts() {
    const demoUserId = "242b35d2-053c-4176-93f1-7d0f7aed3ac8";

    await prisma.product.createMany({
        data: Array.from({ length: 25 }).map((_, i) => ({
            userId: demoUserId,
            name: `Product ${i + 1}`,
            price: (Math.random() * 90 + 10).toFixed(2),
            quantity: Math.floor(Math.random() * 20),
            lowStockAt: 5,
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i * 5)),
        })),
    });

    console.log(`Seed data created successfully`);
    console.log(`Created 25 products for user: ${demoUserId}`);
}

createDummyProducts()
    .catch((e) => {
        console.error("Error while seeding data", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

// bun run prisma/seed.ts -> execute this
