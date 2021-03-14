import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  header: {
    color: 'green',
  },
  root: {
    minWidth: 275,
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
  },
  textBox: {
    width: '100%'
  },
  headerContent: {
    flexDirection: 'row'
  }
});

export default function Page1(props) {
  const classes = useStyles();

  const [data, setData] = React.useState({})

  React.useEffect(() => {
    if (props.data !== undefined)
      setData(props.data)
  }, [])

  return (
    <div>
      <Typography className={classes.header}>MANAGE TRIAL LESSONS STASUTS</Typography>
      <Card className={classes.header} variant="outlined">
        <CardContent className={classes.headerContent}>
          <Typography>
            student Details
          </Typography>
          <Typography>
            First Name
        </Typography>
          <TextField id="outlined-basic" value={data.Student_Name} variant="outlined" className={classes.textBox} />
          <Typography>
            Last Name
            <TextField id="outlined-basic" value={data.Student_Name} variant="outlined" className={classes.textBox} />
          </Typography>
          <Typography>
            Email id
            <TextField id="outlined-basic" variant="outlined" className={classes.textBox} />
          </Typography>
          <Typography>
            Contact Number:
            <TextField id="outlined-basic" variant="outlined" className={classes.textBox} />
          </Typography>
          <Typography>
            Lession Booked
            <TextField id="outlined-basic" value={data.Lession_Name} variant="outlined" className={classes.textBox} />
          </Typography>
          <Typography>
            Training Purpose
            <TextField id="outlined-basic" value={data.Purpose} variant="outlined" className={classes.textBox} />
          </Typography>
          <Typography>
            Request Date
            <TextField id="outlined-basic" value={data.Request_Date} variant="outlined" className={classes.textBox} />
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined">
        <CardContent>
          <Typography>
            Booking Status
            <TextField id="outlined-basic" value={data.Status} variant="outlined" className={classes.textBox} />
          </Typography>
          <Typography>
            Trainer
            <TextField id="outlined-basic" value={data.Trainer} variant="outlined" className={classes.textBox} />
          </Typography>
          <Typography>
            Lession Date
             <TextField
              type="date"
              className={classes.textBox}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Typography>
          <Typography>
            Lession Time
            <TextField
              type="time"
              className={classes.textBox}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              type="time"
              className={classes.textBox}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Typography>
          <Typography>
            Lession Mode
            <TextField id="outlined-basic" value={data.Lession_Mode} variant="outlined" className={classes.textBox} />
          </Typography>
          <Typography>
            Email Tamplete
            <TextField id="outlined-basic" variant="outlined" className={classes.textBox} />
          </Typography>
          <Typography>
            Email Subject
            <TextField id="outlined-basic" variant="outlined" className={classes.textBox} />
          </Typography>
          <Typography>
            Email Message
            <TextField
              id="outlined-multiline-static"
              className={classes.textBox}
              multiline
              rows={8}
              variant="outlined"
            />
          </Typography>
          <Typography>
            Select Email Signature
        </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography>
            Email Template
            <TextField id="outlined-basic" variant="outlined" className={classes.textBox} />
          </Typography>
          <Typography>
            Email Message
            <TextField
              id="outlined-multiline-static"
              className={classes.textBox}
              multiline
              rows={8}
              variant="outlined"
            />
          </Typography>
          <Typography>
            Select Email Signature
        </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography>
            Trainer's Notes
            <TextField
              id="outlined-multiline-static"
              className={classes.textBox}
              multiline
              rows={8}
              variant="outlined"
            />
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}