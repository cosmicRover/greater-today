import React from 'react'
import styled from '@emotion/styled';
import firebase from '../../firebase.js'
import {AuthContext} from '../../services/Auth.js'

const HomePage = () => {
    const HomePageStyle = styled.div`
        flex-direction: column;
        text-align: center;
        justify-content: center;
        display: flex;
        font-size: 55px;
    `;

    const {currentUser} = React.useContext(AuthContext);

    return (
    <HomePageStyle>
        You are signed in OMG {currentUser.email}
        <button onClick={() => {firebase.auth().signOut()}}>Sign OUT</button>
    </HomePageStyle>
    );
}

export default HomePage;