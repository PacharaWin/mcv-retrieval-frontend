
import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req:any, res:any) {
    const jsonDirectory = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
    const data = JSON.parse(fileContents);
    res.status(200).json(data);
}