import React from 'react';
import Icon from 'antd/lib/icon';
import PropTypes from 'prop-types';
import ListSort from '../yourgoals_component/ListSort';

import moment from 'moment';
import Rabbit from '../yourgoals_component/images/rabbit.png';
import Turtle from '../yourgoals_component/images/turtle.png';

import GoalsDataModel from '../../../../redux/data_models/goal_data_models.js'
//import store from '../../../../redux/store.js'
import initState from '../../../../redux/goals/goal_reducer';

import {Progress, TimePicker ,Row, Col,Button, PageHeader } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';

import './ListPRofileGoals.css';

const { Header} = Layout;
const { RangePicker } = TimePicker;

const longTerm = Turtle;
const shortTerm = Rabbit;

const dataArray = [
  {
    icon: 'question-circle-o',
    color: '#FF5500',
    text: 'hello world',
    title: 'ffd',
    text: 'nana', //retrive from firestore
    steps: ['wash the floor', 'clean the house', 'make food'], //would be an array of strings?
    completedSteps: ['wash the floor'],
    dayWeeks: ['Monday', 'Tuesday','Wednesday'], 
    // shortTerm: 0,
    // longTerm: 1,
    goalLength: 1, //1 is for long term 
    dateTime: null
  }
];

export default class ListSortDemo extends React.Component {
  constructor(props){
    super(props);
      this.state={
        progress:0,
        goalTitle: GoalsDataModel.goals,  //not sure if I need this
        goalDescribtion: '', //not sure if I need this
        goalSteps: 0, //have to get the num of steps from the goals page
        completedGoalSteps: 0,
        dayWeeks: [], 
        // longTerm:null,
        // shortTerm:null,
        goalType: Rabbit, //long or short term
        goalLength: 1,
        dateTime: null
      };
  }


  ProgressChange=(num,steps, completedSteps)=>{
    let totalSteps=0 //5
    let finishedSteps=completedSteps.length
    let progress = 0;

    //count how many total steps there are in the array
    for(num=0; num<steps.length; num++){
      if(steps[num] !== '') totalSteps +=1;
    }    

    //if the number of completed goals is less than totalSteps
    // a portion of a number to the progress bar
    if(this.state.completedGoalSteps <= totalSteps){
      progress += 25; 
    }
    
    this.setState({progress: progress})
    // this.setState({goalSteps: totalSteps})
    this.setState({completedGoalSteps:finishedSteps})
  }

  GoalTypeChange=()=> {
    // let goalLength = dataArray.goalLength;
    // let goalLength=1
    if(dataArray.goalLength==1){
      this.setState({goalType:longTerm})
    } else if (dataArray.goalLength==0){
      this.setState({goalType:shortTerm})
    }
  }

  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'list-sort-demo',
  };

  render() {
    const childrenToRender = dataArray.map((item, i) => {
      const {
        icon, color, title, text,
      } = item;
      return (
        <div key={i} className={`${this.props.className}-list`}>
          <div className={`${this.props.className}-icon`}>
            <Icon type={icon} style={{ color }} />
          </div>
          <div className={`${this.props.className}-text`}>         
          <Row>
          <Col flex="1 1 120px">
            <h1>{title}</h1>
            <p>{text}</p>
            <Progress 
              strokeHeight={5}
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068 ',
                }}
                percent={this.ProgressChange} //have to update to this.ProgressChange later
              />  
              <RangePicker 
                defaultValue={moment('HH:mm')}
                bordered={false}
                disabled
              /> 
              <Button type="primary" shape="circle"> M</Button>
              <Button className="long-term" type="primary" shape="circle"> T</Button>
              <Button className="long-term" type="primary" shape="circle"> W</Button>
              <Button className="short-term" type="primary" shape="circle"> T</Button>
              <Button  type="primary" shape="circle"> F</Button>
              <Button className="long-term" type="primary" shape="circle"> S</Button>
              <Button type="primary" shape="circle"> S</Button>
          </Col>
          <Col flex="0 1 100px">  
          
          <img className="rabbit-goal" src={`${this.GoalTypeChange}`} alt="Logo" /> 
          </Col>
        </Row>
        </div>
        </div>
      );
    });

    return ( 
      <div className={`${this.props.className}-wrapper`}>
        <div className={this.props.className}>
          <ListSort
            dragClassName="list-drag-selected"
            appearAnim={{ animConfig: { marginTop: [5, 30], opacity: [1, 0] } }}
          >
            {childrenToRender}
          </ListSort>
        </div>
      </div>    
    );
  }
}
//<img className="rabbit-goal" src={`${this.state.goalType}`} alt="Logo" />
// <img className="rabbit-goal" src={require(`${this.GoalTypeChange}`)} alt="Logo" />
//<img className="rabbit-goal" src={`${this.state.goalType}`} alt="Logo" />








  // GoalStepsCompleted=(totalSteps)=>{
  //   finishedSteps = completedSteps.length
  //   if(finishedSteps<= goalSteps) 
  //   return this.setState({completedGoalSteps: completedSteps})
  // }
  //updating the state after the components load
  //  componentDidMount(){
    
  //  // progress => this.setState({ progressBar: progress.number}) //results need to update
  //     //title => this.setState({goalTitle: title.title})//title comes from goal components
  // //   describtion => this.setState({goalDescribtion: describtion.text})
  // //   days => this.setState({dayWeeks: days.day})
  // //   longGoal => this.setState({longTerm: longGoal.Rabbit})
  // //   shortGoal => this.setState({shortTerm: shortGoal.Turtle})
  // //   dateInfo=> this.setState({dateTime: dateInfo.date})
  //  }

// import React from 'react';
// import Icon from 'antd/lib/icon';
// import PropTypes from 'prop-types';
// import ListSort from '../yourgoals_component/ListSort';
// import './ListPRofileGoals.css';
// import moment from 'moment';
// import {Progress, TimePicker ,Row, Col,Button, PageHeader } from 'antd'
// import Rabbit from '../yourgoals_component/images/rabbit.png'
// import { Layout, Menu, Breadcrumb } from 'antd';

// const { Header} = Layout;

// const { RangePicker } = TimePicker;
// const dataArray = [
//   {
//     icon: 'question-circle-o',
//     color: '#FF5500',
//     title: 'Chinese Class',
//     text: 'read 2 chapters',
//   },
//   {
//     icon: 'plus-circle-o',
//     color: '#5FC296',
//     title: 'Leet Code',
//     text: 'do problems',
//   },
//   {
//     icon: 'check-circle-o',
//     color: '#2DB7F5',
//     title: 'Good Weather',
//     text: 'would be nice',
//   },
//   {
//     icon: 'cross-circle-o',
//     color: '#FFAA00',
//     title: 'Accounting',
//     text: 'Finish all the hw',
//   },
// ];



// export default class ListSortDemo extends React.Component {

//   // state={
//   //   progressBar:null,
//   //   goalTitle:null,
//   //   goalDescribtion: null,
//   //   dayWeeks: null, 
//   //   longTerm: null,
//   //   shortTerm: null,
//   //   dateTime: null
//   // };

//   //updating the state after the components load
//   // componentDidMount(){
    
//   //   progress => this.setState({ progressBar: progress.number}) //results need to update
//   //   title => this.setState({goalTitle: title.title})//title comes from goal components
//   //   describtion => this.setState({goalDescribtion: describtion.text})
//   //   days => this.setState({dayWeeks: days.day})
//   //   longGoal => this.setState({longTerm: longGoal.Rabbit})
//   //   shortGoal => this.setState({shortTerm: shortGoal.Turtle})
//   //   dateInfo=> this.setState({dateTime: dateInfo.date})
//   // }


//   static propTypes = {
//     className: PropTypes.string,
//   };

//   static defaultProps = {
//     className: 'list-sort-demo',
//   };

//   render() {
//     const childrenToRender = dataArray.map((item, i) => {
//       const {
//         icon, color, title, text,
//       } = item;
//       return (
//         // <PageHeader
//         // className="site-page-header"
//         // onBack={() => null}
//         // title="Title"
//         // subTitle="This is a subtitle"
//         // />,
//         <div key={i} className={`${this.props.className}-list`}>
//           <div className={`${this.props.className}-icon`}>
//             <Icon type={icon} style={{ color }} />
//           </div>
//           <div className={`${this.props.className}-text`}>         
//           <Row>
//           <Col flex="1 1 120px">
//             <h1>{title}</h1>
//             <p>{text}</p>
//             <Progress 
//               strokeHeight={5}
//                 strokeColor={{
//                   '0%': '#108ee9',
//                   '100%': '#87d068',
//                 }}
//                 percent={35.9}
//               />  
//               <RangePicker 
//                 defaultValue={moment('HH:mm')}
//                 bordered={false}
//                 disabled
//               /> 
//               <Button type="primary" shape="circle"> M</Button>
//               <Button className="long-term" type="primary" shape="circle"> T</Button>
//               <Button className="long-term" type="primary" shape="circle"> W</Button>
//               <Button className="short-term" type="primary" shape="circle"> T</Button>
//               <Button  type="primary" shape="circle"> F</Button>
//               <Button className="long-term" type="primary" shape="circle"> S</Button>
//               <Button type="primary" shape="circle"> S</Button>
//           </Col>
//           <Col flex="0 1 100px">  
//             <img className="rabbit-goal"src={Rabbit} alt="Logo" />
//           </Col>
//         </Row>
//         </div>
//         </div>
//       );
//     });
//     return (
     
//       <div className={`${this.props.className}-wrapper`}>
//         <div className={this.props.className}>
//           <ListSort
//             dragClassName="list-drag-selected"
//             appearAnim={{ animConfig: { marginTop: [5, 30], opacity: [1, 0] } }}
//           >
//             {childrenToRender}
//           </ListSort>
//         </div>
//       </div>
      
//     );
//   }
// }