import { MongoClient } from "mongodb";

declare global {
  let mongoClient: Promise<MongoClient> | undefined;
}

export {};
