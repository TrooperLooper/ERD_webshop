import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // Create Categories
  const electronics = await prisma.category.create({
    data: {
      name: "Electronics",
    },
  });

  const books = await prisma.category.create({
    data: {
      name: "Books",
    },
  });

  console.log("Categories created");

  // Create Products
  const laptop = await prisma.product.create({
    data: {
      name: "MacBook Pro",
      price: 2499.99,
      stock: 10,
      categoryId: electronics.id,
    },
  });

  const mouse = await prisma.product.create({
    data: {
      name: "Magic Mouse",
      price: 79.99,
      stock: 25,
      categoryId: electronics.id,
    },
  });

  const book = await prisma.product.create({
    data: {
      name: "JavaScript Guide",
      price: 29.99,
      stock: 50,
      categoryId: books.id,
    },
  });

  console.log("Products created");

  // Create Customers
  const john = await prisma.customer.create({
    data: {
      name: "John Doe",
      email: "john@example.com",
    },
  });

  const jane = await prisma.customer.create({
    data: {
      name: "Jane Smith",
      email: "jane@example.com",
    },
  });

  console.log("Customers created");

  // Create Orders
  const order1 = await prisma.order.create({
    data: {
      customerId: john.id,
    },
  });

  const order2 = await prisma.order.create({
    data: {
      customerId: jane.id,
    },
  });

  console.log("Orders created");

  // Create Order Items
  await prisma.orderItem.create({
    data: {
      orderId: order1.id,
      productId: laptop.id,
      quantity: 1,
    },
  });

  await prisma.orderItem.create({
    data: {
      orderId: order1.id,
      productId: mouse.id,
      quantity: 2,
    },
  });

  await prisma.orderItem.create({
    data: {
      orderId: order2.id,
      productId: book.id,
      quantity: 3,
    },
  });

  console.log("Order items created");
  console.log("Seeding finished!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
