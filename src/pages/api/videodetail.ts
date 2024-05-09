
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

    // temporary api for demo
export default async function getVideoDetails(req:NextApiRequest, res:NextApiResponse) {
    if(req.method === 'GET'){
        const course = req.query.course as string;
        const videoId = req.query.id as string;
        const jsonDirectory = path.join(process.cwd(), 'json');
        const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
        const allData = JSON.parse(fileContents);
        if(videoId === undefined){
            res.status(200).json(allData[course])
        }
        else{
            const videoDetails = allData[course][videoId]
            res.status(200).json(videoDetails);
        }
    }else{
        res.status(405).json({message: 'Method not allowed'});
    }



}