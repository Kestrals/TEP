import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LecturesTab from './lecturesTab';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import ActiTab from './actiTab';
import ExpTab from "./ExpTab";
import BarChartIcon from '@material-ui/icons/BarChart';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import ComputerIcon from '@material-ui/icons/Computer';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent:'left',
    textAlign:'left',
  },
  tabs: {

    borderRight: `1px solid ${theme.palette.divider}`,
  },
    iconS: {
        verticalAlign: 'middle',
        paddingBottom: '2px',
    },


}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className={classes.root}>

      <div >
        <div style = {{maxWidth:'317px'}} >
        <Tabs
          style = {{float:'left',width:'317px',  position:'absolute', left:0}}
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          indicatorColor="primary"
          textColor="secondary"
          TabIndicatorProps={{style: {background:'#AD59D4'}}}
        >

          <Tab fullWidth style = {{ height:'100px',maxWidth:'500px', textTransform: 'none', fontSize:18}} label={<div style={{marginLeft:'30px'}}>
            <CastForEducationIcon color='action'  style={{fontSize:"50px",verticalAlign:'middle'}}/> Overview</div>} {...a11yProps(0)} />


          <Tab fullWidth style = {{ height:'100px',maxWidth:'500px', textTransform: 'none', fontSize:18}} label={<div style={{marginLeft:'30px'}}>
            <LocalLibraryIcon color='action' style={{fontSize:"50px",verticalAlign:'middle'}} /> Lectures</div>} {...a11yProps(1)} />


          <Tab fullWidth style = {{ height:'100px',maxWidth:'500px', textTransform: 'none', fontSize:18 }} label={<div style={{marginLeft:'30px'}}>
            <ComputerIcon color='action' style={{fontSize:"50px",verticalAlign:'middle'}} /> Activities</div>} {...a11yProps(2)} />

          <Tab fullWidth style = {{ height:'100px',maxWidth:'500px', textTransform: 'none', fontSize:18 }} label={<div style={{marginLeft:'30px'}}>
            <BarChartIcon color='action' style={{fontSize:"50px",verticalAlign:'middle'}} /> Student Experience</div>} {...a11yProps(4)} />


        </Tabs>
        </div>
        <div style = {{position:'relative', left:'317px',top:'-100px',float: 'right', width:'906px', backgroundColor:'white'}}>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          <LecturesTab />
        </TabPanel>
        <TabPanel value={value} index={2}>
            <ActiTab />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ExpTab />
        </TabPanel>
        </div>
      </div>

    </div>
  );
}

{/*<div style = {{ position:'relative', height: '100px', width:'317px', backgroundColor:'#414141', borderRadius: '8px 0px 0px 0px',fontFamily: 'Rubik', fontStyle: 'normal'}}>
 <p style = {{position:'relative',top:'24',left:'29px', fontWeight: '500', fontSize: '18px', display: 'flex', alignItems: 'center', color: '#FFFFFF'}}> 3E7 - Engineering Math </p>

 <Typography style={{position:'relative', verticalAlign:'middle' , left:'29px', float:'left', fontSize: '15px', fontWeight:'500', color: 'white', paddingBottom: '0.5px'}}> <PersonIcon className={classes.iconS} style={{ fontSize: 22 }} /> 35 &nbsp; <b>ECTS</b> 10</Typography>

</div>
style = {{height:'500px',position:'relative', width:'1223px', top:'-100px',borderStyle:'dashed'}}

*/}
