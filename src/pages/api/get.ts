import connectToDatabase from '@/database/connection';
import AlphaDateModel from '@/database/schema';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDatabase();

    const { letter } = req.query;

    try {
        if (!letter) {
            return res.status(400).json({ error: 'Letter ID is required' });
        }

        const result = await AlphaDateModel.findOne({ letter });
        if (!result) {
            return res.status(404).json({ error: `No data found for letter ${letter}` });
        }

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}