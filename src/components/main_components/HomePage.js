import React from 'react'
import styled from '@emotion/styled';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import rabbit from '../../assets/rabbit1.svg'
import LevelBar from './HomePageComponents/levelbar.js'
import Rewards from './HomePageComponents/rewards.js'
import WeeklyChart from './HomePageComponents/graph.js'


const HomePage = () => {
    const HomePageStyle = styled.div`
        flex-direction: column;
        display: flex;
        background: transparent linear-gradient(0deg, #FFFEF0 0%, #9EE8EB 100%) 0% 0% no-repeat padding-box;
    `;

    const HomeGreeting = styled.div`
      color: #6989F6;
      font-size: 50px;
      align-text: left;
      padding:10px 25px;

    `;

    const UserInfoContainer = styled.div`
      padding:25px;
      position:absolute;
      max-height:100%;
      max-width:100%;
      border-radius:50px;
      background:white;
    `;

    const UpperHalfContainer = styled.div`
      display:flex;
    `;

    const UserAvatar = styled.div`
      max-height:300px;
      max-width:300px;
      height:200px;
      width:200px;
      border-radius:50%;
      background: grey;
    `;


    const UserInfoBox = styled.div`
      padding:10px 25px;
      vertical-align:middle;
      justify-content:center;
    `;

    const MiniUserInfoBox = styled.div`
      border-bottom:4px solid #BFDFF7;
      margin-bottom:10px;
    `;

    const UserRewards = styled.div`
      max-height:300px;
      max-width: 500px;
    `;

    const LowerHalfContainer = styled.div`
      display:flex;
    `;

    const WeeklyActivity = styled.div`
    `;

    const UserGoalsOverview = styled.div`
    `;



    return (

    <HomePageStyle>
      <HomeGreeting>Hello, Iza! </HomeGreeting>
          // <React.Fragment>
            // <CssBaseline />
            // <Container maxWidth="55%">
            //   <Typography component="div" style={{ backgroundColor: 'white', height: '100vh',borderRadius:'25px', maxHeight:'100%', maxWidth:'100%'}}>
                  <UserInfoContainer>
                    <UpperHalfContainer>

                      <UserAvatar>
                        <img src={rabbit} alt="Short term goals" max-height={200} max-width={200}/>
                      </UserAvatar>

                      <UserInfoBox>
                        <MiniUserInfoBox>
                          <h2>SAMPLE USERNAME</h2>
                          <h4>sample@email.com</h4>
                        </MiniUserInfoBox>
                        <p>Friend Code: 123456789</p>
                        <LevelBar />
                      </UserInfoBox>

                      <UserRewards>
                        <Rewards />
                      </UserRewards>

                    </UpperHalfContainer>
                    <LowerHalfContainer>

                      <WeeklyActivity>
                        <WeeklyChart />
                      </WeeklyActivity>

                    </LowerHalfContainer>
                  </UserInfoContainer>
          //     </Typography>
          //   </Container>
          // </React.Fragment>
    </HomePageStyle>
    );
}

export default HomePage;
