import React, { useState } from "react";
import {
  OutsideSpace,
  StyledModal,
} from "../../../styled/MainPage/StyledModal";
import Flex from "../../../styled/helpers/Flex";
import { Form } from "react-bootstrap";
import { StyledBox } from "../../../styled/helpers/Box";
import Button from "../../../styled/helpers/StyledButton";
import CorrectorArea from "./CorrectorArea";
import Text from "../../../styled/helpers/Text";
import { LeagueType } from "../../../redux/types/tournamentTableTypes";

type CorrectorModalProps = {
  setCorrectorModalToggler: (arg: boolean) => void;
  correctingTeam: LeagueType;
};

const CorrectorModal = ({
  setCorrectorModalToggler,
  correctingTeam,
}: CorrectorModalProps) => {


  const [updatedTeamData, setUpdatedTeamData] =
    useState<LeagueType>(correctingTeam);

  const pushUpdatedData = () => {
    const prevTableData = localStorage.getItem("BritishLeague");
    const parsedPrevTableData = JSON.parse(prevTableData!);
    const newTableData = parsedPrevTableData.map((el: LeagueType) => {
      if (el.name === updatedTeamData.name) {
        return updatedTeamData;
      }
      return el;
    });
    localStorage.setItem("BritishLeague", JSON.stringify(newTableData));
  };
  return (
    <OutsideSpace
      onClick={() => {
        setCorrectorModalToggler(false);
      }}
    >
      <StyledModal
        height="600px"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Flex
          direction="column"
          justify="space-around"
          aling="center"
          height="100%"
        >
          <Flex aling="center" justify="center" width="300px" margin="0 5px">
            <img
              alt={"error"}
              style={{ width: "300px" }}
              src={correctingTeam.img}
            />
          </Flex>
          <Text color="white" size="32px">
            {correctingTeam.name}
          </Text>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <StyledBox width="380px" padding="0 10px" margin="auto , 0">
              <Flex justify="space-between">
                <CorrectorArea
                  setUpdatedTeamData={setUpdatedTeamData}
                  updatedTeamData={updatedTeamData}
                  parameter="games"
                  title={"G"}
                  value={correctingTeam.games}
                />
                <CorrectorArea
                  title={"W"}
                  parameter="win"
                  setUpdatedTeamData={setUpdatedTeamData}
                  updatedTeamData={updatedTeamData}
                  value={correctingTeam.win}
                />

                <CorrectorArea
                  title={"L"}
                  parameter="loss"
                  setUpdatedTeamData={setUpdatedTeamData}
                  updatedTeamData={updatedTeamData}
                  value={correctingTeam.loss}
                />

                <CorrectorArea
                  title={"D"}
                  parameter="draw"
                  setUpdatedTeamData={setUpdatedTeamData}
                  updatedTeamData={updatedTeamData}
                  value={correctingTeam.draw}
                />

                <CorrectorArea
                  title={"GD"}
                  parameter="goalsDifference"
                  setUpdatedTeamData={setUpdatedTeamData}
                  updatedTeamData={updatedTeamData}
                  value={correctingTeam.goalsDifference}
                />

                <CorrectorArea
                  title={"P"}
                  parameter="goalsDifference"
                  setUpdatedTeamData={setUpdatedTeamData}
                  updatedTeamData={updatedTeamData}
                  value={correctingTeam.points}
                />
              </Flex>
            </StyledBox>
          </Form.Group>
          <Button
            onClick={() => {
              pushUpdatedData();
            }}
            color="white"
            border="3px solid white"
            backgroundColor="#ff8000"
            hoverColor="#ff661a"
          >
            Update
          </Button>
        </Flex>
      </StyledModal>
    </OutsideSpace>
  );
};

export default CorrectorModal;
