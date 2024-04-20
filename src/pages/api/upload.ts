import { NextApiRequest, NextApiResponse } from 'next';

const upload = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const file = req.body.file;

        // Process the uploaded file here (save to disk, upload to a storage service, etc.)

        res.status(200).json({ message: 'File uploaded successfully' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};

export default upload;