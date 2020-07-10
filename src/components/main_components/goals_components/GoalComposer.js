import React from 'react'
import styled from "@emotion/styled"

const PopupExampleTrigger = () => {

    const containerStyle = styled.div`
        height: 500px;
        width: 500px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 10px #00000029;
        border-radius: 14px;
        opacity: 1;
    `;

    return (
        <containerStyle>
            <text>Hello</text>
        </containerStyle>
    );
}

export default PopupExampleTrigger
