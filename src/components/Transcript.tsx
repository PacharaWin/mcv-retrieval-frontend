// // pages/subtitle.js

// import { useState, useEffect } from 'react';
// import fs from 'fs';
// import path from 'path';

// export default function SubtitlePage() {
//   const [subtitle, setSubtitle] = useState('');

//   useEffect(() => {
//     async function fetchSubtitle() {
//       try {
//         const filePath = path.join(process.cwd(), 'public', 'subtitle.vtt');
//         const fileContent = await fs.promises.readFile(filePath, 'utf-8');
//         // Assuming your subtitle file contains text directly, you might need to parse it
//         setSubtitle(fileContent);
//       } catch (error) {
//         console.error('Error reading subtitle file:', error);
//       }
//     }
//     fetchSubtitle();
//   }, []);

//   return (
//     <div>
//       <h1>Subtitle</h1>
//       <pre>{subtitle}</pre>
//     </div>
//   );
// }