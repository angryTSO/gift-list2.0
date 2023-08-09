import { connectToDatabase } from './mongodb/dbConnect';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { db } = await connectToDatabase();
    const usersCollection = db.collection('Users');

    const newUser = {
      username: req.body.username,
      password: req.body.password,
    };

    try {
      await usersCollection.insertOne(newUser);
      res.status(200).json({ message: 'User registered successfully!' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Error registering user.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}