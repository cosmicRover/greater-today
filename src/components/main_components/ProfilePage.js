import React from 'react'
import styled from '@emotion/styled';


//Questions:
//Getting user image from google Auth
//if profile page should be in main components or its own component folder

const ProfilePage = () => {
    const ProfilePageStyle = styled.div`
        flex-direction: column;
        text-align: center;
        justify-content: center;
        display: flex;
        font-size: 55px;
        height:100%;
        width:100%;
        background: transparent linear-gradient(0deg, #FFFEF0 0%, #9EE8EB 100%) 0% 0% no-repeat padding-box;
    `;
    const floatingGreetingStyle = styled.div`
        color:#6989F6;
        font-size: 50px;
    `;

    const ProfileBox = styled.div`
        background: white;
        max-height: 100%;
        max-width: 50%;
        margin: auto;
        border-radius: 20px;
    `;

    //const {currentUser} = React.useContext(AuthContext);

    //notes: floating greeting will need to be updated with username input
    return (
    <ProfilePageStyle>
        <floatingGreetingStyle> Hi USERNAME! </floatingGreetingStyle>
        <ProfileBox>
          avatar from google auth
          TEXT
        </ProfileBox>
    </ProfilePageStyle>
    );
}

export default ProfilePage;
