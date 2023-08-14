import { MongoClient } from 'mongodb';

const { MONGODB_URI, MONGODB_DB } = process.env;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db(MONGODB_DB);

  cachedClient = { client, db };
  return cachedClient;
}