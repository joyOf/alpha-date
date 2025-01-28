import connectToDatabase from '@/database/connection';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDatabase();

    res.status(200).json({ message: 'Connected to the database successfully!' });
}