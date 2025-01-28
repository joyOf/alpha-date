import connectToDatabase from '@/database/connection';
import AlphaDateModel from '@/database/schema';
import { NextApiRequest, NextApiResponse } from 'next';

const data = [
    { letter: 'A', ideas: ['Art gallery visit', 'Archery session', 'Amusement park day'] },
    { letter: 'B', ideas: ['Bike ride', 'Beach day', 'Board game night'] },
    { letter: 'C', ideas: ['Cooking class', 'Camping trip', 'Craft workshop'] },
    { letter: 'D', ideas: ['Dance lesson', 'Darts game', 'Dinner date'] },
    { letter: 'E', ideas: ['Escape room', 'Exploring a local market', 'Evening stroll'] },
    { letter: 'F', ideas: ['Fishing trip', 'Farm visit', 'Food truck hopping'] },
    { letter: 'G', ideas: ['Gardening together', 'Golf session', 'Go-kart racing'] },
    { letter: 'H', ideas: ['Hiking adventure', 'Hot air balloon ride', 'Home movie night'] },
    { letter: 'I', ideas: ['Ice skating', 'Indoor rock climbing', 'Imax movie experience'] },
    { letter: 'J', ideas: ['Jazz concert', 'Jigsaw puzzle night', 'Juice bar crawl'] },
    { letter: 'K', ideas: ['Karaoke night', 'Kayaking', 'Kite flying'] },
    { letter: 'L', ideas: ['Library visit', 'Live music event', 'Lunch at a cozy cafe'] },
    { letter: 'M', ideas: ['Museum tour', 'Mountain biking', 'Meditation class'] },
    { letter: 'N', ideas: ['Nature walk', 'Night photography', 'Netflix binge-watch'] },
    { letter: 'O', ideas: ['Outdoor picnic', 'Observatory visit', 'Open mic night'] },
    { letter: 'P', ideas: ['Pottery class', 'Painting workshop', 'Parkour session'] },
    { letter: 'Q', ideas: ['Quiz night', 'Quilting class', 'Quiet coffee date'] },
    { letter: 'R', ideas: ['Rock climbing', 'Road trip', 'Roller skating'] },
    { letter: 'S', ideas: ['Stargazing', 'Scavenger hunt', 'Stand-up comedy show'] },
    { letter: 'T', ideas: ['Theater performance', 'Tennis match', 'Trampoline park'] },
    { letter: 'U', ideas: ['Urban exploration', 'Ultimate frisbee', 'Underground tour'] },
    { letter: 'V', ideas: ['Visit a vineyard', 'Volunteer together', 'Virtual reality gaming'] },
    { letter: 'W', ideas: ['Wine tasting', 'Water park adventure', 'Walk through botanical gardens'] },
    { letter: 'X', ideas: ['Xylophone lesson', 'Xtreme sports', 'Xbox gaming session'] },
    { letter: 'Y', ideas: ['Yoga class', 'Yacht ride', 'Yard sale exploration'] },
    { letter: 'Z', ideas: ['Zoo visit', 'Zip-lining', 'Zumba class'] },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDatabase();

    try {
        // Remove all existing data
        await AlphaDateModel.deleteMany({});
        console.log('All existing data removed');

        // Insert new data
        const insertedData = await AlphaDateModel.insertMany(data);
        console.log('Database populated with new data');

        res.status(200).json({ message: 'Database reset and populated', data: insertedData });
    } catch (error) {
        console.error('Failed to populate database:', error);
        res.status(500).json({ error: 'Failed to populate database' });
    }
}