import { MongoClient } from 'mongodb';

const { MONGODB_URI, MONGODB_DB } = process.env;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

if (!MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable');
}

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return { db: cachedClient.db(MONGODB_DB), client: cachedClient };
  }

  const client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  cachedClient = client;

  return { db: client.db(MONGODB_DB), client };
}