import React from 'react';
import {StyledMainPage} from "../../styled/MainPage/StyledMainPage";
import Flex from "../../styled/helpers/Flex";
import {StyledBox} from "../../styled/helpers/Box";
import Text from "../../styled/helpers/Text";
import Table from "./Table";

const TournamentTable = () => {
    return (
        <StyledMainPage>
            <Flex direction='column'>
                <StyledBox>
                    <Flex justify='space-around'>
                        <Text size='32px' famaly='serif'>Tournament name and season</Text>
                        <Text>тут мають бути кнопочки</Text>
                    </Flex>
                </StyledBox>
                <Table/>
            </Flex>
        </StyledMainPage>
    );
};

export default TournamentTable;