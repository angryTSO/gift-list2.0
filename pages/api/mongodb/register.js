import { connectToDatabase } from 'pages/api/mongodb/dbConnect';
export default function MyPage({ data }) {
  // Use data fetched from MongoDB Atlas
  return (
    <div>
      {/* Your page content */}
    </div>
  );
}
// Fetch data from MongoDB Atlas on server-side before rendering the page
export async function getServerSideProps() {
  const { db, client } = await connectToDatabase();
  // Query your collection and get the data
  const collection = db.collection(collectionName);
  const data = await collection.find({}).toArray();
  client.close();
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}