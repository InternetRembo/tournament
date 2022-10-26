import React, { useState } from "react";
import {
  OutsideSpace,
  StyledModal,
} from "../../../styled/MainPage/StyledModal";
import Flex from "../../../styled/helpers/Flex";
import Button from "../../../styled/helpers/StyledButton";
import MatchResultForm from "./MatchResultForm";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { SetTableAC } from "../../../redux/reducers/tournamentTableReducer";

type MatchModalProps = {
  setMatchModalToggler: (arg: boolean) => void;
};

export type TeamResults = {
  name: string;
  score: number | string;
};

const MatchModal = ({ setMatchModalToggler }: MatchModalProps) => {
  const dispatch = useAppDispatch();
  const teamList = useAppSelector(
    (state) => state.tournamentTableReducer.currentTable
  );

  const [firstTeamResult, setFirstTeamResult] = useState<TeamResults>({
    name: "",
    score: -1,
  });

  const [secondTeamResult, setSecondTeamResult] = useState<TeamResults>({
    name: "",
    score: -1,
  });

  const setUpdatedTableData = () => {
    const firstTeam = teamList[+firstTeamResult.name];
    const secondTeam = teamList[+secondTeamResult.name];

    const scoreCorrelation = (a: string | number, b: string | number) => {
      if (a > b) {
        return {
          points: 3,
          win: 1,
          loss: 0,
          draw: 0,
        };
      }
      if (b > a) {
        return {
          points: 0,
          win: 0,
          loss: 1,
          draw: 0,
        };
      }
      return {
        points: 1,
        win: 0,
        loss: 0,
        draw: 1,
      };
    };

    const updatedFirstTeam = {
      ...firstTeam,
      games: firstTeam.games + 1,
      points: (firstTeam.points +=
        scoreCorrelation(firstTeamResult.score, secondTeamResult.score)
          ?.points || 0),
      win: (firstTeam.win +=
        scoreCorrelation(firstTeamResult.score, secondTeamResult.score)?.win ||
        0),
      loss: (firstTeam.loss +=
        scoreCorrelation(firstTeamResult.score, secondTeamResult.score)?.loss ||
        0),
      draw: (firstTeam.draw +=
        scoreCorrelation(firstTeamResult.score, secondTeamResult.score)?.draw ||
        0),
      goalsDifference: (firstTeam.goalsDifference +=
        +firstTeamResult.score - +secondTeamResult.score),
    };

    const updatedSecondTeam = {
      ...secondTeam,
      games: secondTeam.games + 1,
      points: (secondTeam.points +=
        scoreCorrelation(secondTeamResult.score, firstTeamResult.score)
          ?.points || 0),
      win: (secondTeam.win +=
        scoreCorrelation(secondTeamResult.score, firstTeamResult.score)?.win ||
        0),
      loss: (secondTeam.loss +=
        scoreCorrelation(secondTeamResult.score, firstTeamResult.score)?.loss ||
        0),
      draw: (secondTeam.draw +=
        scoreCorrelation(secondTeamResult.score, firstTeamResult.score)?.draw ||
        0),
      goalsDifference: (secondTeam.goalsDifference +=
        +secondTeamResult.score - +firstTeamResult.score),
    };

    const updatedTable = teamList.map((el, index) => {
      if (index === +firstTeamResult.name) {
        return updatedFirstTeam;
      }
      if (index === +secondTeamResult.name) {
        return updatedSecondTeam;
      }

      return el;
    });

    console.log("updatedTable", updatedTable);

    const JSONleague = JSON.stringify(updatedTable);

    localStorage.setItem("BritishLeague", JSONleague);

    dispatch(SetTableAC(updatedTable));
  };

  return (
    <OutsideSpace
      onClick={() => {
        setMatchModalToggler(false);
      }}
    >
      <StyledModal
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Flex direction="column" justify="space-around" aling="center">
          <MatchResultForm
            result={firstTeamResult}
            setResult={setFirstTeamResult}
          />
          <MatchResultForm
            result={secondTeamResult}
            setResult={setSecondTeamResult}
          />

          <Button
            onClick={() => {
              setUpdatedTableData();
            }}
            color="white"
            border="3px solid white"
            backgroundColor="#ff8000"
            hoverColor="#ff661a"
          >
            Push!
          </Button>
        </Flex>
      </StyledModal>
    </OutsideSpace>
  );
};

export default MatchModal;
