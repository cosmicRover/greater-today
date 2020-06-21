import React, { useState } from "react";
import { Link } from "react-router";
import "antd/dist/antd.css";
import "./drawer.css";
import JSCharts from "./JSCharts.js.js.js";
import {
  Statistic,
  Card,
  Row,
  Col,
  Timeline,
  Drawer,
  Progress,
  Button,
} from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { ReactComponent as Rabbit } from "../../assets/side_panel_images/rabbit.svg";
import { ReactComponent as Coin } from "../../assets/side_panel_images/coin.svg";
import { ReactComponent as Streak } from "../../assets/side_panel_images/streak.svg";

import { useMediaQuery } from "react-responsive";

const DrawerSection = () => {
  //CODE FOR DRAWER DECLARATION
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 701 });
  // const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 })
  // const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 700 });
  // const isPortrait = useMediaQuery({ orientation: 'portrait' })
  // const isRetina = useMediaQuery({ minResolution: '2dppx' })

  return (
    <div>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>

      {isTabletOrMobileDevice && (
        <Drawer
          // title="Short Term Goal Analytics"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
          width={320}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Close
              </Button>
            </div>
          }
        >
          <div className="site-statistic-demo-card">
            <Row gutter={10}>
              <Col span={8}>
                <Card>
                  <Statistic
                    title="Streaks"
                    value={113}
                    precision={0}
                    valueStyle={{ color: "#5C7CF8" }}
                    prefix={<Streak />}
                    suffix=""
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <Statistic
                    title="Coins"
                    value={456}
                    precision={0}
                    valueStyle={{ color: "#5C7CF8" }}
                    prefix={<Coin />}
                    suffix=""
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <Statistic
                    title="Exp"
                    value={324}
                    precision={0}
                    valueStyle={{ color: "#5C7CF8" }}
                    prefix={<Rabbit />}
                    suffix=""
                  />
                </Card>
              </Col>
            </Row>
          </div>
          <p class="header-text">Level: 9</p>

          <Progress
            strokeColor={{
              from: "#108ee9",
              to: "#87d068",
            }}
            percent={85.9}
            status="active"
          />

          <p class="main-header-text">Due Dates</p>

          <Timeline>
            <Timeline.Item
              dot={<ClockCircleOutlined className="timeline-clock-icon" />}
              color="red"
            >
              Read 1 Chapter of The Hobbit by: Fri. July 9th, 2020
            </Timeline.Item>
            <Timeline.Item
              dot={<ClockCircleOutlined className="timeline-clock-icon" />}
            >
              Study Cost Accounting by: Wed. July 17th, 2020{" "}
            </Timeline.Item>
          </Timeline>

          <p class="main-header-text">Daily Activity</p>

          <JSCharts />
        </Drawer>
      )}

      {isDesktopOrLaptop && (
        <Drawer
          // title="Short Term Goal Analytics"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
          width={520}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Close
              </Button>
            </div>
          }
        >
          <div className="site-statistic-demo-card">
            <Row gutter={16}>
              <Col span={8}>
                <Card>
                  <Statistic
                    title="Streaks"
                    value={113}
                    precision={0}
                    valueStyle={{ color: "#5C7CF8" }}
                    prefix={<Streak />}
                    suffix=""
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <Statistic
                    title="Coins"
                    value={456}
                    precision={0}
                    valueStyle={{ color: "#5C7CF8" }}
                    prefix={<Coin />}
                    suffix=""
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <Statistic
                    title="Exp"
                    value={324}
                    precision={0}
                    valueStyle={{ color: "#5C7CF8" }}
                    prefix={<Rabbit />}
                    suffix=""
                  />
                </Card>
              </Col>
            </Row>
          </div>
          <p class="header-text">Level: 9</p>

          <Progress
            strokeColor={{
              from: "#108ee9",
              to: "#87d068",
            }}
            percent={85.9}
            status="active"
          />

          <p class="main-header-text">Due Dates</p>

          <Timeline>
            <Timeline.Item
              dot={<ClockCircleOutlined className="timeline-clock-icon" />}
              color="red"
            >
              Read 1 Chapter of The Hobbit by: Fri. July 9th, 2020
            </Timeline.Item>
            <Timeline.Item
              dot={<ClockCircleOutlined className="timeline-clock-icon" />}
            >
              Study Cost Accounting by: Wed. July 17th, 2020{" "}
            </Timeline.Item>
          </Timeline>

          <p class="main-header-text">Daily Activity</p>

          <JSCharts />
        </Drawer>
      )}
    </div>
  );
};
export default DrawerSection;
