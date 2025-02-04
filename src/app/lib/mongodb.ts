import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/alvarenga20"; // Your URI here

const client = new MongoClient(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,
});

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (globalThis.mongoClient) {
    clientPromise = globalThis.mongoClient;
  } else {
    clientPromise = client.connect();
    globalThis.mongoClient = clientPromise;
  }
} else {
  clientPromise = client.connect();
}

export default clientPromise;
