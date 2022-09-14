import {
  Paper,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  TableContainer,
} from '@mui/material';

const MuiTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {DUMMY_TABLE_DATA.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: '0px' } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default MuiTable;

const DUMMY_TABLE_DATA = [
  {
    id: 1,
    first_name: 'Felicle',
    last_name: 'Eliaz',
    email: 'feliaz0@techcrunch.com',
    gender: 'Genderfluid',
    ip_address: '137.186.143.150',
  },
  {
    id: 2,
    first_name: 'Thayne',
    last_name: 'Vasyukov',
    email: 'tvasyukov1@sohu.com',
    gender: 'Male',
    ip_address: '156.136.14.187',
  },
  {
    id: 3,
    first_name: 'Arabel',
    last_name: 'Mawd',
    email: 'amawd2@wix.com',
    gender: 'Female',
    ip_address: '50.32.197.121',
  },
  {
    id: 4,
    first_name: 'Olympe',
    last_name: 'Belcham',
    email: 'obelcham3@istockphoto.com',
    gender: 'Female',
    ip_address: '86.222.233.160',
  },
  {
    id: 5,
    first_name: 'Inglebert',
    last_name: 'Roxbrough',
    email: 'iroxbrough4@symantec.com',
    gender: 'Agender',
    ip_address: '24.23.5.242',
  },
  {
    id: 6,
    first_name: 'Collin',
    last_name: 'Rohlfing',
    email: 'crohlfing5@com.com',
    gender: 'Male',
    ip_address: '93.35.229.78',
  },
  {
    id: 7,
    first_name: 'Margit',
    last_name: 'Theis',
    email: 'mtheis6@elpais.com',
    gender: 'Female',
    ip_address: '225.111.152.102',
  },
  {
    id: 8,
    first_name: 'Tyrus',
    last_name: 'Clail',
    email: 'tclail7@shutterfly.com',
    gender: 'Male',
    ip_address: '178.239.104.16',
  },
  {
    id: 9,
    first_name: 'Loutitia',
    last_name: 'Philpots',
    email: 'lphilpots8@storify.com',
    gender: 'Female',
    ip_address: '199.44.225.109',
  },
  {
    id: 10,
    first_name: 'Olivia',
    last_name: 'Brunstan',
    email: 'obrunstan9@ucsd.edu',
    gender: 'Female',
    ip_address: '2.168.41.85',
  },
];
