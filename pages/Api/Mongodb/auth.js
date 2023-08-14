// pages/api/auth.js
import { connectToDatabase } from 'pages/api/mongodb/dbConnect';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    const { db, client } = await connectToDatabase();
    const collection = db.collection('Users'); // Replace with your collection name

    try {
      const user = await collection.findOne({ username });

      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    } finally {
      client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}