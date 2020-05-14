import React ,{Component} from 'react';
import TopMenuBar from './components/menu';
import './styles/mainFrameSummary.css';
import SumVTabs from "./components/summaryVTabs";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));



class LectSummary extends Component  {


    render(){
      return (
        <div >
          <div className = 'Menubar'>
            <TopMenuBar />
          </div>
          <div className = 'title'>
            <p> 3E7 Planning　</p>
          </div>

            <div className='tabFrame'>
                <Button variant="contained" size="large" className='margin' style={{width: '277px', height: '56px',

                    background: '#F1F1F1',
                    borderRadius: '4px', }}>
                    Overview
                </Button>

                <Button variant="contained" size="large" className='margin' style={{width: '277px', height: '56px',

                    background: '#F1F1F1',
                    borderRadius: '4px', }}>
                    Overview
                </Button>
                <Button variant="contained" size="large" className='margin' style={{width: '277px', height: '56px',

                    background: '#F1F1F1',
                    borderRadius: '4px', }}>
                    Overview
                </Button>
                <Button variant="contained" size="large" className='margin' style={{width: '277px', height: '56px',

                    background: '#F1F1F1',
                    borderRadius: '4px', }}>
                    Overview
                </Button>
                <Button variant="contained" size="large" className='margin' style={{width: '277px', height: '56px',

                    background: '#F1F1F1',
                    borderRadius: '4px', }}>
                    Overview
                </Button>
                <Button variant="contained" size="large" className='margin' style={{width: '277px', height: '56px',

                    background: '#F1F1F1',
                    borderRadius: '4px', }}>
                    Overview
                </Button>
                <Button variant="contained" size="large" className='margin' style={{width: '277px', height: '56px',

                    background: '#F1F1F1',
                    borderRadius: '4px', }}>
                    Overview
                </Button>
                <Button variant="contained" size="large" className='margin' style={{width: '277px', height: '56px',

                    background: '#F1F1F1',
                    borderRadius: '4px', }}>
                    Overview
                </Button>
                <Button variant="contained" size="large" className='margin' style={{width: '277px', height: '56px',

                    background: '#F1F1F1',
                    borderRadius: '4px', }}>
                    Overview
                </Button>

        </div>
        </div>
      );
    }

}

  export default LectSummary;
