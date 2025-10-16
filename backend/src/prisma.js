import { PrismaClient } from '@prisma/client';

const globalThis = typeof global !== 'undefined' ? global : window;

const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

export default prisma;