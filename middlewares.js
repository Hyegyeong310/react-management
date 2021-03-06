import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import dotenv from 'dotenv';

dotenv.config();

const s3 = new aws.S3({
  region: process.env.REGION,
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY
});

const upload = multer({
  storage: multerS3({
    s3,
    acl: 'public-read',
    bucket: 'react-management/image'
  })
});

export const uploadImage = upload.single('image');
