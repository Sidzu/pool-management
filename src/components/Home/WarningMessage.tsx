import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Warning = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--warning);
    height: 67px;
    border: 1px solid var(--warning);
    border-radius: 4px;
    padding-left: 20px;
`;

const Message = styled.div`
    display: inline;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.2px;
`;

const WarningIcon = styled.img`
    width: 22px;
    height: 26px;
    margin-right: 20px;
    color: var(--warning);
`;

<<<<<<< HEAD
const Link = styled.a`
    color: color: var(--warning);
`;

=======
>>>>>>> master
const WarningMessage = () => {
    return (
        <Wrapper>
            <Warning>
                <WarningIcon src="WarningSign.svg" />
                <Message>
                    This is still beta software. Please use small amounts of
                    funds to start. Please reach out in our <Link href="https://discord.gg/ARJWaeF" target="_blank" rel="noopener noreferrer">Discord</Link> for any questions or issues!
                </Message>
            </Warning>
        </Wrapper>
    );
};

export default WarningMessage;
