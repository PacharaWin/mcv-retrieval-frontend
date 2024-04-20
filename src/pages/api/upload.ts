import { NextApiRequest, NextApiResponse } from 'next';


// const upload = (req: NextRequest, res: NextResponse) => {
//     if (req.method === 'POST') {
//         const body = req.body;
//         console.log(body);
//         const file = req.body.file;
//         // console.log(typeof req.body)
//         // console.log(body.get('id'))
//         // Process the uploaded file here (save to disk, upload to a storage service, etc.)
//         res.status(200).json({ message: 'File uploaded successfully' });
//     } else {
//         res.status(405).json({ message: 'Method not allowed' });
//     }
// };

// export default upload;

const upload = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const body = req.body;
        console.log(body);
        const file = req.body.file;
        // console.log(typeof req.body)
        // console.log(body.get('id'))
        // Process the uploaded file here (save to disk, upload to a storage service, etc.)
        res.status(200).json({ message: 'File uploaded successfully' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};

export default upload;
