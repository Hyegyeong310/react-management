import express from 'express';
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
    {
      id: 1,
      image: 'https://placeimg.com/64/64/1',
      name: 'Betty',
      birthday: 900310,
      gender: 'Female',
      job: 'not working'
    },
    {
      id: 2,
      image: 'https://placeimg.com/64/64/2',
      name: 'Helen',
      birthday: 900310,
      gender: 'Female',
      job: 'programmer'
    },
    {
      id: 3,
      image: 'https://placeimg.com/64/64/3',
      name: 'John',
      birthday: 900310,
      gender: 'Male',
      job: 'backend'
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
