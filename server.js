import express from 'express';
import routes from './routes';
import { getCustomers, postCustomers } from './controllers';
import { uploadImage } from './middlewares';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/image', express.static('./upload'));

app.get(routes.customers, getCustomers);
app.post(routes.customers, uploadImage, postCustomers);

app.listen(port, () => console.log(`Listening on port ${port}`));
