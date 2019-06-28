import multer from 'multer';

const upload = multer({ dest: './upload' });

export const uploadImage = upload.single('image');
