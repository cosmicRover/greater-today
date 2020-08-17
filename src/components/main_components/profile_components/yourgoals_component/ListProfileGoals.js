import React from 'react';
import Icon from 'antd/lib/icon';
import PropTypes from 'prop-types';
import ListSort from './ListSort';

import moment from 'moment';
import Rabbit from '../yourgoals_component/images/rabbit.png';
import Turtle from '../yourgoals_component/images/turtle.png';

import GoalsDataModel from '../../../../redux/data_models/goal_data_models.js'
//import store from '../../../../redux/store.js'
import initState from '../../../../redux/goals/goal_reducer';

import {Progress, TimePicker ,Row, Col,Button, PageHeader } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';

import './ListPRofileGoals.css';
import GoalCell from './GoalCell';

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
    goalType: "short", //long
    dateTime: null
  },

  {
    icon: 'question-circle-o',
    color: '#FF5500',
    text: 'hello world',
    title: 'ffd',
    text: 'nana', //retrive from firestore
    steps: ['wash the floor', 'clean the house', 'make food'], //would be an array of strings?
    completedSteps: ['wash the floor'],
    dayWeeks: ['Monday', 'Tuesday', 'Wednesday'],
    // shortTerm: 0,
    // longTerm: 1,
    goalType: "long", //long
    dateTime: null
  }


]

function displayGoalPicture(type){
  switch(type){
    case "short":
      return Rabbit
    case "long":
      return Turtle
    default:
      return 
  }
}

// index, icon, color, title, text, goalpic

const ListProfileGoals = () =>{
  return (
      
        dataArray.map((item, index) => {
          return (
            <GoalCell index={index} icon={item.icon} color={item.color} title={item.title} text={item.text} goalpic={displayGoalPicture(item.goalType)}/>
          );
        })
  );
}

export default ListProfileGoals

