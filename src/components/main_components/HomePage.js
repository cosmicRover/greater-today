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
      display:inline-flex;
    `;

    const UserAvatar = styled.image`
      vertical-align: middle;
      horizontal-align:middle;
      height:200px;
      max-height:300px;
      max-width:300px;
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

    const WeeklyActivity = styled.div`
    `;

    const UserGoalsOverview = styled.div`
    `;



    return (

    <HomePageStyle>
      <HomeGreeting>Hello, Iza! </HomeGreeting>
          <React.Fragment>
            <CssBaseline />
            <Container maxWidth="55%">
              <Typography component="div" style={{ backgroundColor: 'white', height: '100vh',borderRadius:'25px'}}>
                  <UserInfoContainer>

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
                  </UserInfoContainer>
              </Typography>
            </Container>
          </React.Fragment>
    </HomePageStyle>
    );
}

export default HomePage;
