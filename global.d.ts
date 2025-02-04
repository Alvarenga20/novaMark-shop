declare global {
  const mongoClient: Promise<MongoClient> | undefined;
}

export {};
