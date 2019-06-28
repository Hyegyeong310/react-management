import express from 'express';
import path from 'path';
import routes from './routes';
import { getCustomers, postCustomers, deleteCustomer } from './controllers';
import { uploadImage } from './middlewares';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/image', express.static(path.join(__dirname, './upload')));

app.get(routes.customers, getCustomers);
app.post(routes.customers, uploadImage, postCustomers);
app.delete(routes.customerDetail, deleteCustomer);

app.listen(port, () => console.log(`Listening on port ${port}`));
