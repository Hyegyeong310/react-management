import connection from './Customer';

export const customers = (req, res) => {
  connection.query('SELECT * FROM CUSTOMER', (err, rows, fields) => {
    res.send(rows);
  });
};
