import { PrismaClient } from "@prisma/client";
import "server-only";

declare global {
  // eslint-disable-next-line no-var, no-unused-vars
  var cachedPrisma: PrismaClient;
}

/**
 * Prisma client instance.
 * Initialize it if it's not initialized yet.
 * Only initializes one instance.
 */
export let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  // if we're in production, use the cached version
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    // if we're in development, initialize a new instance
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}
