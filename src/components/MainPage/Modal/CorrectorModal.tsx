import React, { useState } from "react";
import {
  OutsideSpace,
  StyledModal,
} from "../../../styled/MainPage/StyledModal";
import { useAppSelector } from "../../../redux/hooks";
import Flex from "../../../styled/helpers/Flex";
import { Form } from "react-bootstrap";
import { StyledBox } from "../../../styled/helpers/Box";
import Button from "../../../styled/helpers/StyledButton";
import CorrectorArea from "./CorrectorArea";

type CorrectorModalProps = {
  setCorrectorModalToggler: (arg: boolean) => void;
};

const CorrectorModal = ({ setCorrectorModalToggler }: CorrectorModalProps) => {
  const teamList = useAppSelector(
    (state) => state.tournamentTableReducer.currentTable
  );

  const [team, setTeam] = useState<number | string>(0);
  const [CorrectedData, setCorrectedData] = useState();

  return (
    <OutsideSpace
      onClick={() => {
        setCorrectorModalToggler(false);
      }}
    >
      <StyledModal
        height="400px"
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
          <Flex>
            <Form.Select
              onChange={(e) => {
                setTeam(e.target.value);
              }}
              style={{ width: "40%", minHeight: "40px" }}
              size="lg"
              className="mb-3"
              aria-label="Select a team"
            >
              {teamList.map((el, index) => {
                return (
                  <option value={index} key={el.name}>
                    {el.name}
                  </option>
                );
              })}
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <StyledBox width="380px" padding="0 10px" margin="auto , 0">
                <Flex justify="space-between">
                  <CorrectorArea
                    title={"G"}
                    indication={teamList[+team].games}
                  />
                  <CorrectorArea title={"W"} indication={teamList[+team].win} />
                  <CorrectorArea
                    title={"L"}
                    indication={teamList[+team].loss}
                  />
                  <CorrectorArea
                    title={"D"}
                    indication={teamList[+team].draw}
                  />
                  <CorrectorArea
                    title={"GD"}
                    indication={teamList[+team].goalsDifference}
                  />
                  <CorrectorArea
                    title={"P"}
                    indication={teamList[+team].points}
                  />
                </Flex>
              </StyledBox>
            </Form.Group>
          </Flex>

          {/*<Flex direction="column">*/}
          {/*  {teamList.map((el, index) => {*/}
          {/*    return <div>wqe</div>;*/}
          {/*  })}*/}
          {/*</Flex>*/}

          <Button
            onClick={() => console.log(teamList)}
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
