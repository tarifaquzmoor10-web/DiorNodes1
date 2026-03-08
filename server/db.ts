import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// We bypass database connection requirement for this purely static frontend landing page
export const db = {} as any; // Dummy export
