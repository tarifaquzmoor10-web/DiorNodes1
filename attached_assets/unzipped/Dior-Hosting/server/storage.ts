import { type Dummy } from "@shared/schema";

export interface IStorage {
  // Empty storage interface
}

export class MemStorage implements IStorage {
  constructor() {
  }
}

export const storage = new MemStorage();
