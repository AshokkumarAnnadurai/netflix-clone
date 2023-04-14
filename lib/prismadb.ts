import { PrismaClient } from "@prisma/client";

// Creating a new PrismaClient instance or reusing an existing one if available
const client = global.prismadb || new PrismaClient;

// If the environment is production, save the PrismaClient instance to a global variable for future use
if (process.env.NODE_ENV === 'production') global.prismadb = client;

// Exporting the PrismaClient instance
export default client;
