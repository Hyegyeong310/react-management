import React from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
});

const customers = [
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
];

function App(props) {
  const { classes } = props ? props : null;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(customer => (
            <Customer
              key={customer.id}
              id={customer.id}
              image={customer.image}
              name={customer.name}
              birthday={customer.birthday}
              gender={customer.gender}
              job={customer.job}
            />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
