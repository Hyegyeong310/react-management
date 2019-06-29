import connection from './Customer';

export const getCustomers = (req, res) => {
  connection.query(
    'SELECT * FROM CUSTOMER WHERE isDeleted = 0',
    (err, rows, fields) => {
      res.send(rows);
    }
  );
};

export const postCustomers = (req, res) => {
  let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?, now(), 0)';
  // let image = `/image/${req.file.filename}`;
  const {
    body: { name, birthday, gender, job },
    file: { location: image }
  } = req;
  let params = [image, name, birthday, gender, job];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
};

export const deleteCustomer = (req, res) => {
  let sql = `UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ?`;
  const {
    params: { id }
  } = req;
  connection.query(sql, id, (err, rows, fields) => {
    res.send(rows);
  });
};
