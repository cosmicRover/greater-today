import React from 'react'
import styled from '@emotion/styled';

const HomePage = () => {
    const HomePageStyle = styled.div`
        flex-direction: column;
        text-align: center;
        justify-content: center;
        display: flex;
    `;

    return (
        <HomePageStyle>You are signed in OMG</HomePageStyle>
    );
}

export default HomePage