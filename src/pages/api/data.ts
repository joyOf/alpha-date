import connectToDatabase from '@/database/connection';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDatabase(); // Ensure the database is connected

    // Example: Fetch data from the database (replace with your schema and logic)
    res.status(200).json({ message: 'Connected to the database successfully!' });
}