import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="RGR Siddhanthi" src="https://tse2.mm.bing.net/th?id=OIP.1UVS-mvQHxo_VNC5a1Eb9QAAAA&pid=Api&P=0"/>
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Insititue of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                65% CGPA
              </Typography>
              {"B.Tech Computer Science And Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sri Aadarsh" src="https://tse3.mm.bing.net/th?id=OIP.n1BW9_hvbwvrchPqaetmiwAAAA&pid=Api&P=0" />
        </ListItemAvatar>
        <ListItemText
          primary="Naryana Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                84.6% CGPA
              </Typography>
              {" — Intermediate studies with  MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sai SI" src="https://tse2.mm.bing.net/th?id=OIP.7zYc5is53I-BuiInhQnFNAHaD1&pid=Api&P=0" />
        </ListItemAvatar>
        <ListItemText
          primary="Sri Suryodhaya High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                8.7% CGPA
              </Typography>
              {' — Higher Secondory Education with Computer Classes'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}