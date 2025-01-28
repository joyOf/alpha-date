import connectToDatabase from '@/database/connection';
import AlphaDateModel from '@/database/schema';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDatabase();

    try {
        // Count the total number of documents
        const totalDocuments = await AlphaDateModel.countDocuments();

        if (totalDocuments === 0) {
            return res.status(404).json({ error: 'No data available in the database' });
        }

        // Get a random index
        const randomIndex = Math.floor(Math.random() * totalDocuments);

        // Fetch a random document
        const randomDocument = await AlphaDateModel.findOne().skip(randomIndex);

        if (!randomDocument || !randomDocument.ideas || randomDocument.ideas.length === 0) {
            return res.status(404).json({ error: 'No ideas found in the database' });
        }

        // Select a random idea from the random document
        const randomIdeaIndex = Math.floor(Math.random() * randomDocument.ideas.length);
        const randomIdea = randomDocument.ideas[randomIdeaIndex];

        res.status(200).json({ idea: randomIdea });
    } catch (error) {
        console.error('Error fetching random idea:', error);
        res.status(500).json({ error: 'Failed to fetch random idea' });
    }
}