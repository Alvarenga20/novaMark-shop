import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/alvarenga20";

const client = new MongoClient(MONGODB_URI, {
  serverSelectionTimeoutMS: 30000, 
});

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (mongoClient) {
    clientPromise = mongoClient;
  } else {
    clientPromise = client.connect();
    mongoClient = clientPromise;
  }
} else {
  clientPromise = client.connect();
}

export default clientPromise;
