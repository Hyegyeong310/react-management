import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';

import routes from './routes';
import { getCustomers, postCustomers, deleteCustomer } from './controllers';
import { uploadImage } from './middlewares';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/image', express.static(path.join(__dirname, 'upload')));

app.get(routes.customers, getCustomers);
app.post(routes.customers, uploadImage, postCustomers);
app.delete(routes.customerDetail, deleteCustomer);

app.listen(port, () => console.log(`Listening on port ${port}`));
