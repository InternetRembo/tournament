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
import { LeagueType } from "../../redux/types/tournamentTableTypes";

const Table = () => {
  const [matchModalToggler, setMatchModalToggler] = useState(false);
  const [correctorModalToggler, setCorrectorModalToggler] = useState(false);
  const [correctingTeam, setCorrectingTeam] = useState<LeagueType>({
    draw: 0,
    win: 0,
    games: 0,
    goalsDifference: 0,
    loss: 0,
    name: "DefaultTeam",
    points: 0,
    img: "https://www.nicepng.com/png/full/83-839617_png-file-sad-smiley-black-white.png",
  });

  const teamList = useAppSelector(
    (state) => state.tournamentTableReducer.currentTable
  );

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
        <CorrectorModal
          correctingTeam={correctingTeam}
          setCorrectorModalToggler={setCorrectorModalToggler}
        />
      ) : null}

      <Flex direction="column">
        {teamList
          .sort((x, y) => y.goalsDifference - x.goalsDifference)
          .sort((x, y) => y.points - x.points)
          .map((el, index) => {
            return (
              <TableItem
                setCorrectingTeam={setCorrectingTeam}
                setCorrectorModalToggler={setCorrectorModalToggler}
                key={el.name}
                data={el}
                position={index + 1}
              />
            );
          })}
      </Flex>
    </StyledTable>
  );
};

export default Table;
