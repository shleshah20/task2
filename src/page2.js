import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SvgIcon from '@material-ui/core/SvgIcon';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Page1 from './page1.js';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import moment from 'moment'

const GreenCheckbox = withStyles({
  root: {
    color: 'green',
    itemAlign: 'center',
    '&$checked': {
      color: 'green',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" /></g>
    </SvgIcon>
  );
}

function createData(ID, Status, Lession_Name, Student_Name, Request_Date, Purpose, Sourced_Form, Prefered_Date, Booking_Date, Lession_Time, Lession_Mode, Trainer, Enrolled) {
  return { ID, Status, Lession_Name, Student_Name, Request_Date, Purpose, Sourced_Form, Prefered_Date, Booking_Date, Lession_Time, Lession_Mode, Trainer, Enrolled };
}

let rows = [
  createData(1, 'New-Booking', 'IELTS', 'Ashok kumar', '25-jan-20', 'Study Abroad', 'Google', 'in 2 week', '4-feb-20', '2:30 PM - 3:30PM', 'Zoom', 'Preety Shah', 'No'),
  createData(2, 'IN-REVIEW', 'IELTS', 'Kishor BG', '26-jan-20', 'Career', 'Google', 'Anytime', '2-feb-20', '2:30 PM - 3:30PM', 'Skype', 'Gulam Ahmed', 'No'),
  createData(3, 'IN-REVIEW', 'TOEFL', 'Satish R', '27-jan-20', 'Study Abroad', 'Erxian Referral', '1 Month', '10-feb-20', '2:30 PM - 3:30PM', 'In-Person', 'Shallin K', 'No'),
  createData(4, 'IN-REVIEW', 'GRE', 'Rajan Kumar', '28-jan-20', 'Career', 'Erxian Referra', 'Anytime', '13-feb-20', '2:30 PM - 3:30PM', 'In-Person', 'Preety Shah', 'No'),
  createData(5, 'Scheduled', 'GRE', 'Ashish Duggai', '29-jan-20', 'Study Abroad', 'Facebook', 'Anytime', '16-feb-20', '4:00 PM - 5:30PM', 'Zoom', 'Preety Shah', 'No'),
  createData(6, 'Cancelled', 'SAT', 'Rahim Ahmed', '30-jan-20', 'Study Abroad', 'Google', 'In 2 week', '19-feb-20', '2:30 PM - 3:30PM', 'Zoom', 'Gulam Ahmed', 'No'),
  createData(7, 'Cancelled', 'PTE', 'Sam Peterson', '31-jan-20', 'Study Abroad', 'Erxian Abroad', 'In 2 week', '22-feb-20', '5:30 PM - 6:30PM', 'Classroom', 'Preety Shah', 'No'),
  createData(8, 'Completed', 'GMAT', 'Syed Ahmed', '1-feb-20', 'Career', 'Other', 'Anytime', '25-feb-20', '2:30 PM - 3:30PM', 'In-Person', 'Gulam Ahmed', 'Yes'),
  createData(9, 'IN-REVIEW', 'IELTS', 'Kalpana Srihari', '2-feb-20', 'Career', 'Google', '1 Month', '28-feb-20', '4:00 PM - 5:30PM', 'Skype', 'Preety Shah', 'no'),
  createData(10, 'Completed', 'SAT', 'Sylvia Robert', '3-feb-20', 'Career', 'Erxian Referral', 'In 2 week', '2-mar-20', '4:00 PM - 5:30PM', 'Skype', 'Shallin K', 'yes')
];

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  header: {
    align: 'left',
    color: 'green',
    maxWidth: 350,
  },
  root: {
    minWidth: 275,
    align: 'left',
    border: '2px solid #000000',
  },
  title: {
    fontSize: 14,
    color: 'black',
    align: 'left',
    itemAlign: 'left',
  },
  paper: {
    backgroundColor: 'green',
    maxWidth: 4000,
  },
  checkboxesParent: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 15,
  },
  checkboxes: {
    border: '1px solid #000'
  },
  filterParent: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  grid1: {
    position: 'sticky',
    left: 0,
  },
  grid2: {
    position: 'sticky',
    right: 0,
  }
});

export default function Page2() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    all: true,
    requestDate: false,
    bookingDate: false,
    startDate: '',
    endDate: '',
    redirect: false
  });

  const [newRows, setNewRows] = React.useState([])

  const [currRow, setCurrRow] = React.useState({})

  const [selectedDate1, setSelectedDate1] = React.useState(moment(Date.now()).format("DD-MM-YYYY"));
  const [selectedDate2, setSelectedDate2] = React.useState(moment(Date.now()).format("DD-MM-YYYY"));

  const handleDate1Change = (e) => {
    setSelectedDate1(e.target.value);
  };

  const handleDate2Change = (e) => {
    setSelectedDate2(e.target.value);
  };

  React.useEffect(() => {
    setNewRows([])
    if (state.all)
      setNewRows(rows)
    if (state.new) {
      setNewRows(rows.filter(item => item.Status === "New-Booking"))
    }
    if (state.inReview)
      setNewRows(rows.filter(item => item.Status === "IN-REVIEW"))
    if (state.scheduled)
      setNewRows(rows.filter(item => item.Status === "Scheduled"))
    if (state.completed)
      setNewRows(rows.filter(item => item.Status === "Completed"))
    if (state.canceled)
      setNewRows(rows.filter(item => item.Status === "Cancelled"))
    if (state.IELTS) {
      setNewRows(rows.filter(item => item.Lession_Name === "IELTS"))
    }
    if (state.TOEFL)
      setNewRows(rows.filter(item => item.Lession_Name === "TOEFL"))
    if (state.PTE)
      setNewRows(rows.filter(item => item.Lession_Name === "PTE"))
    if (state.GRE)
      setNewRows(rows.filter(item => item.Lession_Name === "GRE"))
    if (state.SAT)
      setNewRows(rows.filter(item => item.Lession_Name === "SAT"))
    if (state.GMAT)
      setNewRows(rows.filter(item => item.Lession_Name === "GMAT"))

  }, [state])

  React.useEffect(() => {
    if (!state.all)
      setNewRows([])
  }, [state.all])

  React.useEffect(() => {
    if (state.requestDate)
      setNewRows(rows.filter(item => ((item.Booking_Date >= selectedDate1) && (item.Booking_Date <= selectedDate2))))
    if (state.bookingDate)
      setNewRows(rows.filter(item => ((item.Request_Date >= selectedDate1) && (item.Request_Date <= selectedDate2))))
  }, [selectedDate1, selectedDate2])

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  if (state.redirect) {
    return <Page1 data={currRow} />
  }
  else {
    return (
      <div>
        <Typography className={classes.header}>MANAGE TRIAL LESSONS STASUTS</Typography>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <div className={classes.filterParent}>
              <Grid item xs={3} className={classes.grid1}>
                <Typography className={classes.title}>
                  FILTER BY TRIAL LESSONS STATUS
                </Typography>
                <Paper className={classes.paper}>TRIAL LESSONS STATUS</Paper>
                <div className={classes.checkboxesParent}>
                  <div>
                    <Grid item xs={1}>
                      <FormControlLabel className={classes.checkboxes} control={<GreenCheckbox checked={state.all} onChange={handleChange} name="all" />}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      All
                    </Grid>
                  </div>
                  <div>
                    <Grid item xs={1}>
                      <FormControlLabel className={classes.checkboxes} control={<GreenCheckbox name="new" onChange={handleChange} />} />
                    </Grid>
                    <Grid item xs={1}>
                      New
                    </Grid>
                  </div>
                  <div>
                    <Grid item xs={1} >
                      <FormControlLabel className={classes.checkboxes} control={<GreenCheckbox name="inReview" onChange={handleChange} />} />
                    </Grid>
                    <Grid item xs={1}>
                      In-Review
                    </Grid>
                  </div>
                  <div>
                    <Grid item xs={1} >
                      <FormControlLabel className={classes.checkboxes} control={<GreenCheckbox name="scheduled" onChange={handleChange} />} />
                    </Grid>
                    <Grid item xs={1}>
                      Scheduled
                    </Grid>
                  </div>
                  <div>
                    <Grid item xs={1} >
                      <FormControlLabel className={classes.checkboxes} control={<GreenCheckbox name="completed" onChange={handleChange} />} />
                    </Grid>
                    <Grid item xs={1}>
                      Completed
                    </Grid>
                  </div>
                  <div>
                    <Grid item xs={1}>
                      <FormControlLabel className={classes.checkboxes} control={<GreenCheckbox name="canceled" onChange={handleChange} />} />
                    </Grid>
                    <Grid item xs={1}>
                      Canceled
                    </Grid>
                  </div>
                </div>
              </Grid>
            </div>
            <div>
              <Grid item xs={3} className={classes.grid2}>
                <Typography className={classes.title}>
                  FILTER BY DATE
                </Typography>
                <FormControlLabel control={<Radio label="requestDate" value={state.requestDate} />} />requestDate
                <FormControlLabel control={<Radio label="bookingDate" value={state.bookingDate} />} />bookingDate
                <br />
                <TextField type="date" value={selectedDate1} onChange={handleDate1Change} />
                <TextField type="date" value={selectedDate2} onChange={handleDate2Change} />
              </Grid>
            </div>
            <div>
              <Grid item xs={3} className={classes.grid2}>
                <Typography className={classes.title}>
                  FILTER BY TRIAL LESSONS STATUS
                  </Typography>
                <Paper className={classes.paper}>TRIAL LESSONS STATUS</Paper>
                <div className={classes.checkboxesParent}>
                  <div>
                    <Grid item xs={1}>
                      <FormControlLabel className={classes.checkboxes} control={<GreenCheckbox checked={state.all} onChange={handleChange} name="all" />}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      All
                      </Grid>
                  </div>
                  <div>
                    <Grid item xs={1}>
                      <FormControlLabel className={classes.checkboxes} control={<GreenCheckbox name="IELTS" onChange={handleChange} />} />
                    </Grid>
                    <Grid item xs={1}>
                      IELTS
                      </Grid>
                  </div>
                  <div>
                    <Grid item xs={1} >
                      <FormControlLabel className={classes.checkboxes} control={<GreenCheckbox name="TOEFL" onChange={handleChange} />} />
                    </Grid>
                    <Grid item xs={1}>
                      TOEFL
                      </Grid>
                  </div>
                  <div>
                    <Grid item xs={1} >
                      <FormControlLabel className={classes.checkboxes} control={<GreenCheckbox name="PTE" onChange={handleChange} />} />
                    </Grid>
                    <Grid item xs={1}>
                      PTE
                  </Grid>
                  </div>
                  <div>
                    <Grid item xs={1} >
                      <FormControlLabel className={classes.checkboxes} control={<GreenCheckbox name="GRE" onChange={handleChange} />} />
                    </Grid>
                    <Grid item xs={1}>
                      GRE
                  </Grid>
                  </div>
                  <div>
                    <Grid item xs={1}>
                      <FormControlLabel className={classes.checkboxes} control={<GreenCheckbox name="GMAT" onChange={handleChange} />} />
                    </Grid>
                    <Grid item xs={1}>
                      GMAT
                  </Grid>
                  </div>
                  <div>
                    <Grid item xs={1}>
                      <FormControlLabel className={classes.checkboxes} control={<GreenCheckbox name="SAT" onChange={handleChange} />} />
                    </Grid>
                    <Grid item xs={1}>
                      SAT
                      </Grid>
                  </div>
                </div>
              </Grid>
            </div>
          </CardContent>
        </Card>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">ID</StyledTableCell>
                <StyledTableCell align="center">Edit</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Lesson Name</StyledTableCell>
                <StyledTableCell align="center">Student Name</StyledTableCell>
                <StyledTableCell align="center">Purpose</StyledTableCell>
                <StyledTableCell align="center">Request Date</StyledTableCell>
                <StyledTableCell align="center">Sourced Form</StyledTableCell>
                <StyledTableCell align="center">Prefered Date</StyledTableCell>
                <StyledTableCell align="center">Booking Date</StyledTableCell>
                <StyledTableCell align="center">Lession Time</StyledTableCell>
                <StyledTableCell align="center">Lession Mode</StyledTableCell>
                <StyledTableCell align="center">Trainer</StyledTableCell>
                <StyledTableCell align="center">Enrolled</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newRows.map((row) => (
                <StyledTableRow key={row.ID}>
                  <StyledTableCell align="center">{row.ID}</StyledTableCell>
                  <StyledTableCell align="center"><HomeIcon onClick={() => { setCurrRow(row); setState({ ...state, redirect: true }) }} /></StyledTableCell>
                  <StyledTableCell align="center">{row.Status}</StyledTableCell>
                  <StyledTableCell align="center">{row.Lession_Name}</StyledTableCell>
                  <StyledTableCell align="center">{row.Student_Name}</StyledTableCell>
                  <StyledTableCell align="center">{row.Purpose}</StyledTableCell>
                  <StyledTableCell align="center">{row.Request_Date}</StyledTableCell>
                  <StyledTableCell align="center">{row.Sourced_Form}</StyledTableCell>
                  <StyledTableCell align="center">{row.Prefered_Date}</StyledTableCell>
                  <StyledTableCell align="center">{row.Booking_Date}</StyledTableCell>
                  <StyledTableCell align="center">{row.Lession_Time}</StyledTableCell>
                  <StyledTableCell align="center">{row.Lession_Mode}</StyledTableCell>
                  <StyledTableCell align="center">{row.Trainer}</StyledTableCell>
                  <StyledTableCell align="center">{row.Enrolled}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}