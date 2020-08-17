import React from "react"
import moment from 'moment';
import Icon from 'antd/lib/icon';
import PropTypes from 'prop-types';
import { Progress, TimePicker, Row, Col, Button, PageHeader } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
const { RangePicker } = TimePicker;


const GoalCell = ({index, icon, color, title, text, goalpic}) =>{
    return(
        <div key={index} className={`list-sort-demo-list`}>
            <div className={`list-sort-demo-icon`}>
                <Icon type={icon} style={{ color }} />
            </div>
            <div className={`list-sort-demo-text`}>
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
                            percent={20} //have to update to this.ProgressChange later
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
                        <Button type="primary" shape="circle"> F</Button>
                        <Button className="long-term" type="primary" shape="circle"> S</Button>
                        <Button type="primary" shape="circle"> S</Button>
                    </Col>
                    <Col flex="0 1 100px">

                        <img className="rabbit-goal" src={goalpic} alt="Logo" />
                    </Col>
                </Row>
            </div>
        </div>
    ) 
}

export default GoalCell