import connection from './Customer';

export const getCustomers = (req, res) => {
  connection.query('SELECT * FROM CUSTOMER', (err, rows, fields) => {
    res.send(rows);
  });
};

export const postCustomers = (req, res) => {
  let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?)';
  let image = `/image/${req.file.filename}`;
  const {
    body: { name, birthday, gender, job }
  } = req;
  let params = [image, name, birthday, gender, job];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
};
