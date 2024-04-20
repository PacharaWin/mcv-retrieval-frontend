// import React, { useState } from 'react';
// import { Button, CircularProgress, Snackbar, Alert, Box } from '@mui/material';
// import CustomAppBar from "./AppBar";


// const FileUpload: React.FC = () => {
//     const [file, setFile] = useState<File | null>(null);
//     const [uploading, setUploading] = useState<boolean>(false);
//     const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
//     const [uploadError, setUploadError] = useState<string | null>(null);

//     const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setFile(event.target.files ? event.target.files[0] : null);
//     };

//     const handleFileUpload = async () => {
//         if (!file) {
//             setUploadError('Please select a file.');
//             return;
//         }

//         setUploading(true);
//         setUploadError(null);

//         const formData = new FormData();
//         formData.append('file', file);
//         formData.append('id', file);
//         formData.append('filename', file);

//         try {
//             const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/embed`, {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (response.ok) {
//                 setUploadSuccess(true);
//             } else {
//                 const errorData = await response.json();
//                 setUploadError(errorData.message || 'File upload failed.');
//             }
//         } catch (error) {
//             console.error('Error uploading file:', error);
//             setUploadError('File upload failed.');
//         } finally {
//             setUploading(false);
//         }
//     };


//     return (
//         <div>
//             <Box>
//                 <CustomAppBar />
//             </Box>
//             <h1>VTT File Upload for embedding</h1>
//             <input type="file" onChange={handleFileChange} />
//             <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleFileUpload}
//                 disabled={!file || uploading}
//             >
//                 {uploading ? <CircularProgress size={24} /> : 'Upload'}
//             </Button>
//             <Snackbar
//                 open={uploadSuccess}
//                 autoHideDuration={3000}
//                 onClose={() => setUploadSuccess(false)}
//             >
//                 <Alert severity="success">File uploaded successfully!</Alert>
//             </Snackbar>
//             <Snackbar
//                 open={!!uploadError}
//                 autoHideDuration={3000}
//                 onClose={() => setUploadError(null)}
//             >
//                 <Alert severity="error">{uploadError}</Alert>
//             </Snackbar>
//         </div>
//     );
// };

// export default FileUpload;


import React, { useState } from 'react';
import { Button, CircularProgress, Snackbar, Alert, Box, TextField } from '@mui/material';
import CustomAppBar from "./AppBar";

const FileUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [id, setId] = useState<string>('');
    const [filename, setFilename] = useState<string>('');
    const [uploading, setUploading] = useState<boolean>(false);
    const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
    const [uploadError, setUploadError] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files ? event.target.files[0] : null);
    };

    const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setId(event.target.value);
    };

    const handleFilenameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilename(event.target.value);
    };

    const handleFileUpload = async () => {
        if (!file || !id || !filename) {
            setUploadError('Please provide a file, id, and filename.');
            return;
        }

        setUploading(true);
        setUploadError(null);

        const formData = new FormData();
        formData.append('file', file);
        // formData.append('id', id);
        // formData.append('filename', filename);
        // console.log('left');
        // console.log(typeof formData);

        try {
            const searchParams = new URLSearchParams({
                'id':id,
                'filename':filename,
            });

            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/embed?` + searchParams, {
            // const response = await fetch('api/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setUploadSuccess(true);
            } else {
                const errorData = await response.json();
                setUploadError(errorData.message || 'File upload failed.');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            setUploadError('File upload failed.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div>
            <Box>
                <CustomAppBar />
            </Box>
            <h1>VTT File Upload for embedding</h1>
            <TextField
                label="ID"
                value={id}
                onChange={handleIdChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Filename"
                value={filename}
                onChange={handleFilenameChange}
                fullWidth
                margin="normal"
            />
            <input type="file" onChange={handleFileChange} />
            <Button
                variant="contained"
                color="primary"
                onClick={handleFileUpload}
                disabled={!file || uploading}
            >
                {uploading ? <CircularProgress size={24} /> : 'Upload'}
            </Button>
            <Snackbar
                open={uploadSuccess}
                autoHideDuration={3000}
                onClose={() => setUploadSuccess(false)}
            >
                <Alert severity="success">File uploaded successfully!</Alert>
            </Snackbar>
            <Snackbar
                open={!!uploadError}
                autoHideDuration={3000}
                onClose={() => setUploadError(null)}
            >
                <Alert severity="error">{uploadError}</Alert>
            </Snackbar>
        </div>
    );
};

export default FileUpload;
