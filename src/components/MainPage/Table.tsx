import React, { useState } from "react";
import { StyledTable } from "../../styled/MainPage/StyledTable";
import Flex from "../../styled/helpers/Flex";
import TableItem from "./TableItem";
import { useAppSelector } from "../../redux/hooks";
import Button from "../../styled/helpers/StyledButton";
import MatchModal from "./Modal/MatchModal";
import Text from "../../styled/helpers/Text";
import { StyledBox } from "../../styled/helpers/Box";
import CorrectorModal from "./Modal/CorrectorModal";

const Table = () => {
  const [matchModalToggler, setMatchModalToggler] = useState(false);
  const [correctorModalToggler, setCorrectorModalToggler] = useState(false);

  const teamList = useAppSelector(
    (state) => state.tournamentTableReducer.currentTable
  );

  console.log("teamList", teamList);
  return (
    <StyledTable>
      <Flex width="100%" aling="center" justify="space-around">
        <Button
          onClick={() => setMatchModalToggler(true)}
          margin="10px"
          border="3px solid green"
        >
          Create match
        </Button>

        <Button
          onClick={() => setCorrectorModalToggler(true)}
          margin="10px"
          border="3px solid green"
        >
          Corrector
        </Button>

        <StyledBox>
          <Flex justify="flex-end">
            <Text size="20px" margin="0 8px">
              G
            </Text>
            <Text size="20px" margin="0 8px">
              W
            </Text>
            <Text size="20px" margin="0 8px">
              L
            </Text>
            <Text size="20px" margin="0 8px">
              D
            </Text>
            <Text size="20px" margin="0 8px">
              GD
            </Text>
            <Text size="20px" margin="0 8px">
              P
            </Text>
          </Flex>
        </StyledBox>
      </Flex>

      {matchModalToggler ? (
        <MatchModal setMatchModalToggler={setMatchModalToggler} />
      ) : null}

      {correctorModalToggler ? (
        <CorrectorModal setCorrectorModalToggler={setCorrectorModalToggler} />
      ) : null}

      <Flex direction="column">
        {teamList
          .sort((x, y) => y.goalsDifference - x.goalsDifference)
          .sort((x, y) => y.points - x.points)
          .map((el, index) => {
            return <TableItem key={el.name} data={el} position={index + 1} />;
          })}
      </Flex>
    </StyledTable>
  );
};

export default Table;
