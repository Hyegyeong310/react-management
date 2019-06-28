import express from 'express';
import routes from './routes';
import { customers } from './controllers';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(routes.customers, customers);

app.listen(port, () => console.log(`Listening on port ${port}`));
