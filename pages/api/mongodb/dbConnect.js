// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


// Import the MongoClient
import { MongoClient } from 'mongodb';
// MongoDB Atlas connection string
const connectionString = 'mongodb+srv:cluster21379.ygrme2n.mongodb.net/ --apiVersion 1 --username Cluster21379';
// Database and collection names
const dbName = 'Users';
const collectionName = 'YUsers';
// Function to connect to the database
async function connectToDatabase() {
  const client = await MongoClient.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return {
    client,
    db: client.db(dbName),
  };
}
