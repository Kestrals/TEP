import React ,{Components, useState} from 'react';
import FilterSelector from '../components/FilterSelector';
import Header from "../components/header";
import Button from '@material-ui/core/Button';
import SchoolIcon from '@material-ui/icons/School';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import StackedColumnChart from '../components/stackedColumnChart';

var response = {
  "labels": "Teaching 1,Teaching 2,Teaching 3,Teaching 4,Teaching 5,Teaching 6,Teaching 7,Teaching 8,Teaching 9,Teaching 10,Teaching 11,Teaching 12,Revision 1,Exams 1",
  "datasets": [
        {
        "label": "Engineering Design II",
        "data": "4.0,6.1,7.8,7.8,7.6,6.9,1.9,6.5,7.9,6.9,6.3,4.6,0,0,"
        },
        {
        "label": "Chemistry",
        "data": "3.7,8.7,5.7,5.7,4.7,8.7,2.0,9.7,5.7,9.7,5.7,9.7,5.0,7.0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"
        },
        {
        "label": "Physics",
        "data": "2.5,3.5,3.5,3.5,3.5,3.5,1.0,3.5,3.5,3.5,3.5,12.5,10.0,10.0,0,0,0,0,0,0,4.3,1.3,5.6,1.3,5.6,1.3,5.6,1.3,5.6,1.3,1.3,0,2"
        },
        ],
  "startAxis": "Teaching 1",
  "endAxis": "Exams 2"
};

const Summary = (props) => <div style = {{width:'100%',padding:'10px 0', fontFamily: 'Rubik', fontStyle: 'normal'}}>
  <div style = {{float:'left', padding:'0 20px '}}>
    <SchoolIcon style ={{fontSize: '45px', verticalAlign:'middle'}}/>
    <span style = {{marginLeft:'24px',fontWeight: 'normal', fontSize: '14px', lineHeight: '17px'}}>
      {props.title}
    </span>
  </div>
</div>


const GeneralInformation = ((props) =>
    <div style={{padding:'7px 24px'}}>
      <ExpansionPanel >
        <ExpansionPanelSummary  style = {{padding:'0 0 0 0'}}>
          <Summary title= {"General Information"} />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails >
          <div style = {{textAlign: 'justify', fontWeight: 'normal', fontSize: '14px', lineHeight: '17px'}}>
            <div> Description: </div>
            <div style = {{fontWeight: 300}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </div>
            <div style = {{margin:'12px 0 0 0 '}}> Professors: </div>
            <div style = {{fontWeight: 300}}> {props.prof} </div>
          </div>
        </ExpansionPanelDetails >
      </ExpansionPanel>
    </div>
  );

const Workload = ((props) =>
      <div style={{padding:'7px 24px'}}>
        <ExpansionPanel >
          <ExpansionPanelSummary  style = {{padding:'0 0 0 0'}}>
            <Summary title= {"Workload"} />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails >
            <div style = {{width:'100%',textAlign: 'justify', fontWeight: 'normal', fontSize: '14px', lineHeight: '17px'}}>
              <div style = {{fontWeight: 300}}> Total amount of workload which you are expected to have during module, including lectures, activities and guided studie time.</div>
              <div style = {{margin:'12px 0 0 0 ', fontWeight: 300, color:'#AFAFAF' }}> view by: </div>
              <div style = {{height:'400px'}}> <StackedColumnChart response = {response}/> </div>
            </div>
          </ExpansionPanelDetails >
        </ExpansionPanel>
      </div>
    );



function ModulePanel (props) {
  console.log("dentro do panel:");
  console.log(props.module);
  const mainStyle = {
    left: "0",
    right:"0",
    position: 'fixed',
    backgroundColor: "",
    height:'75px',
    top:'100px',
    zIndex: 1,
  };
  const titleStyle ={
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '21px',
    padding: '15px',
  };
  const headerContent = {title:"3E2 - Chemical Processes", imgPath: require("../images/icons/selfGuidedStudy.svg")};
  return( <div style={{overflow:'scroll',position:'fixed',top: '55px', width:'100%',bottom:'72px', zIndex:1, backgroundColor:'white'}}>
            <div style={{position:'fixed',height: '130px', width:'100%',backgroundColor:'white',zIndex:2}}>
              <IconButton onClick = {()=>props.onClick(false)}
              style={{position:'fixed',top: '55px',margin:'15px 24px'}} aria-label="delete" color="primary">
                  <ArrowBackIosIcon color='action'/>
              </IconButton>
              <div style={mainStyle}>
                <SchoolIcon style ={{fontSize: '45px', verticalAlign:'middle', float:'left',  padding: '20px 25px'}}/>
                {/*<img  src={headerContent.imgPath} style={imgStyle}/>*/}
                <h2 style={titleStyle}> {props.module.module_code} - {props.module.module_name} </h2>
              </div>
            </div>

              <div style={{position:'relative', top:'130px'}}>
              <GeneralInformation prof = {props.module.module_lecturer} />
              <Workload />
              </div>

          </div>


  );
}


function ModuleButton (props) {
  return(<div style={{margin:'7px 24px'}}>
    <Button fullWidth onClick = {()=>props.onClick(props.module.module_code)}
    style={{backgroundColor:'#e3e3e3',textAlign:'left',justifyContent:'left',textTransform: 'none',}}startIcon={<SchoolIcon color='action' style={{verticalAlign:'middle', fontSize: '45px'}} />} children ={
        <div>
          <div style={{fontFamily: 'Rubik'}}>{props.module.module_code} - {props.module.module_name} </div>
          <div style={{fontWeight:'300',fontSize: '14px'}}>Prof. {props.module.module_lecturer} </div>
        </div>
    } />
    </div>

  );
}

export default function MyModules (props) {
  const [moduleSelected,setModuleSelected] = useState(false);
  const [selectedID,setSelectedID] = useState();

  function selectModule(id) {
    setModuleSelected(true);
    setSelectedID(id);
    console.log("id selected:" + id)
}

  const headerContent = {title:"My Modules", imgPath: require("../images/icons/selfGuidedStudy.svg")};
    return (
      <div >
        <div className="header">
          <Header imgPath = {headerContent.imgPath}  title = {headerContent.title}/>
        </div>
        <div className="filter">
          <div style={{}}>
            <FilterSelector />
          </div>
        </div>
        <div className="main" >
      {
        props.modules.map((module ) => <ModuleButton module={module} onClick={selectModule}/>)
      }
          <ModuleButton module={props.modules[0]} onClick={selectModule}/>

        </div>

        { moduleSelected ? <div style={{zIndex:2}}> <ModulePanel module={props.modules.find((module) => module.module_code == selectedID)} onClick={setModuleSelected}/></div> : <div/>  }



      </div>
    );
}

{/*
*/}
