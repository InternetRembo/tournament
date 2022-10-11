import React from 'react';
import {StyledMainPage} from "../styled/MainPage/StyledMainPage";
import Flex from "../styled/helpers/Flex";
import {StyledBox} from "../styled/helpers/Box";
import Text from "../styled/helpers/Text";

const TournamentTable = () => {
    return (
        <StyledMainPage>
            <Flex direction='column'>
                <StyledBox>
                    <Flex justify='space-around'>
                        <Text>Tournament name and season</Text>
                        <Text>тут мають бути кнопочки</Text>
                    </Flex>

                </StyledBox>
                <StyledBox>1</StyledBox>
            </Flex>
        </StyledMainPage>
    );
};

export default TournamentTable;